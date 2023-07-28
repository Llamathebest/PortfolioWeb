import { Outlet,Link } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <header>
                <nav className="menuPrincipal">
                    <ul>
                        <li><Link to="/projets">Projets</Link></li>
                        <li><Link to="/parcours">Parcours</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/soumission">Soumission</Link></li>
                    </ul>
                </nav>
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