import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import MainHeader from '../components/landing/MainHeader'
import BolsasDeEmpleo from '../components/landing/BolsasDeEmpleo'
import SobreNosotros from '../components/landing/SobreNosotros'
import Navbarout from '../components/navbar/NavbarOut'
import Head from 'next/head'

export default function Home() {
  return (
    <>
            <Head>
            <title>Empleotecnic</title>
            <meta name="Empleotecnic" content="Bolsa de empleo especializada en perfiles técnicos para el sector del vidrio, carpintería y protección solar" />        
            </Head>
      <div>      
      <Navbarout />
      <div className="flex flex-col items-center  font-mono text-sm bg-gradient-to-r from-gray-700 to-cyan-950 ">
        <MainHeader/>
        <BolsasDeEmpleo/>
        <SobreNosotros/>

      </div>
      </div>
      </>
  )
}


