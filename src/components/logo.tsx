import AlmeydaLogo from "./Brand/almeyda.brand";

export function Logo() {
	return (
		<div className="relative flex h-10 max-w-[210px] items-center gap-2 text-black dark:text-white">
			<AlmeydaLogo size={32} fill="currentColor" />
			<h2 className="text-2xl font-bold">Maderera</h2>
		</div>
	);
}
