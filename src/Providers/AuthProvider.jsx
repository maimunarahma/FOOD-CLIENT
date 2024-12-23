import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const registerUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
}
const signoutUser=()=>{
    return signOut(auth)
}

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current) => {
        setUser(current)
    })
    return () => {
        unSubscribe()
    }
}, [])

const authvalue={
    loginUser,
    registerUser,
    signoutUser,
    user,
    setUser
}
    return (
        <AuthContext.Provider value={authvalue}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;