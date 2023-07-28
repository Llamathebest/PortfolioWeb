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
import {Email} from "../../Data/Paths/Paths";

    const Soumission =() => {
        const [message, setMessage] = useState([]);
        const [type, setType] = useState(typeProjet);
        const [selectType, setSelectType] = useState([]);
        const options = [ Web, Jeu, Option, Graphisme];
        const [next, setNext] = useState(false);
        const [selectRessources, setSelectRessources] = useState([]);

        
        const SelectedType = (texte, props) => {
            setMessage(current => {
                return {
                    ...current,
                    [props]:type[texte]
                }
            })
            setSelectType(options[texte]);
        };

        // const SelectedRessources = (texte) => {
        //     console.log(texte);
        //     selectRessources.length <= 0 ?
        //     setSelectRessources(current => {return {texte}})
        //     :
        //     setSelectRessources(
        //             selectRessources?.map((r) => (

        //                 r != texte ? texte, r
                        
        //                 : r
        //             )
        //             )
                    
      
        //     )
        // }

        console.log(selectRessources);
        const Step = () => setNext(!next);

        const disable = selectType != null


        return(
            <>
            {
                !next ?
                    <div>
                        <div>
                        <label htmlFor="type">Type de projet:</label>
                        <select id="type" name="type" onChange={(e) => SelectedType(e.target.value, "typeProjet")}>
                            <option value="select" select> choisir une option</option>
                        
                            {
                                type?.map((i,t) => <option key={"Projet_"+t} value={t}>{i}</option>)
                            }
                        </select>
                        </div>

                        <div>
                            <label htmlFor="type">Ressources:</label>
                            
                                {
                                    selectType?.map((t) => 
                                        <div key={"Ressoruces_"+t}>
                                            {/* <input type="checkbox" id={t} name={t} value={t}  onChange={e => SelectedRessources(e.target.value)}/> */}
                                            <label htmlFor={t}> {t}</label>
                                        </div>
                                    
                                    )
                                }
                        </div>

                        <div>
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="description" rows="4" cols="50" placeholder="Description of your project">
                                
                            </textarea>
                        </div>
                        <button onClick={Step}>Next step</button>
                    </div>
                    :
                    <Email message={message}/>
                }
            </>

        )
    }
    export default (Soumission);