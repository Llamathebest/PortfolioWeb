//Quotation of soumissions
//send email for confirmation
//send email for me to see the soumission

    //-type of project
    //-description
    //-ressources they needs for the projects
    //-

    //-name of the person
    //-they have a companie?
    //-telephone 
    //-email
   
    import { useState } from "react";
    import { typeProjet, Web, Jeu, Option, Graphisme } from "../../Data/Data";
    import { Email, Header } from "../../Data/Paths/Paths";

    import "./Soumission.scss";
    
        const Soumission =() => {
            const [type, setType] = useState(typeProjet);
            const [selectType, setSelectType] = useState();
            const [message, setMessage] = useState([]);
            const options = [ Web, Jeu, Option, Graphisme];
            const [next, setNext] = useState(false);
            
            const list = selectType?.filter(r => r.isTrue)?.map(r => r.name)
            

            console.log(typeProjet);
            const SelectedType = (props, texte) => {
                console.log(options);
                setSelectType(options[texte]);
                HandlerMessage(props, type[texte]);
            };
    
            const HandlerMessage = (props, contenu) => {
                setMessage(current => {
                    return {
                        ...current,
                        [props]:contenu
                    }
                })
            };
    
            const SelectedRessources = (texte) => {
                setSelectType(
                    selectType.map((r) => (
                        r.name === texte ? {...r, isTrue: !r.isTrue} : {...r}
                    ))
                );
            }
    
            const Step = () => {
                setNext(!next);
                HandlerMessage("ressources", list)
            };
            console.log(next)
            
            const disable = selectType != null && message.typeProjet != null && list != null &&  message.description != null;
            return(
                <>
                    <Header titre={"Soumission"} paragraphe={"Formulaire"}/>
                        {
                            !next ?
                            <div className="soumission">
                                <div className="section">
                                <label htmlFor="type">Type de projet</label>
                                <select id="type" name="type" onChange={(e) => SelectedType( "typeProjet", e.target.value)}>
                                    <option defaultValue="select" > choisir une option</option>
                                
                                    {
                                        type?.map(({type},i) => <option key={"Projet_"+type} value={i}>{type}</option>)
                                    }
                                </select>
                                </div>
                                {
                                    selectType  ? 
                                    <div className="section">
                                        <label htmlFor="type">Ressources</label>
                                        <span className="border">
                                            {
                                                selectType?.map(({name, isTrue}) => 
                                                <div key={"Ressources_"+name} className="ressource">
                                                        <label htmlFor={name}> {name}</label>
                                                        <input type="checkbox" id={name} name={name} value={name} checked={isTrue} onChange={(e) =>SelectedRessources(e.target.value)} />
                                                    </div>
                                                
                                                )
                                            }
                                        </span>
                                        
                                    </div>
                                    :null
                                }
        
                                <div className="section">
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" name="description" rows="4" cols="50" placeholder="Description of your project" onChange={(e) => HandlerMessage("description", e.target.value)}>
                                        
                                    </textarea>
                                </div>
                                <button onClick={Step} disabled={!disable} >Prochain</button>
                            </div>
                                :
                                <Email message={message} step={Step} ressources={selectType?.find(r => r.isTrue = true)}/>
                            }
                </>
    
            )
        }
        export default (Soumission);