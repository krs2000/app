import React, { Component } from 'react';
import computer from '../assets/computer.png'
import lamp from '../assets/lamp.png'
import lamp1 from '../assets/lamp1.png'
import calendar from '../assets/calendar.png'
import About from './About.js'

class App extends Component {
  constructor(props) {
    super(props);
    var d = new Date();
    this.state = {
      currentPage:'about',
      scrollPos: 0,
      lamp: true,
      dateDays: d.getDate(),
      dateMonth: this.convertMonth(d.getMonth() )
    };

  }

  convertMonth= (num)=> {
    const months =['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug', 'Sept', 'Oct', 'Nov', 'Dec' ]
    return months[num];
  }
  componentDidMount() {

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    this.setState({
      scrollPos: (document.body.getBoundingClientRect()).top
    });
    if ((document.body.getBoundingClientRect()).top > this.state.scrollPos) {
      console.log('up')
      window.scrollTo(0, 0)
    }
    else {
    }
  }

  Menu = () => {
    return (
      <div className="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a onClick={()=>this.setState({currentPage:'homepage'})}><li>Home</li></a>
            <a onClick={()=>this.setState({currentPage:'about'}) }><li>About</li></a>
            <a ><li>Projects</li></a>
            <a><li>Blog</li></a>
            <a><li>Contact</li></a>
          </ul>
        </div>
      </div>)
  }

  render() {
    return (
      <div className="homepage">
        <div className='section-1' id="section-1">
          <div className="left-menu">
            {this.Menu()}
            {/* <h2 className="name-text">Krzysztof Krysiak</h2> */}
            {/* <h2 className="intro-text">Action is the foundational key to all success.</h2> */}
            <div className="triangle">     </div>
            <div className="introduction">
              Krzysztof Krysiak
            </div>
       
          </div>
      
        {this.state.currentPage == 'homepage' && (  <div className="section-photo-1 slideDown" id="section-2">
          <div className="sheleves-image">
          <div className="books-image"></div>
           </div>
          <div className="calendar-image wiggle"> 
          <span>{this.state.dateDays}</span>
          <span>{this.state.dateMonth}</span>
          </div>
            <div className="computer-image"> 
            <img className="lamp-img" src={this.state.lamp ? lamp : lamp1} onClick={
              () => {
                this.setState({ lamp: !this.state.lamp })
              }
            } />
            </div>
          </div> ) }
          {this.state.currentPage == 'about' && (  <div className="section-photo-1 slideDown" id="section-2">
            <About />
          </div> ) }
      </div>
      <div className='section-2'>
        <div className="left-menu-2"></div>
        <div className="section-photo-2"></div>
      </div>
      </div >
    );
  }
}

export default App;
