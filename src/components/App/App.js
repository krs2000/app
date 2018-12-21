import React, { Component } from 'react';
import Linkedin from '../../assets/Linkedin.svg'
// import Instagram from '../../assets/Instagram.svg'
// import GitHub from '../../assets/GitHub.svg'
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
    this.right = React.createRef()
    this.blog = React.createRef()
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
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      document.body.classList.add('floater')
      alert('Eastern Egg');
      setTimeout( () => document.body.classList.remove('floater'),3000 )
      setTimeout( () => document.body.classList.add('zoomerOut'),10000 )
    }, false);

    window.addEventListener('scroll', (e) => this.handleScroll(e));
  }
  componentWillMount() {

  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {

    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var distance = -(document.body.getBoundingClientRect()).top;
    if (-this.state.scrollPos < distance) {

      if (distance < .2 * h) {
        this.setState({ currentPage: 'homepage' });
      }
      else if (distance > .2 * h && distance <= 1.2 * h) {
        this.setState({ currentPage: 'blog' });
      } else if (distance > 1.2 * h && distance <= 2.2 * h) {
        this.setState({ currentPage: 'projects' });
      } else if (distance > 2.2 * h && distance <= 3.2 * h) {
        this.setState({ currentPage: 'about' });
      } else if (distance > 3.2 * h && distance <= 4 * h) {
        this.setState({ currentPage: 'contact' });
      }
    } else {


      if (distance > 3.2 * h) {
        this.setState({ currentPage: 'about' });
      } else if (distance > 2.2 * h && distance <= 3 * h) {
        this.setState({ currentPage: 'projects' });
      } else if (distance > 1.2 * h && distance <= 2 * h) {
        this.setState({ currentPage: 'blog' });
      } else if (distance > 0 * h && distance <= 1 * h) {
        this.setState({ currentPage: 'homepage' });
      }
    }
    this.setState({
      scrollPos: (document.body.getBoundingClientRect()).top
    });
  }



  Menu = () => {
    return (
      <div className="mobile-navigation">
        <div id="menuToggle" >
          <input type="checkbox" ref={this.hamburger} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a onClick={() => {   this.hamburger.current.click(); this.setState({ currentPage: 'homepage' }); }}><li>Home</li></a>
            <a onClick={() => {  this.hamburger.current.click(); this.setState({ currentPage: 'blog' }); }}><li>Blog</li></a>
            <a onClick={() => {   this.hamburger.current.click();this.setState({ currentPage: 'projects' }); }}><li>Projects</li></a>
            <a onClick={() => {   this.hamburger.current.click(); this.setState({ currentPage: 'about' }); }}><li>About</li></a>
            <a onClick={() => {  this.hamburger.current.click(); this.setState({ currentPage: 'contact' }); }}><li>Contact</li></a>
            <div className={this.classActive()}></div>
            
          </ul>
        </div>
      </div>)
  }

  classActive = () => {
    let classActive;
    switch (this.state.currentPage) {
      case 'homepage':
        classActive = "bg";
        return classActive;
      case 'about':
        return "bg bg-3";
      case 'projects':
        return "bg bg-2";
      case 'blog':
        return "bg bg-1";
      case 'contact':
        return "bg bg-4";
      default:
        break;
    }
  }

  render() {
    return (
      <div className="app" onClick={(event) => event === 'contextmenu' && event.preventDefault()}>

        <div className="left-menu">
          <ul >
            <a  onClick={() => { this.setState({ currentPage: 'homepage' }); }}><li>Home</li></a>
            <a  onClick={() => { this.setState({ currentPage: 'blog' }); }}><li>Blog</li></a>
            <a  onClick={() => { this.setState({ currentPage: 'projects' }); }}><li>Projects</li></a>
            <a  onClick={() => { this.setState({ currentPage: 'about' }); }}><li>About</li></a>
            <a  onClick={() => { this.setState({ currentPage: 'contact' }); }}><li>Contact</li></a>
            <div className={this.classActive()}></div>
          </ul>

          {/*     
            {this.Menu()}
            <div className="homepage-text-box"><span><div className="fadeIn">Making</div><div className="shake">ideas</div><div className="fadeIn underline">happen</div></span></div>
         */}   <div className="icons"><a href='https://www.linkedin.com/in/kris-krysiak-3aa83297/'  target="_blank"><img src={Linkedin} alt='LinkedIn' /></a>
            {/* <img src={Instagram} /> */}
          </div>
        </div>
        {this.Menu()}
        <div className="homepage-text-box"><span><div className="fadeIn">Making</div><div className="shake">ideas</div><div className="fadeIn underline">happen</div></span></div>
        <div id="home" className="right-menu" >
          <div className='home'>

            <div className='decoration'><div className='decoration-image'></div></div>
          </div>


          <Blog active={this.state.currentPage === 'blog' ? true : false} />
          <Projects active={this.state.currentPage === 'projects' ? true : false} />
          <About active={this.state.currentPage === 'about' ? true : false} />
          <Contact active={this.state.currentPage === 'contact' ? true : false} />
          <Footer />

        </div>
      </div >
    );
  }
}

export default App;
