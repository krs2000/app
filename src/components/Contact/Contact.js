import React, { Component } from 'react';
import './Contact.css';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class Contact extends Component {
  render() {
    return (

      <div className="contact" id='contact'>

        <div className="emailForm">
          {/* <form className="formData" action="https://formspree.io/krskrysiak@gmail.com"
            method="POST">
            <TextField rowsMax={10} multiline={true} type="text" className="textData" name="message" placeholder="Your message" fullWidth={true} required={true}/>
            <Input type="email" className="emailData" name="_replyto" placeholder="Email" fullWidth={true} required={true}/>
            <IconButton type="submit" value="Send" children='send'/>
          </form> */}
           <MessengerCustomerChat
    pageId="410114706194481"
    appId="2201094929903504"
    htmlRef={window.location.pathname}
  />

          <div id="progress"></div>

        </div>
      </div>




    );
  }
}

export default Contact;
