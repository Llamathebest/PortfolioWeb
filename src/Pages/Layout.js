import { useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import { authContext } from "../Context/AuthContext";

import "./Layout.scss";

const Layout = () => {
    const {user} = useContext(authContext);
    return(
        <>
            <header>
                <div className="img">
                    <Link to="/">
                        <img src="" alt="Logo"/>
                    </Link>
                </div>
                <nav className="menuPrincipal">
                    <ul>
                        <li><Link to="/projets">Projets</Link></li>
                        <li><Link to="/parcours">Parcours</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/soumission">Soumission</Link></li>
                    </ul>
                </nav>
                { user ?
                    <Link to="/dashboard">Dashboard</Link>
                    :null
                }
                <div className="lang">
                    <img src="" alt="An"/>
                </div>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <div className="img">
                    <img src="" alt="Logo"/>
                </div>
            </footer>
        </>
    )
}
export default (Layout);