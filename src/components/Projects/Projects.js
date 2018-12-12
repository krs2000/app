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
          <button  className={this.state.firstCard ? "btn1 triangle" : "btn1 triangle triangle-1"} onClick={()=> this.change()}>Clients</button>
          <button className="btn-2" onClick={()=> this.change()}>Personal</button>
        </div>
      { !this.state.firstCard &&  <div className="project-row-box">
        <div className="project-row">  <div className="project-box-1"></div><h3>Crafted beers playground app</h3></div>
        <div className="project-row"><div className="project-box-2">Invest Jar</div><h3>Investing playground app</h3></div>
    </div> }
       { this.state.firstCard  && <div className="project-row-box">
        <div className="project-row"><div className="project-box"></div><h3>Filming agency website</h3></div>
        <div className="project-row"><div className="project-box-3"></div><h3>Hi-tech company webpage in colaboration with clickdesign.pl</h3></div>
    </div> }
      </div>
    );
  }
}

export default Projects;
