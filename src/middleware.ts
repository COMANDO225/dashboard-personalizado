// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const token = request.cookies.get("token-almacen")?.value;
	console.log("Token desde middleware:", token);
	const { pathname } = request.nextUrl;

	const isAuthPage = pathname.startsWith("/auth");

	// si no hay token y no está en una ruta /auth → redirige al login
	if (!token && !isAuthPage) {
		const loginUrl = request.nextUrl.clone();
		loginUrl.pathname = "/auth/sign-in";
		return NextResponse.redirect(loginUrl);
	}

	// si ya tiene token pero está intentando ir al login, redirige al dashboard
	if (token && isAuthPage) {
		const homeUrl = request.nextUrl.clone();
		homeUrl.pathname = "/";
		return NextResponse.redirect(homeUrl);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
