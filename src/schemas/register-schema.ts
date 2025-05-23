// schemas/register-schema.ts
import { z } from "zod";

export const registerSchema = z
	.object({
		nombre: z.string().min(2, "Nombre requerido"),
		email: z.string().email("Email inválido"),
		password: z.string().min(6, "Mínimo 6 caracteres"),
		confirmPassword: z.string().min(6, "Confirma tu contraseña"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: "Las contraseñas no coinciden",
	});

export type RegisterInputType = z.infer<typeof registerSchema>;
