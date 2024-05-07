"use client"
import { useAuthContext } from "../context/AuthContext";
import Boton from "../ui/Boton";

import React from 'react'

const LogOutButton = () => {
    const {logOut} = useAuthContext()
  return  <Boton className="bg-red-500" onClick= {logOut} > Cerrar Sesión </Boton>
    
  
}

export default LogOutButton