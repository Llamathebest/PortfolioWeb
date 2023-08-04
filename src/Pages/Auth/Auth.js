import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import { GoogleButton } from 'react-google-button';

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
            <GoogleButton label="Deconnexion" onClick={()=>logout()}/>
        </>
    )

};
export default(Auth);