import React, { Component } from 'react';


class App extends Component {

  Menu = () => {
    return (
      <div class="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a ><li>Home</li></a>
            <a ><li>About</li></a>
            <a ><li>Info</li></a>
            <a><li>Contact</li></a>  
          </ul>
        </div>
      </div>);
  }

  render() {
    return (
      <div className="homepage">
      <div class='section-1'>
        <div class="left-menu">
        {this.Menu()}
        </div>
        <div class="section-photo-1">
        </div>
        </div>
        <div class='section-2'>
        <div class="section-photo-2"></div>
        </div>
      </div>
    );
  }
}

export default App;
