
import { GoogleAuthProvider, signInWithPopup, signOut, } from "firebase/auth";
import {doc, setDoc} from 'firebase/firestore';
import React, { useState, useEffect } from "react";
import { auth, db } from "../Config/Firebase";
const authContext = React.createContext({
    Login: () => {},
    logout: () => {},
    updateProfilePic: () => {},
    user: null,
    isLoading: true,
});

const {Provider} = authContext;

const AuthProvider = ({children}) => {
    const email = "sbeauchampprod@gmail.com";
    const [user, setUser] = useState();
    const [isLoading, setLoading] = useState(true);

    
    
    const Login = async() => {
        const providerGoogle = new GoogleAuthProvider();
        const cred = await signInWithPopup(auth, providerGoogle);
        saveDoc(cred.user);
        
    }
    const logout = async() => {
        signOut(auth);
        setUser();
    }
    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false)
        });
        
        return unsub;
    },[]);
    
    
    const saveDoc = async(user) => {
        try {
            const docRef = doc(db, 'users', user.uid);
            await setDoc(docRef, {
                nom: user.displayName,
                email: user.email,
                photo: user.photoURL
            },{merge: true})

        }
        catch(error){
            console.log(error)
        }

    }
    


    return (
        <Provider value={{Login, logout, user, isLoading}}>
            {children}
        </Provider>
    )
}

export {AuthProvider, authContext};