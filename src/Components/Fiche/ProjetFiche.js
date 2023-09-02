import "./ProjetFiche.scss";

const ProjetFiche = ({img, titre, texte, right}) => {
    
    return(
        <article className={"projet fiche "+ right}>
            <div className={titre + " img"}>
                {
                    img?.map(({name, url}) => (
                        // console.log(url)
                        <img className={name} src={url+".png"} alt="img-objectif"/>
                    ))
                }
            </div>
            <div className="contenu">
                <h2>{titre}</h2>
                <p>{texte}</p>
            </div>
        </article>
    )
}
export default (ProjetFiche);