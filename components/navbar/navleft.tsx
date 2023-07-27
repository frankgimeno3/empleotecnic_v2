import React, { CSSProperties } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Navleft: React.FC = () => {
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
    <nav style={navStyles}>
      {/* Primer div */}
      <div style={columnStyles}>
        <div>
          <Link href="/">
            <a>EMPLEOTECNIC.COM</a>
          </Link>
        </div>
        <div>
          <h2>NombreUsuario</h2>
        </div>
      </div>

      {/* Segundo div */}
      <div style={columnStyles}>
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

      {/* Componente Cerrarsesion */}
      <div style={columnStyles}>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </nav>
  );
};

const navStyles: CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  width: '200px',
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const columnStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

export default Navleft;