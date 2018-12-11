import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="projects" id='projects'>
      <div className="project-row"><div className="project-box"></div><h3>Filming agency website</h3></div>
      <div className="project-row">  <div className="project-box-1"></div><h3>Crafted beers playground app</h3></div>
      <div className="project-row"><div className="project-box-2">Invest Jar</div><h3>React.js playground app</h3></div>
      <div className="project-row"><div className="project-box-3"></div><h3>Hi-tech company webpage in colaboration with clickdesign.pl</h3></div>
      </div>
    );
  }
}

export default Projects;
