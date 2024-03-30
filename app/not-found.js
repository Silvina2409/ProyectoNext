"use client"

import Boton  from "../Components/ui/Boton";
import { useRouter } from "next/navigation";

export default function NotFound () {
    const router = useRouter()
    return (
        <>
            <main className="container m-auto">
                <h2 className="text-4xl text-black my-4"> Página no encontrada</h2>
                <hr/>
                <p className="text-base mt-4"> La página  a la que quieres acceder no existe </p>
                <Boton onClick={ ()=> router.back()}> 
                    Volver
                </Boton>
            </main>
        
        </>
    )
}