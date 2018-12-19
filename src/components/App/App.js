import React, { Component } from 'react';
import computer from '../../assets/computer.png'
import lamp from '../../assets/lamp.png'
import Linkedin from '../../assets/Linkedin.svg'
import Instagram from '../../assets/Instagram.svg'
import GitHub from '../../assets/GitHub.svg'
import lamp1 from '../../assets/lamp1.png'
import calendar from '../../assets/calendar.png'
import About from '../About/About.js'
import Contact from '../Contact/Contact.js'
import Projects from '../Projects/Projects.js'
import Footer from '../Footer/Footer.js'
import Blog from '../Blog/Blog.js'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.hamburger = React.createRef();
    this.right = React.createRef();
    // this.canvas = React.createRef();
    var d = new Date();
    this.state = {
      currentPage: 'homepage',
      scrollPos: 0,
      lamp: true,
      dateDays: d.getDate(),
      // dateMonth: this.convertMonth(d.getMonth())
    };

  }

  componentDidMount() {
    document.addEventListener("contextmenu", function(e){
      // e.preventDefault();
      // document.body.classList.add('floater')
      // alert('Eastern Egg');
      // setTimeout( () => document.body.classList.remove('floater'),3000 )
      // setTimeout( () => document.body.classList.add('zoomerOut'),10000 )
  }, false);
    window.addEventListener('scroll', this.handleScroll);
    // setTimeout(()=>this.matrix(),1000);
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

  clickHamburger = () => {
    console.log(this.hamburger.current, 'e')

  }

  Menu = () => {
    return (
      <div className="navigation">
        <div id="menuToggle" >
          <input type="checkbox" ref={this.hamburger} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a className={this.state.currentPage = 'homepage' ? 'active' : ''} onClick={() => { this.setState({ currentPage: 'homepage' }); }}><li>Home</li></a>
            <a className={this.state.currentPage = 'blog' ? 'active' : ''} onClick={() => { this.setState({ currentPage: 'blog' }); }}><li>Blog</li></a>
            <a className={this.state.currentPage = 'projects' ? 'active' : ''} onClick={() => { this.setState({ currentPage: 'projects' }); }}><li>Projects</li></a>
            <a className={this.state.currentPage = 'about' ? 'active' : ''} onClick={() => { this.setState({ currentPage: 'about' }); }}><li>About</li></a>
            <a className={this.state.currentPage = 'contact' ? 'active' : ''} onClick={() => { this.setState({ currentPage: 'contact' }); }}><li>Contact</li></a>
          </ul>
        </div>
      </div>)
  }

  classActive = () => {
    switch (this.state.currentPage) {
      case 'homepage':
        return "bg";
        break;
      case 'about':
        return "bg bg-3";
        break;
      case 'projects':
        return "bg bg-2";
        break;
      case 'blog':
        return "bg bg-1";
        break;
      case 'contact':
        return "bg bg-4";
        break;
    }
  }

  render() {
    return (
      <div className="app" onClick={(event) => event ===  'contextmenu' ?  event.preventDefault(): console.log('qpa') }>

        <div className="left-menu ">
          <ul id="menu">
            <a href='#home' onClick={() => { this.setState({ currentPage: 'homepage' }); }}><li>Home</li></a>
            <a href='#blog' onClick={() => { this.setState({ currentPage: 'blog' }); }}><li>Blog</li></a>
            <a href='#projects' onClick={() => { this.setState({ currentPage: 'projects' }); }}><li>Projects</li></a>
            <a href='#about' onClick={() => { this.setState({ currentPage: 'about' }); }}><li>About</li></a>
            <a href='#contact' onClick={() => { this.setState({ currentPage: 'contact' }); }}><li>Contact</li></a>
            <div className={this.classActive()}></div>
          </ul>
          {/*     
            {this.Menu()}
            <div className="homepage-text-box"><span><div className="fadeIn">Making</div><div className="shake">ideas</div><div className="fadeIn underline">happen</div></span></div>
         */}   <div className="icons"><img src={Linkedin} />
            {/* <img src={Instagram} /> */}
          </div>
        </div>
        <div className="homepage-text-box"><span><div className="fadeIn">Making</div><div className="shake">ideas</div><div className="fadeIn underline">happen</div></span></div>
        <div id="home" className="right-menu" >
          <div className='home'>

            <div className='decoration'><div className='decoration-image'></div></div>
          </div>
          {/* <canvas ref="canvas" width={600} height={300}/> */}
          {/* <div className="sheleves-image">
              <div className="books-image"></div>
            </div>
            <div className="calendar-image">
              <span>{this.state.dateDays}</span>
              <span>{this.state.dateMonth}</span>
            </div>
            <div className="computer-image">
              <img className="lamp-img" src={this.state.lamp ? lamp : lamp1} onClick={
                () => {
                  this.setState({ lamp: !this.state.lamp })
                }
              } />
            </div> */}

          <Blog />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </div >
    );
  }
}

export default App;
