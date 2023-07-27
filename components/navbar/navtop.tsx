import React, { CSSProperties } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Navtop: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    Cookies.remove('authvalue');
    try {
      const res = await fetch('http://localhost:5000/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      if (res.status === 200) {
        router.push('/login');
      } else {
        console.error('No se pudo cerrar sesión');
      }
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
    router.push('/');
  };

  return (
    <nav  className='flex flex-row bg-white '>
      <div className="pt-7 pb-3 px-20 bg-white  shadow">
              <h1 className="text-cyan-950 px-10 text-xl ">
                El contenido de esta nav debe ser dinámico y afectar al resto del contenido
              </h1>
            </div>
    </nav>
  );
};
export default Navtop;