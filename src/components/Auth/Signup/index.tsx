import Link from "next/link";
import SignupForm from "./SignupForm";
import { Fragment } from "react";

export default function Signup() {
	return (
		<Fragment>
			<SignupForm />
			<div className="mt-6 text-center">
				<p>
					¿Ya tienes una cuenta?{" "}
					<Link href="/auth/sign-in" className="text-primary">
						Inicia sesión
					</Link>
				</p>
			</div>
		</Fragment>
	);
}
