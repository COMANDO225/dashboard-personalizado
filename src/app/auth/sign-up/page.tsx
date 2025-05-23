import AuthLayout from "@/components/Auth/AuthLayout";
import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Crear cuenta",
	description: "Crea una cuenta",
};

export default function SignUpPage() {
	return (
		<AuthLayout
			pageName="Registro"
			title="¡Únete a nosotros!"
			subtitle="Crea tu cuenta y empieza a dominar"
			description="Completa los campos a continuación para registrarte en la plataforma"
		>
			<Signup />
		</AuthLayout>
	);
}
