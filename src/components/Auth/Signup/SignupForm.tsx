"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterInputType, registerSchema } from "@/schemas/register-schema";

import { EmailIcon, PasswordIcon } from "@/assets/icons";
import InputGroup from "@/components/FormElements/InputGroup";
import { signUpUser } from "@/actions/auth/sign-up.action";

export default function SignupForm() {
	const [serverError, setServerError] = useState<string | null>(null);

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<RegisterInputType>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			nombre: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (data: RegisterInputType) => {
		const formData = new FormData();
		formData.append("nombre", data.nombre);
		formData.append("email", data.email);
		formData.append("password", data.password);
		formData.append("confirmPassword", data.confirmPassword);

		const res = await signUpUser(formData);
		if (res?.error) setServerError(JSON.stringify(res.error));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
			<Controller
				name="nombre"
				control={control}
				render={({ field, fieldState }) => (
					<InputGroup
						label="Nombre"
						type="text"
						placeholder="Tu nombre completo"
						{...field}
						error={fieldState.error?.message}
						required
					/>
				)}
			/>

			<Controller
				name="email"
				control={control}
				render={({ field, fieldState }) => (
					<InputGroup
						label="Email"
						type="email"
						placeholder="correo@ejemplo.com"
						icon={<EmailIcon />}
						{...field}
						error={fieldState.error?.message}
						required
					/>
				)}
			/>

			<Controller
				name="password"
				control={control}
				render={({ field, fieldState }) => (
					<InputGroup
						label="Contraseña"
						type="password"
						placeholder="Mínimo 6 caracteres"
						icon={<PasswordIcon />}
						{...field}
						error={fieldState.error?.message}
						required
					/>
				)}
			/>

			<Controller
				name="confirmPassword"
				control={control}
				render={({ field, fieldState }) => (
					<InputGroup
						label="Confirmar Contraseña"
						type="password"
						placeholder="Repite tu contraseña"
						icon={<PasswordIcon />}
						{...field}
						error={fieldState.error?.message}
						required
					/>
				)}
			/>

			{serverError && (
				<p className="text-red-500 text-sm">{serverError}</p>
			)}

			<button
				type="submit"
				className="w-full bg-primary text-white p-4 rounded-lg"
				disabled={isSubmitting}
			>
				{isSubmitting ? "Registrando..." : "Registrarse"}
			</button>
		</form>
	);
}
