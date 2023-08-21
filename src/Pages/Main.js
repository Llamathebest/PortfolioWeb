import { Header, Caroussel,Fiche, SmallFiche, Formulaire } from "../Data/Paths/Paths";
import { Goal } from "../Data/Data";
import "./Main.scss";

const Main = () => {
    return(
        <>
            <Header titre="Sabrina Beauchamp" paragraphe="Production" img="" />

            <Fiche titre={Goal.titre} texte={Goal.texte}/>

            <Caroussel/>

            <article className="recents">
                <h2>Projets Récents</h2>
                <div className="fiches">
                    <SmallFiche titre="Lorem ipsum" ligne="Lorem ipsum Lorem ipsum"/>
                    <SmallFiche titre="Lorem ipsum" ligne="Lorem ipsum Lorem ipsum"/>
                    <SmallFiche titre="Lorem ipsum" ligne="Lorem ipsum Lorem ipsum"/>
                </div>
            </article>
            <article className="contact">
                <Formulaire/>
            </article>
        </>
    )
}
export default(Main);