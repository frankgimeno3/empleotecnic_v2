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
            src="/logos/fakelogo2.png"
            alt="fake2"
            width={150}
            height={20}
            className="rounded-lg shadow-lg border border-grey-300"
          />
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-8 hover:bg-slate-600 text-sm py-0.5">Ver oferta</button>
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-1 hover:bg-slate-600 text-sm py-0.5">Ver empresa</button>
        </div>
        <div className="flex flex-col my-5">
          <h2 className="font-medium">Técnico mecánico industrial</h2>
          <h2>TVITEC</h2>
          <p className="mt-2 text-gray-500">
            Buscamos técnico industrial con experiencia en la fabricación de
            máquinas y componentes electrónicos
          </p>
          <div className="flex flex-row   text-sm  mt-2">
            <p className="font-bold text-gray-600 ">Salario</p>
            <p className="ml-2"> 18€/h </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Jornada</p>
            <p className="ml-2"> Jornada completa </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Días laborables</p>
            <p className="ml-2"> De lunes a viernes </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Ubicación</p>
            <p className="ml-2">
              c/Alcobendas, Fuente del Rocío, 01022, España
            </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Beneficios</p>
            <p className="ml-2">
              14 pagas, formación y programas de promoción interna.
            </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Requisitos adicionales</p>
            <p className="ml-2">
              Disponer de permiso de trabajo, formación especificada.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row bg-white rounded-lg  my-1 h-full shadow border border-grey-300">
        <div className="py-auto flex flex-col justify-center text-center align-center p-5 ">
          <Image
            src="/logos/fakelogo1.png"
            alt="fake1"
            width={150}
            height={20}
            className="rounded-lg shadow-lg border border-grey-300"
          />
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-8 hover:bg-slate-600 text-sm py-0.5">Ver oferta</button>
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-1 hover:bg-slate-600 text-sm py-0.5">Ver empresa</button>
        </div>
        <div className="flex flex-col my-5">
          <h2 className="font-medium">Técnico mecánico industrial</h2>
          <h2>TVITEC</h2>
          <p className="mt-2 text-gray-500">
            Buscamos técnico industrial con experiencia en la fabricación de
            máquinas y componentes electrónicos
          </p>
          <div className="flex flex-row   text-sm  mt-2">
            <p className="font-bold text-gray-600 ">Salario</p>
            <p className="ml-2"> 18€/h </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Jornada</p>
            <p className="ml-2"> Jornada completa </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Días laborables</p>
            <p className="ml-2"> De lunes a viernes </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Ubicación</p>
            <p className="ml-2">
              c/Alcobendas, Fuente del Rocío, 01022, España
            </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Beneficios</p>
            <p className="ml-2">
              14 pagas, formación y programas de promoción interna.
            </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Requisitos adicionales</p>
            <p className="ml-2">
              Disponer de permiso de trabajo, formación especificada.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row bg-white rounded-lg  my-1 h-full shadow border border-grey-300 mb-5 ">
        <div className="py-auto flex flex-col justify-center text-center align-center p-5 ">
          <Image
            src="/logos/fakelogo3.png"
            alt="fake3"
            width={150}
            height={20}
            className="rounded-lg shadow-lg border border-grey-300"
          />
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-8 hover:bg-slate-600 text-sm py-0.5">Ver oferta</button>
          <button className="bg-slate-700 text-white shadow border border-grey-300 rounded-lg mx-3 mt-1 hover:bg-slate-600 text-sm py-0.5">Ver empresa</button>
        </div>
        <div className="flex flex-col my-5">
          <h2 className="font-medium">Técnico mecánico industrial</h2>
          <h2>TVITEC</h2>
          <p className="mt-2 text-gray-500">
            Buscamos técnico industrial con experiencia en la fabricación de
            máquinas y componentes electrónicos
          </p>
          <div className="flex flex-row   text-sm mt-2">
            <p className="font-bold text-gray-600 ">Salario</p>
            <p className="ml-2"> 18€/h </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Jornada</p>
            <p className="ml-2"> Jornada completa </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Días laborables</p>
            <p className="ml-2"> De lunes a viernes </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Ubicación</p>
            <p className="ml-2">
              c/Alcobendas, Fuente del Rocío, 01022, España
            </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Beneficios</p>
            <p className="ml-2">
              14 pagas, formación y programas de promoción interna.
            </p>
          </div>
          <div className="flex flex-row   text-sm">
            <p className="font-bold text-gray-600 ">Requisitos adicionales</p>
            <p className="ml-2">
              Disponer de permiso de trabajo, formación especificada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resultadoof;
