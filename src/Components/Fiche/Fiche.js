import "./Fiche.scss";

const Fiche = ({img, titre, texte, right}) => {
    return(
        <article className={"fiche "+ right}>
            <div className="img">
                <img src={{img}+".png"} alt="img-objectif"/>
            </div>
            <div className="contenu">
                <h2>{titre}</h2>
                <p>{texte}</p>
            </div>
        </article>
    )
}
export default (Fiche);
