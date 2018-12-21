import React, { Component } from 'react';
import './Projects.css';
import AliceCarousel from 'react-alice-carousel';
class Projects extends Component {

  constructor(props) {
    super(props);


    this.state = {
      firstCard : true

    };

  }

  change = () => {
console.log(this.state.firstCard)
    this.setState({ firstCard : !this.state.firstCard})
  }

  render() {
    return (
      <div className="projects" id='projects'>
      <h2><span></span>Projects</h2>
        <div className='triangle-box'>
          <button  className={this.state.firstCard ? "btn1 triangle active" : "btn1 triangle triangle-1"} onClick={()=> this.change()}>Clients</button>
          <button className={this.state.firstCard ? "btn2" : "btn2 active"} onClick={()=> this.change()}>Personal</button>
        </div>
      { !this.state.firstCard &&  <div className="project-row-box ">
        <a href='https://cool-beer-app.herokuapp.com/' className="project-row">  <div className="project-box-1 slideRight"></div><h3 className="slideRight d-sm-none ">Crafted beers playground app v0.1</h3></a>
        <a href='https://invest-jar.herokuapp.com/' className="project-row"><div className="project-box-2 slideRight">Invest Jar</div><h3 className="slideRight d-sm-none ">Investing playground app v0.1</h3></a>
    </div> }
    
       { this.state.firstCard  && <div className="project-row-box ">
        <a href='http://www.offbeatmotion.tv/' className="project-row"><div className="project-box slideLeft"></div><h3  className="slideLeft d-sm-none ">Filming Agency</h3></a>
        <a href='https://clickdesign.pl/' className="project-row"><div className="project-box-3 slideLeft">Clickdesign</div><h3 className="slideLeft d-sm-none ">Web Agency</h3></a>
        <a href='http://www.inwedo.com/' className="project-row"><div className="project-box-4 slideLeft"></div><h3 className="slideLeft d-sm-none ">Software House</h3></a>
    </div> }
    
      </div>
    );
  }
}

export default Projects;
