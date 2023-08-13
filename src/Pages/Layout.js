import { useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import { authContext } from "../Context/AuthContext";

const Layout = () => {
    const {user} = useContext(authContext);
    return(
        <>
            <header>
                <nav className="menuPrincipal">
                    <ul>
                        <li><Link to="/projets">Projets</Link></li>
                        <li><Link to="/parcours">Parcours</Link></li>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/soumission">Soumission</Link></li>
                    </ul>
                </nav>
                { user ?
                    <Link to="/dashboard">Dashboard</Link>
                    :null
                }
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </>
    )
}
export default (Layout);