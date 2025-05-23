"use client";

import { ChevronUpIcon } from "@/assets/icons";
import {
	Dropdown,
	DropdownContent,
	DropdownTrigger,
} from "@/components/ui/dropdown";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LogOutIcon, SettingsIcon, UserIcon } from "./icons";
import { logoutUser } from "@/actions/auth/sign-in.ations";
import { useAuth } from "@/_store/useAuth";
import { Skeleton } from "@/components/ui/skeleton";

export function UserInfo() {
	const [isOpen, setIsOpen] = useState(false);
	const user = useAuth((state) => state.user);

	const foto =
		"https://res.cloudinary.com/dro4ur0kq/image/upload/v1675441683/facebook/user/default_pic_zswxlq.png";

	const handleCerrarSesion = async () => {
		setIsOpen(false);
		await logoutUser();
	};

	return (
		<Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
			<DropdownTrigger className="rounded select-none align-middle outline-none ring-primary ring-offset-2 focus-visible:ring-1 dark:ring-offset-gray-dark">
				<span className="sr-only">My Account</span>

				<figure className="flex items-center gap-3 select-none">
					<Image
						src={user?.foto ?? foto}
						className="size-12 rounded-full"
						alt={`Avatar de ${user?.nombre}`}
						role="presentation"
						width={200}
						height={200}
					/>
					<figcaption className="flex items-center gap-1 font-medium text-dark dark:text-dark-6 max-[1024px]:sr-only">
						{user ? (
							user.nombre
						) : (
							<Skeleton className="w-[70px] h-6 rounded-full" />
						)}

						<ChevronUpIcon
							aria-hidden
							className={cn(
								"rotate-180 transition-transform",
								isOpen && "rotate-0"
							)}
							strokeWidth={1.5}
						/>
					</figcaption>
				</figure>
			</DropdownTrigger>

			<DropdownContent
				className="border border-stroke bg-white shadow-md dark:border-dark-3 dark:bg-gray-dark min-[230px]:min-w-[17.5rem]"
				align="end"
			>
				<h2 className="sr-only">User information</h2>

				<figure className="px-5 py-3.5">
					<figcaption className="max-w-[100%] space-y-1 overflow-hidden text-base font-medium">
						<div className="mb-2 leading-none text-dark dark:text-white">
							{user?.nombre}
						</div>

						<div className="overflow-hidden truncate whitespace-nowrap text-gray-6">
							{user?.email}
						</div>
					</figcaption>
				</figure>

				<hr className="border-[#E8E8E8] dark:border-dark-3" />

				<div className="p-2 text-base text-[#4B5563] dark:text-dark-6 [&>*]:cursor-pointer">
					<Link
						href={"/profile"}
						onClick={() => setIsOpen(false)}
						className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
					>
						<UserIcon />

						<span className="mr-auto text-base font-medium">
							Ver perfil
						</span>
					</Link>

					<Link
						href={"/pages/settings"}
						onClick={() => setIsOpen(false)}
						className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
					>
						<SettingsIcon />

						<span className="mr-auto text-base font-medium">
							Configuración de la cuenta
						</span>
					</Link>
				</div>

				<hr className="border-[#E8E8E8] dark:border-dark-3" />

				<div className="p-2 text-base text-[#4B5563] dark:text-dark-6">
					<button
						className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
						onClick={handleCerrarSesion}
					>
						<LogOutIcon />

						<span className="text-base font-medium">
							Cerrar sesión
						</span>
					</button>
				</div>
			</DropdownContent>
		</Dropdown>
	);
}
