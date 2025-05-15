import AlmeydaLogo from "./Brand/almeyda.brand";

export function Logo() {
  return (
    <div className="relative flex h-10 max-w-[10.847rem] items-center gap-2 text-black dark:text-white">
      <AlmeydaLogo size={40} fill="currentColor" />
      <h2 className="text-[32px] font-bold">Almeyda</h2>
    </div>
  );
}
