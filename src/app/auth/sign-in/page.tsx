import Signin from "@/components/Auth/Signin";
import AlmeydaLogo from "@/components/Brand/almeyda.brand";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Inicia sesión en tu cuenta Almeyda",
};

export default function SignIn() {
  return (
    <div className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="Iniciar sesión" />

      <div className="rounded-3xl bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <Signin />
            </div>
          </div>

          <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
            <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
              <Link className="mb-10 inline-block" href="/">
                <div className="relative flex h-10 max-w-[10.847rem] items-center gap-2 text-black dark:text-white">
                  <AlmeydaLogo size={40} fill="currentColor" />
                  <h2 className="text-[32px] font-bold">Almeyda</h2>
                </div>
              </Link>
              <p className="mb-3 text-xl font-medium text-dark dark:text-white">
                Inicia sesión en tu cuenta masna
              </p>

              <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
                ¡Bienvenido mi king!
              </h1>

              <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
                Por favor, inicia sesión en tu cuenta completando los campos
                necesarios a continuación
              </p>

              <div className="mt-31">
                <Image
                  src={"/images/grids/grid-02.svg"}
                  alt="Logo"
                  width={405}
                  height={325}
                  className="mx-auto dark:opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
