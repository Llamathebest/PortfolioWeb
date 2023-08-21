import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import "./EmailIInterest.scss";

const EmailInterest = ({}) => {
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

      return (
        <div className="App">
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id='form-input-control-email'
            control={Input}
            label='Email'
            name='user_email'
            placeholder='Email…'
            required
            icon='mail'
            iconPosition='left'
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Name'
            name='user_name'
            placeholder='Name…'
            required
            icon='user circle'
            iconPosition='left'
          />
          <label name="user_message">Description</label>
          <TextArea
            id='form-textarea-control-opinion'
            control={Input}
            label='Description'
            name='user_message' 
            placeholder='Description'
            required
            iconPosition='left'
          />
            
    
          <Button type='submit' color='green'>Submit</Button>
        </Form>
      </div>
      );
}
export default (EmailInterest);