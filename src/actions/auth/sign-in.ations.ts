"use server";

import { cookies } from "next/headers";
import { loginSchema, LoginInputType } from "@/schemas/login-schema";
import { redirect } from "next/navigation";
import { User } from "@/interfaces/user.interface";

export async function signInUser(formData: FormData) {
	const rawData = Object.fromEntries(formData.entries());
	const parse = loginSchema.safeParse(rawData);
	if (!parse.success) return { error: parse.error.flatten().fieldErrors };

	const cookieStore = await cookies();
	const data: LoginInputType = parse.data;
	const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (!res.ok) {
		const { message } = await res.json();
		cookieStore.delete("token-almacen");
		console.log(message);
		throw new Error(message || "Error al iniciar sesión");
	}

	const { token, data: user } = await res.json();
	if (!token || !user) {
		cookieStore.delete("token-almacen");
		throw new Error("No se ha podido iniciar sesión 😓");
	}

	cookieStore.set({
		name: "token-almacen",
		value: token,
		httpOnly: true,
		path: "/",
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 24 * 7, // 7 days
	});

	return { user };
}

export async function logoutUser() {
	const cookieStore = await cookies();
	cookieStore.delete("token-almacen");
	redirect("/auth/sign-in");
}
