import React, { CSSProperties } from "react";
 import { useRouter } from "next/router";
 
const Seguimientos: React.FC = () => {
  const router = useRouter();
 
  return (
    <div className="flex flex-col  ">
         <h1 className="text-cyan-950 px-10 text-xl ">
         Este es el contenido para Seguimientos
        </h1>
     </div>
  );
};
export default Seguimientos;
