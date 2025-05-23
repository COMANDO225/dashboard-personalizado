"use client";

import { SidebarProvider } from "@/components/Layouts/sidebar/sidebar-context";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { User } from "../interfaces/user.interface";
import { useAuth } from "@/_store/useAuth";
import { useEffect } from "react";

interface ProvidersProps {
	children: React.ReactNode;
	user: User | null;
}

export function Providers({ children, user }: ProvidersProps) {
	const setUser = useAuth((state) => state.setUser);

	useEffect(() => {
		if (user) {
			setUser(user);
		}
	}, [user, setUser]);

	return (
		<ThemeProvider defaultTheme="light" attribute="class">
			<Toaster />
			<SidebarProvider>{children}</SidebarProvider>
		</ThemeProvider>
	);
}
