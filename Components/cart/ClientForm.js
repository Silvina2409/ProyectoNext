"use client"

import { useState } from "react"
import Boton from "../ui/Boton"
import { useCartContext } from "../context/CartContext"
import {db} from "@/firebase/config"
import { setDoc, doc, Timestamp} from "firebase/firestore"

const createOrder = async (values, items) => {
    const order = {
        client: values,
        items: items.map(item => ({
            title: item.title,
            price: item.price,
            id: item.id,
            quantity: item.quantity
                })),
        date: new Date().toISOString()
    }

const docId = Timestamp.fromDate(new Date()).toMillis()
const orderRef = doc (db, "orders", String(docId))
await setDoc (orderRef, order)
return docId
}    

const ClientForm = () => {
    const {cart} = useCartContext()

    const [values, setValues] = useState ({
        email: "",
        direction: "",
        nombre: ""
    })

    const handleChange = (e) =>{
        setValues ({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await createOrder(values, cart)
        console.log(result)
    }
    return (
        <form onSubmit={handleSubmit} className="my-12">
            <input
                type="nombre"
                required
                placeholder="tu nombre"
                className="p-2 rounded w-1/2 border border-blue-100 block my-4"
                name="nombre"
                onChange = {handleChange}
            />
             <input
                type="direccion"
                required
                placeholder="tu dirección"
                className="p-2 rounded w-1/2 border border-blue-100 block my-4"
                name="direccion"
                onChange = {handleChange}
            /> 
             <input
                type="email"
                required
                placeholder="tu email"
                className="p-2 rounded w-1/2 border border-blue-100 block my-4"
                name="email"
                onChange = {handleChange}
            />       
            <Boton type="submit"> Terminar la compra</Boton>
        </form>
    )


}

export default ClientForm