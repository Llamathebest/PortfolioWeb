import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({titre, paragraphe, img}) => {
    return(
        <div className="header">
            <div className="titre">
                <span>
                    <h1>
                        {titre}
                    </h1>
                    <p>{paragraphe}</p>
                </span>
                <div className="img">
                    <img src={img} alt="img_header" />
                </div>
            </div>
            <span className="reseau-social">
                <Link>
                    <img src="" alt="In"/>
                </Link>
                <Link>
                    <img src="" alt="Ln"/>
                </Link>
                <Link>
                    <img src="" alt="Gm"/>
                </Link>
            </span>
        </div>
    )
}
export default (Header);