import React from "react";
import { useRouter } from "next/router";
import Resultado from "./Resultadotrab";

const Ofertas: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row w-full max-h-screen py-5 pl-8">
      <div className="flex flex-row bg-white rounded-lg w-full    shadow overflow-hidden">
        <div className="flex flex-col bg-white rounded-lg shadow   overflow-y-auto">
          <Resultado />
        </div>
      </div>
      <div
        className="flex flex-col bg-white rounded-lg ml-5 shadow  w-60 pt-5 "
        style={{ position: "sticky", top: 0 }}
      >
 
           <h2 className=" mx-5  ">Criterios de búsqueda  </h2>
 
      </div> 
    </div>
  );
};

export default Ofertas;
