import React from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarleftProps {
  setElement: React.Dispatch<React.SetStateAction<string>>;
  element: string;
}

const Navleft: React.FC<NavbarleftProps> = ({ setElement, element }) => {
  const router = useRouter();

  const handleElementClick = (elementName: string) => {
    setElement(elementName);
  };

  const handleLogout = async () => {
    Cookies.remove("authvalue");
    try {
      const res = await fetch("http://localhost:5000/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (res.status === 200) {
        router.push("/login");
      } else {
        console.error("No se pudo cerrar sesión");
      }
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
    router.push("/");
  };

  return (
    <nav className="bg-slate-800 text-white py-5    w-400 pr-5 fixed top-0 left-0 h-screen flex flex-col justify-between shadow">
      <div className="flex flex-col text-left pl-4">
        <div className="flex flex-row font-light pt-5 ">
          <Link href="/dashboard">
            <p className="text-xs">
              <span className="font-bold text-2xl">emple<span className="text-red-600 font-bolder">o</span>tecnic</span> .com
            </p>
          </Link>
        </div>

        <div
          className={`flex flex-row  py-1.5 flex flex-row align-center py-2 pl-2 pt-8 text-sm${
            element === "Perfil" ? "font-red-600" : " "
          }`}
          onClick={() => handleElementClick("Perfil")}
        >
          <Image
            src="/navicons/profileicon2.png"
            alt="Profile Icon"
            width={40}
            height={40}
          />
          <h2 className="align-center py-2 pl-2">Mi Perfil</h2>
        </div>
      </div>

      <div className="flex flex-col    text-sm">
        <div
          className={`flex flex-row pl-4  py-1.5 ${
            element === "Inicio" ? "bg-gray-200 bg-opacity-10" : ""
          }`}
          onClick={() => handleElementClick("Inicio")}
        >
          <div className="flex bg-white rounded-full  overflow-hidden align-center text-center w-35 h-35  ">
            <Image
              src="/navicons/inicioicon2.png"
              alt="inicioicon2"
              width={40}
              height={40}
            />
          </div>
          <h2 className="pt-2 pl-2">Inicio</h2>
        </div>
        <div
          className={`flex flex-row pl-4 py-1.5 ${
            element === "Ofertasempleo" ? "bg-gray-200 bg-opacity-10" : ""
          }`}
          onClick={() => handleElementClick("Ofertasempleo")}
        >
          <div className="flex bg-white rounded-full  overflow-hidden align-center text-center  ">
            <Image
              src="/navicons/dollaricon2.png"
              alt="ofertas"
              width={40}
              height={40}
            />
          </div>
          <h2 className="pt-2 pl-2">Ofertas de Empleo</h2>
        </div>
        <div
          className={`flex flex-row w-full pl-4 py-1.5 ${
            element === "Bolsa" ? "bg-gray-200 bg-opacity-10" : ""
          }`}
          onClick={() => handleElementClick("Bolsa")}
        >
          <div className="flex bg-white rounded-full  overflow-hidden align-center text-center w-35 h-35  ">
            <Image
              src="/navicons/workersicon2.png"
              alt="workersicon2"
              width={40}
              height={40}
            />
          </div>
          <h2 className="pt-2 pl-2 pr-3">Bolsa de trabajadores</h2>
          
         </div>
        <div
          className={`flex flex-row pl-4 py-1.5 ${
            element === "Seguimientos" ? "bg-gray-200 bg-opacity-10" : ""
          }`}
          onClick={() => handleElementClick("Seguimientos")}
        >
          <div className="flex bg-white rounded-full  overflow-hidden align-center text-center w-35 h-35  ">
            <Image
              src="/navicons/seguimicon2.png"
              alt="seguim"
              width={40}
              height={40}
            />
          </div>
          <h2 className="pt-2 pl-2 ">Seguimientos</h2>
        </div>
      </div>

      <div className="flex flex-row  text-slate-800 shadow pl-2 text-center">
        <button
          onClick={handleLogout}
          className="text-center  px-2 py-1.5  text-sm font-medium mx-1 bg-white rounded-lg"
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navleft;
