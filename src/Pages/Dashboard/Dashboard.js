import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
import { GoogleButton } from 'react-google-button';

const Dashboard = () => {
    const {user, logout} = useContext(authContext);
    return(
        <>
            <div>
                <nav>
                    <ul>
                        <Link to="/ajouterProjet">Ajouter projets</Link>
                    </ul>
                </nav>
                { user ?
                    <GoogleButton label="Deconnexion" onClick={()=>logout()}/>
                    :null
                }
            </div>
            <Outlet/>
        
        </>
    )
}
export default (Dashboard);