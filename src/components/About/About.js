import React, { Component } from 'react';
import './About.css';
import ProfileImg from "../../assets/me.png";


class About extends Component {

 

  render() {
    return (

      <div className="about">

   <h2>ABOUT</h2>     
<div className="profile-box"><img src={ProfileImg}/></div>
    <h4 className="project-row">If you need a website or looking for front-end developer for your projects</h4>
    <p>Feel free to contact me</p>
    <p>Let's work together!</p>
      </div>




    );
  }
}

export default About;
