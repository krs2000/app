import React, { Component } from 'react';
import computer from '../../assets/computer.png'
import lamp from '../../assets/lamp.png'
import Linkedin from '../../assets/LinkedIn.svg'
import Instagram from '../../assets/Instagram.svg'
import GitHub from '../../assets/Github.svg'
import lamp1 from '../../assets/lamp1.png'
import calendar from '../../assets/calendar.png'
import About from '../About/About.js'
import Contact from '../Contact/Contact.js'
import Projects from '../Projects/Projects.js'
import Blog from '../Blog/Blog.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.hamburger = React.createRef();
    this.right = React.createRef();
    this.canvas = React.createRef();
    var d = new Date();
    this.state = {
      currentPage: 'homepage',
      scrollPos: 0,
      lamp: true,
      dateDays: d.getDate(),
      dateMonth: this.convertMonth(d.getMonth())
    };

  }

  convertMonth = (num) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    return months[num];
  }

  matrix = () => {

    // var canvas = document.body.appendChild( document.createElement( 'canvas' ) ),
    //  var canvas =     this.hamburger.current.appendChild( document.createElement( 'canvas' ) ),
    //  var context =   this.canvas.current ;
    // this.hamburger.current
    var canvas = this.refs.canvas;
    // console.log(canvas)
    context = this.refs.canvas.getContext('2d');

    // context = canvas.getContext( '2d' );
    context.globalCompositeOperation = 'lighter';
    canvas.width = 700;
    canvas.height = 600;

    draw();

    var textStrip = ['JS', ' HTML', 'CSS', '✉', '✉'];

    var stripCount = 20, stripX = new Array(), stripY = new Array(), dY = new Array(), stripType = new Array(), stripFontSize = new Array();

    for (var i = 0; i < stripCount; i++) {
      stripX[i] = 0;
      stripY[i] = Math.floor(Math.random() * canvas.height);
      stripType[i] = Math.floor(Math.random() * 3);
      dY[i] = Math.floor(Math.random() * 7) + 3;
      stripFontSize[i] = Math.floor(Math.random() * 16) + 8;
    }

    var theColors = ['#ffff'];

    var elem, context, timer;

    function drawStrip(x, y, i) {
      for (var k = 0; k <= 0; k++) {
        var randChar = textStrip[Math.floor(Math.random() * textStrip.length)];
        var randChar = textStrip[i];
        if (context.fillText) {
          switch (k) {
            case 0:
              context.fillStyle = theColors[0]; break;

          }
          context.fillText(randChar, x, y);
        }
        x += stripFontSize[k];
      }
    }

    function draw() {
      // clear the canvas and set the properties
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.shadowOffsetX = context.shadowOffsetY = 0;
      context.shadowBlur = 1;
      context.shadowColor = '#373F51';

      for (var j = 0; j < stripCount; j++) {
        context.font = stripFontSize[j] + 'px KudetaScript';
        context.textBaseline = 'bottom';
        context.textAlign = 'center';

        if (stripX[j] > 700) {
          stripX[j] = 0;
          stripY[j] = Math.floor(Math.random() * canvas.height);
          stripType[j] = Math.floor(Math.random() * 4);
          dY[j] = Math.floor(Math.random() * 7) + 3;
          stripFontSize[j] = Math.floor(Math.random() * 16) + 8;
          drawStrip(stripX[j], stripY[j], stripType[j]);
        } else
          drawStrip(stripX[j], stripY[j], stripType[j]);

        stripX[j] += 0.5 * dY[j];
      }
      setTimeout(draw, 70);
    }



  }

  componentDidMount() {

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
        return "bg bg-1";
        break;
      case 'projects':
        return"bg bg-2";
        break;
      case 'blog' :
        return "bg bg-3";
        break;
      case 'contact':
        return "bg bg-4";
        break;
    }
  }

  render() {
    return (
      <div className="">

        <div className="left-menu ">
          <ul id="menu">
            <a href='#home' onClick={() => { this.setState({ currentPage: 'homepage' }); }}><li>Home</li></a>
            <a  href='#blog' onClick={() => { this.setState({ currentPage: 'blog' }); }}><li>Blog</li></a>
            <a  href='#projects' onClick={() => { this.setState({ currentPage: 'projects' }); }}><li>Projects</li></a>
            <a href='#about' onClick={() => { this.setState({ currentPage: 'about' }); }}><li>About</li></a>
            <a  href='#contact' onClick={() => { this.setState({ currentPage: 'contact' }); }}><li>Contact</li></a>
            <div className={this.classActive()}></div>
          </ul>
          {/*     
            {this.Menu()}
            <div className="homepage-text-box"><span><div className="fadeIn">Making</div><div className="shake">ideas</div><div className="fadeIn underline">happen</div></span></div>
         */}   <div className="icons"><img src={Linkedin} /><img src={GitHub} />
         {/* <img src={Instagram} /> */}
         </div> 
        </div>
        <div className="homepage-text-box"><span><div className="fadeIn">Making</div><div className="shake">ideas</div><div className="fadeIn underline">happen</div></span></div>
        <div id="home" className="right-menu" >
            <div className='home'>
          
           <div className='decoration '><div className='decoration-image'></div></div>
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

          <Blog/>
          <Projects />
          <About/>
          <Contact />
        </div>
      </div >
    );
  }
}

export default App;
