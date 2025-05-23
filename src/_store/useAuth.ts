import { create } from "zustand";
import { User } from "@/interfaces/user.interface";

interface AuthState {
	user: User | null;
	setUser: (user: User) => void;
	logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
	user: null,
	setUser: (user) => set({ user }),
	logout: () => set({ user: null }),
}));
