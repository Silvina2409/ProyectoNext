import React from 'react'

import Footer from '../../Components/ui/Footer'

export const metadata = {
    title: "Nosotros Furniture Tienda",
    description: "Esto somos nosotros"
  
  }


const Contacto = () => {
  return (
    <>
       
        <main className='container m-auto '>
            <h1 className='text-4xl text-black-600 font-bold my-4'> Contacto </h1>
            <hr/>
            <p className='text-base mt-4'> Página de Contacto</p>
        </main>
        
        <Footer/>

    </>
  )
}

export default Contacto