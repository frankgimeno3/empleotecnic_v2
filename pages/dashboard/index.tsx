import Tarjetanotificacion from "../../components/Dashboard/Tarjetanotificacion";
import React from "react";
import Navbar from "../../components/Navbar/NavbarIn";
import Navbarleft from "../../components/Navbar/Navbarleft";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { GetServerSideProps, NextPage } from 'next';

interface NotificacionesProps {
  loggedUserName: string;
  loggedAccount: string;
}

const Notificaciones: NextPage<NotificacionesProps> = ({ loggedUserName, loggedAccount }) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row mt-10 pt-5 w-screen  ">
        <Navbarleft />
        <div className="flex flex-col w-full ml-24 pl-24">
          <div className="bg-gray-100">
            <div className="pt-7 pb-3 px-20 bg-white  shadow">
              <h1 className="text-cyan-950 px-10 text-xl ">
                Saludos, <span className="font-bold">{loggedUserName}</span>
              </h1>
            </div>

            <div className="flex-column mt-2 shadow bg-white min-h-screen mx-20 ">
              <div className="flex flex-row  py-3 justify-between">
                <h1 className="text-cyan-950 text-xl px-10 mt-1">
                  Notificaciones
                </h1>
                <div className="flex-row px-10 mt-1">
                <p>{loggedAccount}</p>

                  {[...Array(5)].map((_, index) => (
                    <button
                      key={index}
                      className="bg-gray-500 text-white  px-1.5 rounded text-sm hover:bg-cyan-900 mr-2"
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button className="bg-gray-500 text-white  px-1.5 rounded text-sm hover:bg-cyan-900">
                    ... Ir al final
                  </button>
                </div>
              </div>
              <div className="flex-column ">
                {[...Array(5)].map((_, index) => (
                  <Tarjetanotificacion key={index} loggedAccount={loggedAccount} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Notificaciones;

export const getServerSideProps: GetServerSideProps<NotificacionesProps> = async (context) => {
  const value = Cookies.get('authvalue');
  let loggedUserName = 'Usuario'; // Valor por defecto si no se encuentra el usuario
  let loggedAccount = '';

  if (value) {
    loggedAccount = value.toString();  
    console.log(loggedAccount)

     try {
      const userResponse = await fetch(`http://localhost:5000/users/${loggedAccount}`, {
        method: 'GET',
      });

      if (userResponse.ok) {
        const userData = await userResponse.json();
        loggedUserName = userData.email;
      } else {
         console.error('Ha ocurrido un error al obtener los datos del usuario');
      }
    } catch (error) {
       console.error('Ha ocurrido un error en la solicitud del usuario', error);
    }
  } else {console.log("pos no")}

  return {
    props: {
      loggedUserName,
      loggedAccount,
    },
  };
};
