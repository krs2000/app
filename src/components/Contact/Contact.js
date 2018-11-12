import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (

      <div classNameName="contact">

        <div className="emailForm">
          <form className="formData" action="https://formspree.io/krskrysiak@gmail.com"
            method="POST">
            <input type="text" name="name" placeholder="Name" />
      <input type="text" name="name" placeholder="Topic" />
            <input type="text" className="textData" name="message" placeholder="Your message" />
            <input type="email" className="emailData" name="_replyto" placeholder="Email" />
            <input type="submit" value="Send" />
        </form>
        </div>

      </div>




    );
  }
}

export default Contact;
