import { GoogleAuthProvider, signInWithPopup, signOut, } from "firebase/auth";
import {doc, getDocs, collection, addDoc, setDoc} from 'firebase/firestore';
import React, { useState, useEffect } from "react";
import { auth, db } from "../Config/Firebase";
import { useLocation, useNavigate } from "react-router-dom";

const authContext = React.createContext({
    Login: () => {},
    logout: () => {},
    updateProfilePic: () => {},
    ajouterProjet: () => {},
    modifierProjet: () => {},
    user: null,
    isLoading: true,
});

const {Provider} = authContext;

const AuthProvider = ({children}) => {
    const [email, setEmail] = useState();
    const [user, setUser] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getDocument = async() => {
            const refs = await getDocs(collection(db, "users"));
            console.log(refs)
            setEmail(refs.docs.map(doc => doc.data()
            ));
            
        };
        getDocument() 
    },[])
    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false)
        });
        
        return unsub;
    },[]); 

    console.log(email);
    
    const Login = async() => {
        const providerGoogle = new GoogleAuthProvider();
        const cred = await signInWithPopup(auth, providerGoogle);
        console.log(cred.user.email)
        if (cred.user.email !== email[0].email)
            logout();
        
    }
    const logout = async() => {
        signOut(auth);
        setUser();
    }

    const ajouterProjet = async(projet) => {
        const docRef = await addDoc(collection(db, 'projets'), {
            ...projet
        });
    }
    const modifierProjet = async(id, description, head_img, img, nom, technologies, type) => {

        const docRef2 = doc(db, 'projets', id);

        await setDoc(docRef2, {
            description:description,
            head_img:head_img,
            img:img,
            nom:nom,
            technologies:technologies,
            type:type
        },{merge: true})
    }
    

    


    return (
        <Provider value={{Login, logout, user, isLoading, ajouterProjet, modifierProjet}}>
            {children}
        </Provider>
    )
}

export {AuthProvider, authContext};