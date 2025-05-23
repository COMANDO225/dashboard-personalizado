import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().trim().email("Email inválido"),
	password: z.string().min(6, "Mínimo 6 caracteres"),
});

export type LoginInputType = z.infer<typeof loginSchema>;
