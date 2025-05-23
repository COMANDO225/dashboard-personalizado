// hooks/useAuthInitializer.ts
"use client";
import { useAuth } from "@/_store/useAuth";
import { useEffect } from "react";

export const useAuthInitializer = () => {
	const setUser = useAuth((s) => s.setUser);

	useEffect(() => {
		const token = document.cookie
			.split("; ")
			.find((row) => row.startsWith("token-almacen="))
			?.split("=")[1];

		if (!token) return;

		fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => (res.ok ? res.json() : null))
			.then((user) => {
				if (user) setUser(user);
			})
			.catch((err) => {
				console.warn("No se pudo rehidratar user", err);
			});
	}, []);
};
