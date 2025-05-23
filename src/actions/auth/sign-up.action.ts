"use server";

import { registerSchema, RegisterInputType } from "@/schemas/register-schema";
import { redirect } from "next/navigation";

export async function signUpUser(formData: FormData) {
	console.log("formData", formData);
	const raw = Object.fromEntries(formData.entries());
	const parse = registerSchema.safeParse(raw);
	if (!parse.success) return { error: parse.error.flatten().fieldErrors };

	const data: RegisterInputType = parse.data;

	const dataApi = {
		...data,
		rol: "USUARIO",
	};

	console.log("dataApi", dataApi);

	const res = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(dataApi),
	});

	const result = await res.json();
	console.log("result", result);

	if (!res.ok) return { error: result.message };

	redirect("/auth/sign-in");
}
