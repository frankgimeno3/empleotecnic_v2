import React, { CSSProperties } from "react";
 import { useRouter } from "next/router";
 
const Miniaturas: React.FC = () => {
  const router = useRouter();
 
  return (
    <div className="flex flex-row w-full h-full my-5 pl-8">
        <div className="flex flex-col bg-white rounded-lg   w-full shadow "></div>
        <div className="flex flex-col bg-white rounded-lg ml-5 px-14 shadow">
          <div className="px-24">
            <h2 className="">Criterios de búsqueda seleccionados</h2>
          </div>
        </div>
     </div>
  );
};
export default Miniaturas;
