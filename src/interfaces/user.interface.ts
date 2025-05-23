export interface User {
	id: string;
	rolid: string;
	nombre: string;
	email: string;
	estado: number;
	foto?: string | null;
	cover?: string | null;
	usuariocreacion?: string | null;
	fechacreacion?: string | null;
	usuariomodificacion?: string | null;
	fechamodificacion?: string | null;
}
