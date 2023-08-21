import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import { GoogleButton } from 'react-google-button';
import Test from "../../Models/Test";

const Auth = () => {
    const {Login, logout} = useContext(authContext);
    
    const googleHandler = async() => {
        Login();
        console.log(Login);
    }

    return(
        <>
            <input type="number"/>
            <GoogleButton label="Connexion" onClick={googleHandler}/>
            <Test/>
        </>
    )

};
export default(Auth);