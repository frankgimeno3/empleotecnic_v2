import React, { useState } from "react";
import Navleft from "../../components/navbar/Navleft";
import Navtop from "../../components/navbar/Navtop";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { GetServerSideProps, NextPage } from "next";

import Bolsa from "../../components/sections/bolsa/Bolsa";
import Inicio from "../../components/sections/inicio/Inicio";
import Ofertas from "../../components/sections/ofertas/Ofertas";
import Profile from "../../components/sections/profile/Profile";
import Seguimientos from "../../components/sections/seguimientos/Seguimientos";

interface HomeProps {
  loggedUserName: string;
  loggedAccount: string;
}

const Home: NextPage<HomeProps> = ({
  loggedUserName,
  loggedAccount,
}) => {
  const [element, setElement] = useState<string>("Inicio");

  const renderComponent = () => {
    switch (element) {
      case "Bolsa":
        return <Bolsa />;
      case "Inicio":
        return <Inicio />;
      case "Ofertas":
        return <Ofertas />;
      case "Profile":
        return <Profile />;
      case "Seguimientos":
        return <Seguimientos />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row">
      <Navleft setElement={setElement} element={element} />

      <div className="flex flex-col ml-24 pl-24 w-screen min-h-screen">
            <Navtop />
            <div className="flex flex-col bg-slate-300 align-center p-10 h-full">
              {renderComponent()}
            </div>
      </div>
    </div>
  );
};

export default Home;export const getServerSideProps: GetServerSideProps<
  HomeProps
> = async (context) => {
  const value = Cookies.get("authvalue");
  let loggedUserName = "Usuario"; // Valor por defecto si no se encuentra el usuario
  let loggedAccount = "";

  if (value) {
    loggedAccount = value.toString();
    console.log(loggedAccount);

    try {
      const userResponse = await fetch(
        `http://localhost:5000/users/${loggedAccount}`,
        {
          method: "GET",
        }
      );

      if (userResponse.ok) {
        const userData = await userResponse.json();
        loggedUserName = userData.email;
      } else {
        console.error("Ha ocurrido un error al obtener los datos del usuario");
      }
    } catch (error) {
      console.error("Ha ocurrido un error en la solicitud del usuario", error);
    }
  } else {
    console.log("pos no");
  }

  return {
    props: {
      loggedUserName,
      loggedAccount,
    },
  };
};
