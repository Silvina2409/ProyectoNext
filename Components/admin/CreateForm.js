"use client"

import { useState } from "react"
import Boton from "../ui/Boton"
import {doc, setDoc} from "firebase/firestore"
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {db, storage} from "@/firebase/config"


const createProduct = async (values, file) => {
    const storageRef =  ref (storage, values.id)
    const fileSnapshot = await uploadBytes (storageRef, file)
    const fileURL = await getDownloadURL (fileSnapshot, ref)


    const docRef = doc (db, "productos", values.id)
    return setDoc(docRef,
         {...values,
        image: fileURL})
    .then(() => console.log ("producto agregado")) 
}


const CreateForm = () => {
    const [values, setValues] = useState ({
        title: "",
        description: "",
        stock: 0,
        price: 0,
        type: "",
        id: ""
    })
    const [file, setFile] = useState(null)
    const handleChange = (e) => {
        setValues ({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct (values, file)
    }    
    
  return (
    <div className="container m-auto mt-6 max-w-lg">
        <form onSubmit={handleSubmit} className="my-12">
            <label> Id: </label>
            <input 
                type="number"
                value={values.id}
                required
                className="p-2 rounded w-full border border-blue-100 block my-4"
                name="id"
                onChange={handleChange}
            /> 
             <label> Imagen: </label>
            <input 
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className= "p-2 rounded w-full border border-blue-100 block my-4"
            /> 
             <label> Nombre: </label>
            <input 
                type="text"
                value={values.title}
                required
                className="p-2 rounded w-full border border-blue-100 block my-4"
                name="title"
                onChange={handleChange}
            /> 
            <label> Precio: </label> 
            <input 
                type="number"
                value={values.price}
                required
                className="p-2 rounded w-full border border-blue-100 block my-4"
                name="price"
                onChange={handleChange}
            />
             <label> Stock: </label>
            <input 
                type="number"
                value={values.stock}
                required
                className="p-2 rounded w-full border border-blue-100 block my-4"
                name="stock"
                onChange={handleChange}
            />  
             <label> Categoría: </label>
            <input 
                type="text"
                value={values.type}
                required
                className="p-2 rounded w-full border border-blue-100 block my-4"
                name="type"
                onChange={handleChange}
            /> 
             <label> Descripción:</label>
            <textarea
                value={values.description}
                className="p-2 rounded w-full border border-blue-100 block my-4"
                name="description"
                onChange={handleChange}
            /> 
            <Boton type="submit"> Enviar</Boton>
        </form>

    </div>
  )
}

export default CreateForm