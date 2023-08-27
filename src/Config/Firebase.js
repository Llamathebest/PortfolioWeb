import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCcfUrot2gECzFOs-Zso3zvhAuAbiEQvtk",
    authDomain: "sbeauchampprod-c22c1.firebaseapp.com",
    projectId: "sbeauchampprod-c22c1",
    storageBucket: "sbeauchampprod-c22c1.appspot.com",
    messagingSenderId: "780015927604",
    appId: "1:780015927604:web:6ab6590a4f2d6c368fe561"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const imageBD = getStorage(app);


export {db, auth};