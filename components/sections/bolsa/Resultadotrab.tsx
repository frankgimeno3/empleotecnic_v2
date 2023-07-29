import React, { CSSProperties } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const Resultadoof: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-full my-5 pl-8 pr-5">
      <div className="flex flex-row bg-white rounded-lg  my-1 h-full shadow border border-grey-300 pb-5 mb-5">
        <div className="py-auto flex flex-col justify-center text-center align-center p-5 ">
          <Image
            src="/profilepictures/ingeniero1.jpg"
            alt="ing1"
            width={150}
            height={20}
            className="rounded-lg shadow-lg border border-grey-300"
          />
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-8 hover:bg-slate-600 text-sm py-0.5">Ver solicitud</button>
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-1 hover:bg-slate-600 text-sm py-0.5">Ver perfil</button>
        </div>
        <div className="flex flex-col my-5">
          <h2 className="font-medium">Nombre Operario Apellido</h2>
          <h2>Técnico Mecánico Industrial</h2>
          <p className="mt-2 text-gray-500">
            Descripción extensa y opcional que cada operario puede redactar y publicar si así lo cree conveniente. Tiene un límite de extensión.
          </p>
          
        </div>
      </div>
      <div className="flex flex-row bg-white rounded-lg  my-1 h-full shadow border border-grey-300">
        <div className="py-auto flex flex-col justify-center text-center align-center p-5 ">
          <Image
            src="/profilepictures/operario1.jpg"
            alt="opo1"
            width={150}
            height={20}
            className="rounded-lg shadow-lg border border-grey-300"
          />
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-8 hover:bg-slate-600 text-sm py-0.5">Ver solicitud</button>
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-1 hover:bg-slate-600 text-sm py-0.5">Ver perfil</button>
        </div>
        <div className="flex flex-col my-5">
          <h2 className="font-medium">Nombre Operario Apellido</h2>
          <h2>Técnico Mecánico Industrial</h2>
          <p className="mt-2 text-gray-500">
            Descripción extensa y opcional que cada operario puede redactar y publicar si así lo cree conveniente. Tiene un límite de extensión.
          </p>
          <div className="flex flex-row   text-sm  mt-2">
           
          </div>
        </div>
      </div>

      <div className="flex flex-row bg-white rounded-lg  my-1 h-full shadow border border-grey-300 mb-5 ">
        <div className="py-auto flex flex-col justify-center text-center align-center p-5 ">
          <Image
            src="/profilepictures/operaria1.jpg"
            alt="opa1"
            width={150}
            height={20}
            className="rounded-lg shadow-lg border border-grey-300"
          />
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-8 hover:bg-slate-600 text-sm py-0.5">Ver solicitud</button>
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-1 hover:bg-slate-600 text-sm py-0.5">Ver perfil</button>
        </div>
        <div className="flex flex-col my-5">
          <h2 className="font-medium">Nombre Operario Apellido</h2>
          <h2>Técnico Mecánico Industrial</h2>
          <p className="mt-2 text-gray-500">
            Descripción extensa y opcional que cada operario puede redactar y publicar si así lo cree conveniente. Tiene un límite de extensión.
          </p>
          <div className="flex flex-row   text-sm mt-2">
           
          </div>
        </div>
      </div>
      <div className="flex flex-row bg-white rounded-lg  my-1 h-full shadow border border-grey-300 mb-5 ">
        <div className="py-auto flex flex-col justify-center text-center align-center p-5 ">
          <Image
            src="/profilepictures/arquitecta1.jpg"
            alt="arqa1"
            width={150}
            height={20}
            className="rounded-lg shadow-lg border border-grey-300"
          />
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-8 hover:bg-slate-600 text-sm py-0.5">Ver solicitud</button>
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-1 hover:bg-slate-600 text-sm py-0.5">Ver perfil</button>
        </div>
        <div className="flex flex-col my-5">
          <h2 className="font-medium">Nombre Operario Apellido</h2>
          <h2>Técnico Mecánico Industrial</h2>
          <p className="mt-2 text-gray-500">
            Descripción extensa y opcional que cada operario puede redactar y publicar si así lo cree conveniente. Tiene un límite de extensión.
          </p>
          <div className="flex flex-row   text-sm mt-2">
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resultadoof;
