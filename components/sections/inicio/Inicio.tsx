import React, { CSSProperties } from "react";
import { useRouter } from "next/router";
import Image from "next/image";


const Inicio: React.FC = () => {
  const router = useRouter();
  const alertsnumber = 5;
  return (
    <div className="flex flex-col mr-10 ml-5 w-full py-5 pr-5">
      <div className="flex flex-row bg-white rounded-lg ">
      <div className="flex bg-white rounded-lg   align-center text-center ">
            <Image
              src="/perfildali.jpg"
              alt="cambiar"
              width={80}
              height={20}
              className="rounded-lg m-2 ml-3"
            />
          </div>
        <div className="flex flex-col text-gray-800 pl-5 "> 
        <h1 className="  text-xl pt-5 ">
          Saludos, Usuario.
        </h1>
        <h2 className=" text-xl pb-3">Tiene <span className="font-bold">{alertsnumber}</span> notificaciones nuevas</h2>
        </div>

      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full">
        <div className="bg-white  mt-3 w-full py-10 rounded-lg">Oportunidades</div>
        <div className="bg-white  mt-3 mx-4 w-full py-10 rounded-lg">Suscripciones</div>
        <div className="bg-white  mt-3 w-full py-10 rounded-lg">Empresas</div>

        </div>
        <div className="flex flex-row wlfull">
        <div className="bg-white  mt-3 w-full py-10 rounded-lg">Gestión de mi cuenta</div>
        <div className="bg-white  mt-3 mx-4 w-full py-10 rounded-lg">Mi Perfil</div>
        <div className="bg-white  mt-3 w-full py-10 rounded-lg">Información de mi sector</div>

        </div>
      </div>
      <div className="my-10 py-0.5 bg-black"/>
  
      <div className="flex flex-col w-full">
        Ofertas publicadas recientemente por las empresas a las que sigues
      <div className="bg-white  mt-3 w-full py-10 rounded-lg">Oferta 1</div>
      <div className="bg-white  mt-3 w-full py-10 rounded-lg">Oferta2</div>

      </div>

    </div>
  );
};
export default Inicio;
