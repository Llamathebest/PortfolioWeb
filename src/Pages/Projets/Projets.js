import { Link } from "react-router-dom";
import { typeProjet} from "../../Data/Data"
import { Fiche, Header} from "../../Data/Paths/Paths";

const Projets = () => {
    return (
        <>
            <Header titre="Sabrina Beauchamp" paragraphe="Production" img="" />
            <div>
                {
                    typeProjet.map(({type, texte, img, reverse}) => (
                        <Fiche titre={type} texte={texte} img={img} right={reverse} /> 
                    ))
                }
            </div>
        </>
    )
}
export default(Projets);