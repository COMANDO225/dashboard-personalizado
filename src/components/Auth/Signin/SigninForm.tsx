"use client";
import { EmailIcon, PasswordIcon } from "@/assets/icons";
import Link from "next/link";
import React, { useState } from "react";
import InputGroup from "../../FormElements/InputGroup";
import { Checkbox } from "../../FormElements/checkbox";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInputType, loginSchema } from "@/schemas/login-schema";
import { signInUser } from "@/actions/auth/sign-in.ations";
import { useAuth } from "@/_store/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function SigninForm() {
	const router = useRouter();
	const { setUser } = useAuth();

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<LoginInputType>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: LoginInputType) => {
		const formData = new FormData();
		formData.append("email", data.email);
		formData.append("password", data.password);

		toast
			.promise(signInUser(formData), {
				loading: "Iniciando sesión...",
				success: (res) => {
					setUser(res.user);
					router.push("/");
					return `¡Bienvenido, ${res.user.nombre}! 👋`;
				},
				error: (err) => {
					console.log("Mensaje de error:", err.message);
					if (err.message === "Credenciales inválidas") {
						setError("email", {
							type: "manual",
							message: "Email o contraseña incorrectos",
						});
						setError("password", {
							type: "manual",
							message: "Email o contraseña incorrectos",
						});
					}
					return err.message;
				},
			})
			.catch(() => {
				setError("email", {
					type: "manual",
					message: "Email o contraseña incorrectos",
				});
				setError("password", {
					type: "manual",
					message: "Email o contraseña incorrectos",
				});
			});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
			<Controller
				name="email"
				control={control}
				render={({ field, fieldState }) => (
					<InputGroup
						type="email"
						label="Email"
						placeholder="Ingresa tu email"
						icon={<EmailIcon />}
						className="mb-4 [&_input]:py-[15px]"
						{...field}
						error={fieldState.error?.message}
						disabled={isSubmitting}
						required
					/>
				)}
			/>

			<Controller
				name="password"
				control={control}
				render={({ field, fieldState }) => (
					<InputGroup
						type="password"
						label="Contraseña"
						placeholder="Ingresa tu contraseña"
						icon={<PasswordIcon />}
						className="mb-4 [&_input]:py-[15px]"
						{...field}
						error={fieldState.error?.message}
						disabled={isSubmitting}
						required
					/>
				)}
			/>

			{/* <div className="mb-6 flex items-center justify-between gap-2 py-2 font-medium">
				<Checkbox
					label="Recuerdame"
					name="remember"
					withIcon="check"
					minimal
					radius="md"
				/>

				<Link
					href="/auth/forgot-password"
					className="hover:text-primary dark:text-white dark:hover:text-primary"
				>
					¿Olvidaste tu contraseña?
				</Link>
			</div> */}

			<div className="mb-4.5">
				<button
					className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
					type="submit"
				>
					{isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
					{isSubmitting && (
						<span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent dark:border-t-transparent" />
					)}
				</button>
			</div>
		</form>
	);
}
