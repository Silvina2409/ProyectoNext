"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Footer from '../../Components/ui/Footer'
import Boton from '../../Components/ui/Boton'

const Nosotros = () => {
  const router = useRouter()
  return (
    <>
  
    <div className=' m-auto container'>
        <h1 className='text-4-xl text-black text-3xl my-4 ml-4'>Nosotros </h1>
        <hr/>
        <p  className='text-base mt-5 ml-10'> Somos una empresa dedicada al diseño y fabricación de mobiliario funcional con proósito, desarrollamos productos pensados para personas en distintas etapas y con diferentes estilos de vida. Nuestra filosofia se basa en cubrir todos los detalles para mejorar la calidad en los espacios del ser humano  </p>
        <p  className='text-base mt-4 ml-10'> En Furniture transformamos la estética convencional de los muebles, obteniendo productos de diseños exclusivos y funcionales de gran impacto en el mercado.  </p>
        <p  className='text-base mt-4 ml-10'> Contamos con un equipo altamente comprometido, capacitado y profesional que garantiza una excelente atención y asesoría, la eficiencia en todas las operaciones y la calidad de los productos con orientación a la satisfacción de nuestros clientes </p>
        
    </div>
    <Boton className="mx-40 my-20 bg-gray-100 " onClick ={() => router.back() } >
      Volver
    </Boton>
    <Footer/>
    </>
  )
}

export default Nosotros