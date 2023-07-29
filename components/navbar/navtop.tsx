import React, { CSSProperties, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navtop: React.FC = () => {
  const router = useRouter();
  const [haynotif, sethaynotif] = useState(false);

  return (
    <nav className="flex flex-row bg-white shadow py-4 pl-14 justify-between ">
      <div className="w-full flex flex-row pr-24 pl-4">
        <input
          type="text"
          placeholder="Buscar empresas, personas, ofertas de empleo y trabajadores por palabra clave"
          className="w-full border border-gray-400 rounded-l-lg px-4 py-1.5"
        />
        <button className="btn btn-primary bg-slate-700 text-white px-2 rounded-r-lg py-1">
          Buscar
        </button>
      </div>
      {haynotif ? (
        <div className="flex rounded-full  overflow-hidden align-center text-center mr-6 pb-1">
          <Image src="/navicons/kmp5.png" alt="empty" width={25} height={10} />
        </div>
      ) : (
        <div className="flex rounded-full  overflow-hidden align-center text-center mr-6 pb-1">
          <Image src="/navicons/kmp0.png" alt="empty" width={25} height={10} />
        </div>
      )}
    </nav>
  );
};

export default Navtop;
