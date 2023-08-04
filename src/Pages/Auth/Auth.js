import { useContext } from "react";
import { authContext } from "../../Context/auth";
import { GoogleButton } from 'react-google-button';

const Auth = () => {
    const {Login, logout} = useContext(authContext);
    console.log(logout);
    const googleHandler = async() => {
        Login();
        console.log(Login);
    }

    return(
        <>
            <GoogleButton label="Connexion" onClick={googleHandler}/>
        </>
    )

};
export default(Auth);