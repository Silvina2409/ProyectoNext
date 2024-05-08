import React from 'react'
import ContactForm from '@/Components/contacto/ContactForm'
import Footer from '../../Components/ui/Footer'

export const metadata = {
    title: "contacto Furniture Tienda",
    description: "Contacto"
  
  }


const Contacto = () => {
  return (
    <>
       
        <main className='container m-auto '>
            <h1 className='text-4xl text-black-600 font-bold my-4'> Contacto </h1>
            <hr/>
            <ContactForm/>
        </main>
        
        <Footer/>

    </>
  )
}

export default Contacto