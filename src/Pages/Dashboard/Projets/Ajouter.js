import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../../Context/AuthContext';
import { Logiciels, typeProjet } from '../../../Data/Data';
import { imageBD } from '../../../Config/Firebase';
import { listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { useEffect } from 'react';

const Ajouter = () => {
    const [type, setType] = useState(typeProjet);
    const [ img, setImg] = useState("");

   

    // useEffect(() => {
    //     listAll(ref(imageBD, "files")).then (imgs => {
    //         console.log(imgs)
    //     })
    // }, [])

    //navigation
    const navigate = useNavigate();
    const { ajouterProjet } = useContext(authContext);
    const [logiciel, setLog] = useState(Logiciels);
    
    //---création des information d'un projet
    const [newProjet, setNewProjet] = useState({});
    
    //---modification d'un projet
    const updateProjet = (texte, props) => {
        setNewProjet(current => {
            return {
                ...current,
                [props]: texte
            }
        });
    };
    
    
   
    const SelectedRessources = (texte) => {
        setLog(
            logiciel?.map((r) => (
                r.nom === texte ? {...r, isTrue: !r.isTrue} : {...r}
            ))
        );
    };

    const update = (texte, props) => {
        var log = logiciel.filter(r => r.isTrue)?.map(r => r.nom);
        setNewProjet(current => {
            return {
                ...current,
                Technologies: log,
            }
        });
    };
    console.log(newProjet);

    //---désactivation du bouton d'envoi si l'un des champs est vide
    const isDisabled = false;

    const HandleClick = () => {
        const imgref = ref(imageBD,`${newProjet?.nom}/${v4()}`)
        uploadBytes(imgref);
    }

    //---soumission des informations du nouveau projet
    const submitHandler = async (e) => {
        e.preventDefault();
        update();
        HandleClick();
        ajouterProjet(newProjet);

    }
    return (
        <div>
            <h2>Ajouter un projet</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label name="nom">Nom</label>
                    <input type='text' name="nom" placeholder='the name of the project' onChange={(e) => updateProjet(e.target.value, "nom")}/>
                </div>
                <div>
                    <label name="desc">description</label>
                    <input type='text' name="desc" placeholder='Description' onChange={(e) => updateProjet(e.target.value, "description")}/>
                </div>
                <div>
                    <h3>Logiciels</h3>
                    {
                        logiciel?.map(({nom,isTrue}) => (
                            <div key={"Tech_"+nom} className="Logiciel">
                                <label htmlFor={nom}> {nom}</label>
                                <input type="checkbox" id={nom} name={nom} value={nom} checked={isTrue} onChange={(e) => SelectedRessources(e.target.value)} />
                            </div>
                        ))
                    }
                </div>
                <div>
                    <label name="type">Type</label>
                    <select id="type" name="type" onChange={(e) => updateProjet( e.target.value, "type")}>
                        <option defaultValue="select" > choisir une option</option>
                    
                        {
                            type?.map(({type},i) => <option key={"Projet_"+type} value={type}>{type}</option>)
                        }
                    </select>
                </div>
                <div>
                    <input type='file' onChange={(e) => setImg(e.target.files[0])}/>
                </div>

                <div className='btns'>
                    <button onSubmit={() => submitHandler} disabled={isDisabled} type="submit">Créer</button>
                    <button type="submit"><Link to='/dashboard'>Annuler</Link></button>
                </div>
            </form>
        </div>
    )
}
export default (Ajouter);