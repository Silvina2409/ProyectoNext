"use client"

import { useState } from "react"
import Boton from "../ui/Boton"
import { useAuthContext } from "../context/AuthContext"

import React from 'react'

const LoginForm = () => {
    const {registerUser, loginUser, googleLogin} = useAuthContext()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setValues ({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault ()
    }
  return (
    <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 ">
        <form onSubmit={handleSubmit} className="bg-white py-4 px-6 rounded-xl max-w-md w-full">
            <h3> Login</h3>
            <input
                type="email"
                value= {values.email}
                required
                placeholder="Ingrese su email"
                className="p-2rounded w-full border border-blue-100 block my-4"
                name= "email"
                onChange={handleChange}
                />
            <input
                type="password"
                value= {values.password}
                required
                placeholder="Ingrese password"
                className="p-2rounded w-full border border-blue-100 block my-4"
                name= "password"
                onChange={handleChange}
                />
                <Boton onClick={() => loginUser(values)} className="mr-4"> Ingresar</Boton>
                <Boton onClick = {() => registerUser(values)}> Registrar</Boton>
                <Boton className="mt-2 block" onClick ={ googleLogin}> Ingresar con Google</Boton>
        </form>


    </div>
  )
}

export default LoginForm