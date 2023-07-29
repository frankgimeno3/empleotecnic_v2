import React, { CSSProperties } from "react";
 import { useRouter } from "next/router";
 
const Seguimientos: React.FC = () => {
  const router = useRouter();
 
  return (
    <div className="flex flex-col h-full w-full my-5 pl-8  ">
      <div className="flex flex-row bg-white rounded-lg h-full shadow "> Empleos solicitados</div>
      <div className="flex flex-row bg-white rounded-lg my-5  h-full shadow  "> Solicitudes publicadas</div>
      <div className="flex flex-row bg-white rounded-lg h-full shadow "> Contactos directos</div>
 
 </div>
  );
};
export default Seguimientos;
