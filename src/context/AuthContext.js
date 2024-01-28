// 'use client'
// import React from 'react';
// import {
//     onAuthStateChanged,
//     getAuth,
// } from 'firebase/auth';
// import firebase_app from '@/firebase/config';

// const auth = getAuth(firebase_app);

// export const AuthContext = React.createContext({});

// export const useAuthContext = () => React.useContext(AuthContext);

// export const AuthContextProvider = ({
//     children,
// }) => {
//     const [user, setUser] = React.useState(null);
//     const [loading, setLoading] = React.useState(true);

//     React.useEffect(() => {
        // const unsubscribe = onAuthStateChanged(auth, (user) => {
        //     if (user) {
        //         setUser(user);
        //     } else {
        //         setUser(null);
        //     }
        //     setLoading(false);
        // });

        // return () => unsubscribe();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user }}>
//             {loading ? <div>Loading...</div> : children}
//         </AuthContext.Provider>
//     );
// };


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