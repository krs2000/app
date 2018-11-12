import React, { Component } from 'react';
import './About.css';
import html from "../../assets/html.jpg" ;
import css from "../../assets/css.jpg" ;
import bsp from "../../assets/bsp.jpg" ;
import wp from "../../assets/wp.jpg" ;
import js from "../../assets/js.jpg" ;
import react from "../../assets/react.jpg" ;
import redux from "../../assets/redux.jpg" ;
import angular from "../../assets/angular.jpg" ;
import sass from "../../assets/angular.jpg" ;

class About extends Component {
  render() {
    return (

      <div className="about">
        <section id="skills" class="secondSection">
          <h3>Skills</h3>
          <button class="btn1 triangle">Front-end</button>
          <button class="btn2">Other skills</button>
          <button class="btn3">Wish to learn</button>
        </section>
        <section class="thirdSection">

          <span class="skillsBox">
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={sass}  alt="sass" />
            <img src={bsp}  alt="bsp" />
            <img src={wp}  alt="wp" />
            <img src={js}  alt="js" />
            <img src={react}  alt="react" />
            <img src={redux}  alt="redux" />
            <img src={angular} alt="angular" />
          </span>
          <span class="skillsText"></span>

        </section>
        {/* <div className="my-pic"></div>
      
               <p>    <span class="nice-font">Hello World ,</span> I am a front-end programmer with technology background, based in Poland. 
                My favorable technology is javascript, but I am always open to learn new things
                 and develop skills. I have been working with C# and SQL as well on a backend too.
                 </p> 
                 <p> I enjoy the pace of front-end enviroment change, and would like to contribite in internet and software creation.</p> 
                   {/* <p>
                 I have been working permamently with softwarehouses on site, but also have remote experience.
                 <p>I love creating web apps, e-commerce sites and regular webpages.<svg class="heart" viewBox="0 0 32 29.6">
  <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
</svg> </p>
                 </p>  <p>
                 If you are willing to recruite a front-end developer based
                  in Poland or look up to remote partnership please feel free to contact.   </p>  */}
      </div>




    );
  }
}

export default About;