//timelines of my scolarship
//my experiences
//my abilities gaings
import { Little } from "../../Data/Paths/Paths";
import { Education, Logiciels, Languages, Experiences, Benevolat, Loisir } from "../../Data/Data";
import "./Parcours.scss";

const Parcours =() => {

    return(
        <>
            <div className="header">
            <div className="titre">
                <span>
                    <h1>
                        Parcours
                    </h1>
                    <p className="parcours">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ducimus pariatur soluta quos quam amet! Sequi, nihil autem. 
                        Repellendus commodi suscipit molestias, facilis, quasi rem, rerum minima ut obcaecati quod eos?</p>
                </span>
                <div className="img">
                    <img src="" alt="img_header" />
                </div>
            </div>
            </div>
            <article className="flex">
                <span>
                    <h2>Éducation</h2>
                    <div >
                        {
                            Education?.map(({diplome, ecole, date})=>(
                                <span className="education_info">
                                    <span className="diplome">
                                        <h5>{diplome}</h5>
                                        <p>{ecole}</p>
                                    </span>
                                    <p className="date">{date}</p>
                                </span>

                            ))
                        }
                    </div>
                </span>
                <span>
                    <h2>Logiciels</h2>
                    <div className="selection">
                        {
                            Logiciels?.map((log) =>(
                                <Little nom={log}/>

                            ))
                        }
                    </div>

                </span>
            </article>
            <article className="experience">
                <h2>Expériences</h2>
                {
                    Experiences?.map(({entreprise, poste, date, taches}) =>(
                        <div className="bumble">
                            <span className="temps">
                                <div className="img">
                                    <img src="" alt="emplois"/>
                                </div>
                            <div className="ligne"></div>
                            </span>
                            <div className="info">
                                <h4>{entreprise} - {poste}</h4>
                                <p className="date">{date}</p>
                                <div className="taches">
                                    {
                                        taches?.map((t) => (
                                            <p>{t}</p>
                                            ))
                                        }
                                </div>
                            </div>
                        </div>
                    ))
                }
                <h3>Bénévolat</h3>
                {
                    Benevolat?.map(({projet, poste, date, taches}) =>(
                        <div className="bumble">
                            <span className="temps">
                                <div className="img">
                                    <img src="" alt="benevolat"/>
                                </div>
                            <div className="ligne"></div>
                            </span>
                            <div className="info">
                                <h4>{projet} - {poste}</h4>
                                <p className="date">{date}</p>
                                <div className="taches">
                                    {
                                        taches?.map((t) => (
                                            <p>{t}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </article>
            <article className="flex">
                <span>
                    <h2>Languages</h2>
                    <div className="selection">
                        {
                            Languages?.map((lan) =>(
                                <Little nom={lan}/>

                            ))
                        }
                    </div>
                </span>
                <span>
                    <h2>Loisir et intérêts</h2>
                    <div>
                        {
                            Loisir?.map((l) =>(
                                <p>{l}</p>
                            ))
                        }
                    </div>
                </span>
            </article>
        </>
    )
}
export default (Parcours);