import { useContext, useState } from "react";
import { Outlet,Link } from "react-router-dom";
import { authContext } from "../Context/AuthContext";

import "./Layout.scss";

const Layout = () => {
    const {user} = useContext(authContext);
    const [ isClick, setIsClick] = useState(false);
    const [ isBuger, setIsBurger] = useState(false);
    const [ isChoices, setIsChoices] = useState(false);

    const HandelerClick = () => {
        setIsBurger(!isBuger);
        setIsClick(false);
        setIsChoices(false);
    }
    

    return(
        <>
            <header className={isBuger ? "open" : "close"}>
                <div className="img" onClick={() => HandelerClick()}>
                    <Link to="/">
                        <img src="" alt="Logo"/>
                    </Link>
                </div>
                <nav className="menuPrincipal">
                    <ul>
                        <li>
                            <Link to="/projets" onMouseOver={() => setIsClick(true)}>Projets</Link> 
                            <a onClick={() => setIsClick(true)}>/</a>
                        </li>
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
                <span className="reseau-social">
                    <Link>
                    <img src="icons/Linkedln.png" alt="In" />
                    </Link>
                    <Link>
                    <img src="icons/Instagram.png" alt="Ln" />
                    </Link>
                    <Link>
                    <img src="icons/Gmail.com" alt="Gm" />
                    </Link>
                </span>
            </header>
            <nav className="menuProjets">
                <div className={isClick ? "open": "close"} onMouseLeave={() => setIsClick(false)}>
                    <ul>
                        <li onClick={() => setIsChoices(true)} ><Link to="">Web</Link></li>
                        <li onClick={() => setIsChoices(true)} ><Link to="">Jeu</Link></li>
                        <li onClick={() => setIsChoices(true)} ><Link to="">3D/2D</Link></li>
                        <li onClick={() => setIsChoices(true)} ><Link to="">Graphisme</Link></li>
                    </ul>
                    <ul className={isChoices ? "open":"close"}>
                        <li onClick={() => HandelerClick()} ><Link to="/projets">test 1</Link></li>
                        <li onClick={() => HandelerClick()} ><Link to="/">test 2</Link></li>
                        <li onClick={() => HandelerClick()} ><Link to="/">test 3</Link></li>
                        <li onClick={() => HandelerClick()} ><Link to="/">test 4</Link></li>
                        <li onClick={() => HandelerClick()} ><Link to="/">test 5</Link></li>
                        <li onClick={() => HandelerClick()} ><Link to="/">test 6</Link></li>
                        <li onClick={() => HandelerClick()} ><Link to="/">test 7</Link></li>
                        <li onClick={() => HandelerClick()} ><Link to="/">test 8</Link></li>
                        <li onClick={() => HandelerClick()} ><Link to="/">test 9</Link></li>
                        <li onClick={() => HandelerClick()} ><Link to="/">test 10</Link></li>
                        <li onClick={() => HandelerClick()} ><Link to="/">test 11</Link></li>
                        <li onClick={() => HandelerClick()} ><Link to="/">test 12</Link></li>
                    </ul>

                </div>
            </nav>
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