import React, { Component } from 'react';
import './Projects.css';

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
      <h2>Projects</h2>
        <div className='triangle-box'>
          <button  className={this.state.firstCard ? "btn1 triangle active" : "btn1 triangle triangle-1"} onClick={()=> this.change()}>Clients</button>
          <button className={this.state.firstCard ? "btn2" : "btn2 active"} onClick={()=> this.change()}>Personal</button>
        </div>
      { !this.state.firstCard &&  <div className="project-row-box ">
        <div className="project-row">  <div className="project-box-1 slideRight"></div><h3 className="slideRight">Crafted beers playground app v0.1</h3></div>
        <div className="project-row"><div className="project-box-2 slideRight">Invest Jar</div><h3 className="slideRight">Investing playground app v0.1</h3></div>
    </div> }
       { this.state.firstCard  && <div className="project-row-box ">
        <div className="project-row"><div className="project-box slideLeft"></div><h3  className="slideLeft">Filming Agency</h3></div>
        <div className="project-row"><div className="project-box-3 slideLeft">Clickdesign</div><h3 className="project-box-1 slideLeft">Web Agency</h3></div>
        <div className="project-row"><div className="project-box-4 slideLeft"></div><h3 className="slideLeft">Software House</h3></div>
    </div> }
      </div>
    );
  }
}

export default Projects;
