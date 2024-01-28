"use client"

import { useContext,createContext,useEffect,useState } from "react"
import { signInWithPopup,signOut,onAuthStateChanged,GoogleAuthProvider } from "firebase/auth"
import {auth} from '../app/firebase'
const AuthContext = createContext()



export const AuthContextProvider = ({children})=>{
    const [guser,setUser] = useState(null)
        const googleSignIn =  ()=>{
           const provider = new GoogleAuthProvider()
           signInWithPopup(auth,provider)
        }
   const logOut = ()=>{
    signOut(auth)
   }

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
    });

    return () => unsubscribe();
   },[guser])

    return (
    <AuthContext.Provider value={{guser,googleSignIn,logOut}}>{children}</AuthContext.Provider>
           )
}


export const UserAuth = () => {
    return useContext(AuthContext)
}