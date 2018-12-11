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
        <section id="skills" className="secondSection">
    ABOUT 
          {/* <button className="btn1 triangle">Front-end</button>
          <button className="btn2">Other skills</button>
          <button className="btn3">Wish to learn</button> */}
        </section>
        <section className="thirdSection">

          {/* <span className="skillsBox">
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
          <span className="skillsText"></span> */}

        </section>

      
               {/* <p>    <span class="nice-font">Hello World ,</span> I am a front-end programmer with technology background, based in Poland. 
                My favorable technology is javascript, but I am always open to learn new things
                 and develop skills. I have been working with C# and SQL as well on a backend too.
                 </p> 
                 <p> I enjoy the pace of front-end enviroment change, and would like to contribite in internet and software creation.</p> 
                   <p>
                 I have been working permamently with softwarehouses on site, but also have remote experience.
                 <p>I love creating web apps, e-commerce sites and regular webpages.
 </p>
                 </p>  <p>
                 If you are willing to recruite a front-end developer based
                  in Poland or look up to remote partnership please feel free to contact.   </p>  */}
      </div>




    );
  }
}

export default About;
