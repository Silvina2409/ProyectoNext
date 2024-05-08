"use client"

import { useState } from "react"
import Boton from "../ui/Boton"
import {db, storage} from "@/firebase/config"
import {doc, updateDoc} from "firebase/firestore"
import {ref, uploadBytes, getDownloadURL } from "firebase/storage"

const updateProduct = async (id, values, file) => {
    let fileURL = values.image
    if (file){
        const storageRef = ref (storage, values.id)
        const fileSnapshot = await uploadBytes (storageRef, file)
        fileURL = await getDownloadURL(fileSnapshot, ref)
    }
    const docRef = doc (db, "productos", id)
    return updateDoc (docRef, {
        title: values.title,
        description: values.description,
        stock: Number (values.stock),
        price: Number (values.price),
        type: values.type,
        image: fileURL
    })
    .then(() => console.log ("producto actualizado correctamente"))
}
const EditForm = ({item}) =>{
    const {title, description,stock, price, type, image } = item
    const [values, setValues] = useState({title, description, stock,price,type,image})
    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues ({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault ()
        await updateProduct(item.id, values, file)

    }
    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label> Nombre</label>
                <input 
                type= "text"
                value={values.title}
                required
                className="p-2 rounded w-full border border-blue-100 block my-4"
                name=" title"
                onChange={handleChange}
                /> 
                
                <label> Imagen</label>
                <input 
                type= "file"
                 className="p-2 rounded w-full border border-blue-100 block my-4"
                name=" title"
                onChange={(e) => setFile(e.target.files[0])}
                />

                <label> Precio</label>
                <input 
                type= "number"
                value={values.price}
                required
                className="p-2 rounded w-full border border-blue-100 block my-4"
                name=" price"
                onChange={handleChange}
                /> 

                <label> Stock</label>
                <input 
                type= "number"
                value={values.stock}
                required
                className="p-2 rounded w-full border border-blue-100 block my-4"
                name=" stock"
                onChange={handleChange}
                /> 

                <label> Categoría </label>
                <input 
                type= "text"
                value={values.type}
                required
                className="p-2 rounded w-full border border-blue-100 block my-4"
                name=" type"
                onChange={handleChange}
                /> 

                <label> Descripción</label>
                <input 
                type= "number"
                value={values.description}
                required
                className="p-2 rounded w-full border border-blue-100 block my-4"
                name=" description"
                onChange={handleChange}
                /> 
                <Boton type="submit"> Enviar</Boton>
            </form>

        </div>
    )
}
export default EditForm