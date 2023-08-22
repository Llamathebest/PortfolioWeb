import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import "./EmailIInterest.scss";
import { useState } from 'react';

const EmailInterest = ({}) => {

  const [info, setInfo] = useState([]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jag7i3u', 'template_iiq7wwu', e.target, 'XOSzWRPpKJFE8dflw')
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };

      const handlerInfo = (props, contenu) => {
        setInfo(current => {
            return {
                ...current,
                [props]:contenu
            }
        })
    };

    const disable = info.name && info.email &&info.text;


      return (
        <div className="App">
        <Form onSubmit={handleOnSubmit}>
          <div className='champs'>
            <label name="user_email">Courriel</label>
            <input name='user_email' type='email' onChange={(e) => handlerInfo( "name", e.target.value)}/>
          </div>
          <div className='champs'>
            <label name="user_name">Nom et Prénom</label>
            <input name='user_name' type='text' onChange={(e) => handlerInfo( "email", e.target.value)}/>
          </div>
          <div className='champs'>
            <label name="user_message">Description</label>
            <textarea name='user_message' onChange={(e) => handlerInfo( "text", e.target.value)}></textarea>
          </div>
          
          <div className='buttons'>
            <Button type='submit' color='green' disabled={!disable}>Envoyer</Button>
          </div>
        </Form>
      </div>
      );
}
export default (EmailInterest);