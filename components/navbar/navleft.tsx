import React, { CSSProperties } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navleft: React.FC = () => {
  const router = useRouter();

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
    <nav className="bg-slate-800 text-white py-5 pr-20 pl-10 w-200 fixed top-0 left-0 h-screen flex flex-col justify-between ">
      <div className="flex flex-col text-left">
        <div className="font-bold pt-5">
          <Link href="/">
            <p>EMPLEOTECNIC.COM</p>
          </Link>
        </div>

        <div className="flex flex-row align-center py-2 ">
          <h2 className="align-center py-2 pr-2">NombreUsuario</h2>
          <div className="flex bg-white rounded-full overflow-hidden align-center text-center ">
            <Image
              src="/profileico.png"
              alt="Profile Icon"
              width={40}
              height={40}
              />
          </div>
        </div>
      </div>

       <div className="flex flex-col">
        <div>
          <h2>Inicio</h2>
        </div>
        <div>
          <h2>Ofertas de Empleo</h2>
        </div>
        <div>
          <h2>Bolsa de trabajadores</h2>
        </div>
        <div>
          <h2>Seguimientos</h2>
        </div>
      </div>

      <div className="flex flex-row">
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default Navleft;
