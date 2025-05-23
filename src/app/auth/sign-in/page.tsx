import AuthLayout from "@/components/Auth/AuthLayout";
import Signin from "@/components/Auth/Signin";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Iniciar sesión",
	description: "Inicia sesión en tu cuenta Almeyda",
};

export default function SignInPage() {
	return (
		<AuthLayout
			pageName="Iniciar sesión"
			title="¡Bienvenido!"
			subtitle="Inicia sesión en tu cuenta"
			description="Por favor, inicia sesión en tu cuenta completando los campos necesarios a continuación"
		>
			<Signin />
		</AuthLayout>
	);
}
