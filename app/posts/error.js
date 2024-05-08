"use client"
import Boton from "@/Components/ui/Boton"
import { useEffect } from "react"

export default function Error (error, reset) {
    useEffect(() => {
        console.log (error)
    }, [error])
    return (
        <div className="container m-auto mt-6">
            <h3 className="text-xl"> Página de error </h3>
            <hr className="my-6"/>
            <Boton onClick={reset}>  Vuelva a intentar </Boton>
        </div>
    )
}