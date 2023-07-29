import React, { CSSProperties } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Profile: React.FC = () => {
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
          <h1 className="  text-xl pt-5 ">Saludos, Usuario.</h1>
          <h2 className=" text-xl pb-3"> A continuación, tu perfil</h2>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="bg-white  mt-3 w-full p-3 rounded-lg">
          <h2 className="font-medium pl-3">Información general</h2>
          <div className="flex flex-row pl-1">
            <div className="flex bg-white align-center text-center ">
              <Image
                src="/perfildali.jpg"
                alt="cambiar"
                width={300}
                height={50}
                className="rounded-lg m-2 ml-3"
              />
            </div>
            <div className="flex flex-col pl-5">
              <div className="flex flex-row pt-4 text-2xl font-bold">
                <h2> Salvador</h2> <h2 className="ml-2"> Dalí</h2>
                <h2 className="ml-2"> i Pou</h2>
              </div>
              <div className="flex flex-row mt-3">
                <h2 className="font-medium">Ocupación actual: </h2>
                <p className="pl-3">En busca de oportunidades Profesionales</p>
              </div>
              <div className="flex flex-row">
                <h2 className="font-medium">Ocupación anterior: </h2>
                <p className="pl-3">Técnico en extrusión de aluminio</p>
              </div>
              <div className="flex flex-col">
                <h2 className="font-medium">Carta de presentación: </h2>
                <p className="pl-3 flex-wrap pr-10 mb-5">
                  Técnico en extrusión de aluminio en extrusión de aluminio en
                  extrusión de aluminio en extrusión de aluminio, en extrusión
                  de aluminio. Hola, buenos días, buenos días. en extrusión de
                  aluminio en extrusión de aluminio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="bg-white  mt-3 w-full py-4 rounded-lg mr-3">
            <div className="flex flex-col pl-5">
              <h2 className="font-medium">Experiencia laboral</h2>
              <div className="pl-7 pt-2">
                <p className="font-medium">Empresa</p>
                <p className="pl-2"> Desde abril 2002 hasta debrero 2023</p>
                <p className="pl-2"> Posición</p>
                <p className="pl-2"> Descripción (opcional)</p>
              </div>
              <div className="pl-7 pt-2">
                <p className="font-medium">Empresa</p>
                <p className="pl-2"> Desde abril 1997 hasta debrero 2002</p>
                <p className="pl-2"> Posición</p>
                <p className="pl-2"> Descripción (opcional)</p>
              </div>
            </div>
          </div>
          <div className="bg-white  mt-3 w-full py-5 rounded-lg mr-3">
            <div className="flex flex-col  pl-7">
              <h2 className="font-medium">Educación y formaciones</h2>
              <div className="pl-8">
                <div className="flex flex-row mt-5">
                  <p className="font-medium">Insitiución educativa</p>
                  <p className="pl-2"> Nombre de la institución</p>
                </div>
                <p className="pl-2"> Posición</p>
                <p className="pl-2"> Descripción (opcional)</p>
              </div>
            </div>
            <div className="flex flex-col  pl-8 mt-5">
              <div className="pl-8">
                <div className="flex flex-row">
                  <p className="font-medium">Insitiución educativa</p>
                  <p className="pl-2"> Nombre de la institución</p>
                </div>
                <p className="pl-2"> Posición</p>
                <p className="pl-2"> Descripción (opcional)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
