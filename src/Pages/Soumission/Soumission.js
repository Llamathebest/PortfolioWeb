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
    import { Email } from "../../Data/Paths/Paths";
    
        const Soumission =() => {
            const [type, setType] = useState(typeProjet);
            const [selectType, setSelectType] = useState();
            const [message, setMessage] = useState([]);
            const options = [ Web, Jeu, Option, Graphisme];
            const [next, setNext] = useState(false);
            
            const list = selectType?.filter(r => r.isTrue)?.map(r => r.name)
            
            const SelectedType = (props, texte) => {
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
            
            const disable = selectType != null && message.typeProjet != null && list != null &&  message.description != null;
            return(
                <>
                {
                    !next ?
                        <div>
                            <div>
                            <label htmlFor="type">Type de projet:</label>
                            <select id="type" name="type" onChange={(e) => SelectedType( "typeProjet", e.target.value)}>
                                <option value="select" select> choisir une option</option>
                            
                                {
                                    type?.map((i,t) => <option key={"Projet_"+t} value={t}>{i}</option>)
                                }
                            </select>
                            </div>
    
                            <div>
                                <label htmlFor="type">Ressources:</label>
                                
                                    {
                                        selectType?.map(({name, isTrue}) => 
                                            <div key={"Ressources_"+name}>
                                                <input type="checkbox" id={name} name={name} value={name} checked={isTrue} onChange={(e) =>SelectedRessources(e.target.value)} />
                                                <label htmlFor={name}> {name}</label>
                                            </div>
                                        
                                        )
                                    }
                            </div>
    
                            <div>
                                <label htmlFor="description">Description</label>
                                <textarea id="description" name="description" rows="4" cols="50" placeholder="Description of your project" onChange={(e) => HandlerMessage("description", e.target.value)}>
                                    
                                </textarea>
                            </div>
                            <button onClick={Step} disabled={!disable}>Next step</button>
                        </div>
                        :
                        <Email message={message} ressources={selectType?.find(r => r.isTrue = true)}/>
                    }
                </>
    
            )
        }
        export default (Soumission);