"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { auth, provider, db } from "@/firebase/config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth"


const AuthContext = createContext()


export const useAuthContext = () => useContext(AuthContext)

const registerUser = async (values) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password)

}
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null,
    })



    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const logOut = async () => {
        await signOut(auth)

    }
    const googleLogin = async () => {
        await signInWithPopup(auth, provider)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
             
                    setUser({
                        logged: true,
                        email: user.email,
                        uid: user.uid
                    })      
                }   
             else {

                setUser({
                    logged: false,
                    email: null,
                    uid: null
                }
                )
            }
        })
    }, [])


    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            loginUser,
            logOut,
            googleLogin
        }}>

            {children}
        </AuthContext.Provider>
    )
}
