import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext= createContext()

export const AuthProvider =({children})=>{
    const [currentUser , setCurrentUser] = useState(null);
    const [userLoggedIn,setUserLoggedIn] = useState(false);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,initializeUser);
    return unsubscribe
    },[])
    const initializeUser=(user)=>{
         if(user){
            setCurrentUser({...user})
            setUserLoggedIn(true)
            setLoading(false)

         }else{
            setCurrentUser(null)
            setUserLoggedIn(false)
         }
    }
    const value = {
        currentUser,
        userLoggedIn,
        loading
    }
    return(
        <AuthContext value={value}>
              {!loading && children}
        </AuthContext>

    )

}