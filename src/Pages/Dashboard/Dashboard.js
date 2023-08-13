import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
import { GoogleButton } from 'react-google-button';

const Dashboard = () => {
    const {user, logout} = useContext(authContext);
    return(
        <div>
            <nav>
                <ul>
                    <Link>Ajouter projets</Link>
                </ul>
            </nav>
            { user ?
                <GoogleButton label="Deconnexion" onClick={()=>logout()}/>
                :null
            }
        </div>
    )
}
export default (Dashboard);