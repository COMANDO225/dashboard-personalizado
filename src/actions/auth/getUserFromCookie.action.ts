"use server";
import { cookies } from "next/headers";

export async function getUserFromCookie() {
	console.log("entrando a la cookie");
	const cookieStore = await cookies();
	const token = cookieStore.get("token-almacen")?.value;

	if (!token) return null;

	try {
		const res = await fetch(`${process.env.BACKEND_URL}/auth/me`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			cache: "no-store",
		});
		console.log("Response desde el servidor:", res);
		if (!res.ok) return null;
		return await res.json();
	} catch {
		console.log("Error al obtener el usuario desde la cookie");
		return "error";
	}
}
