import { Form, Input, TextArea, Button } from 'semantic-ui-react';


const Message = ({contenu}) => {
    console.log(contenu.typeProjet);
    const email = 
    "Type de projet:"+contenu?.typeProjet?.type+"\n Ressources:"+contenu?.ressources+" \n Description:"+contenu?.description+" \n";
    return(
        <TextArea rows="4" cols="50" label='Message' name="user_message" placeholder="Message..." value={email} required> </TextArea>
    )
}
export default(Message)