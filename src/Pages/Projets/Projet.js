import { Header, Little } from "../../Data/Paths/Paths";

const Projet = () => {
    return(
        <>
            <Header titre="Nom_projet" paragraphe="... développement" img="" />
            <article>
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Eligendi doloribus expedita temporibus optio magnam nulla necessitatibus, 
                    itaque sunt aliquid sequi ut natus eius fugit, enim recusandae earum corporis 
                    facilis eum.
                </p>
            </article>
            <article>
                <div className="img_1">
                    <img src="" alt="img_projet" />
                </div>
                <div className="img_2">
                    <img src="" alt="img_projet" />
                </div>
                <div className="img_3">
                    <img src="" alt="img_projet" />
                </div>

            </article>
            <div className="tech">
                <h3>Technologie</h3>
                <Little nom="Lorem ipsum"/>
                <Little nom="Lorem ipsum"/>
                <Little nom="Lorem ipsum"/>
                <Little nom="Lorem ipsum"/>
                <Little nom="Lorem ipsum"/>
                <Little nom="Lorem ipsum"/>
                <Little nom="Lorem ipsum"/>
            </div>
        </>
    )
}
export default (Projet);