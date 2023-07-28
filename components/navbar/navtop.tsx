import React, { CSSProperties, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navtop: React.FC = () => {
  const router = useRouter();
  const [haynotif, sethaynotif] = useState(false) 
  
  return (
    <nav className="flex flex-row bg-white shadow py-6 pl-10 justify-between">
      <h1 className="text-cyan-950 px-10 text-xl ">
        El contenido de esta nav debe ser dinámico y afectar al resto del
        contenido
      </h1>
      {haynotif ? (
        <div className="flex rounded-full  overflow-hidden align-center text-center mr-10 pb-1">
          <Image src="/navicons/kmp5.png" alt="empty" width={25} height={10} />
        </div>
      ) : (
        <div className="flex rounded-full  overflow-hidden align-center text-center mr-10 pb-1">
          <Image src="/navicons/kmp0.png" alt="empty" width={25} height={10} />
        </div>
      )}
    </nav>
  );
};

export default Navtop;