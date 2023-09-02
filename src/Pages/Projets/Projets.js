import { Link } from "react-router-dom";
import { typeProjet} from "../../Data/Data"
import { ProjetFiche, Header} from "../../Data/Paths/Paths";

import "./Projets.scss";

const Projets = () => {
    return (
        <>
            <Header titre="Sabrina Beauchamp" paragraphe="Production" img="" />
            <div className="projets">
                {
                    typeProjet.map(({type, texte, img, reverse}) => (
                        <ProjetFiche key={type} titre={type} texte={texte} img={img} right={reverse} /> 
                    ))
                }
            </div>
        </>
    )
}
export default(Projets);