import React, { Component } from 'react';
import './About.css';
import ProfileImg from "../../assets/me.png";


class About extends Component {

 

  render() {
    return (

      <div className="about">

   <h2><span></span>About</h2>     
{/* <div className="profile-box"><img src={ProfileImg}/></div> */}


<h3>..::FRONT-END DEVELOPMENT::..</h3>
<p>Well written JS, HTML and CSS can make your ideas happen.</p>

<h3>..::RESPONSIVE DESIGN::..</h3>
<p>No matter the device, your website will shine.</p>

<h3>..::WORDPRESS DEVELOPMENT::..</h3>
<p>Most advanced extensions and plugins can make a difference.</p>

<h3>..::WOOCOMMERCE DEVELOPMENT::..</h3>
<p>E-commerce is on the rise.</p>

<h3>..::ADVANCED ANIMATIONS::..</h3>
<p>Animations that can make your website alive.</p>

<h3>..::ACCESSIBILITY & SEMANTICS::..</h3>
<p>Usability to make your website up to standards.</p>

      </div>




    );
  }
}

export default About;
