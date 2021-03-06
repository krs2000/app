import React, { Component } from 'react';
import './Contact.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Email from '../../assets/Email.svg'


class Contact extends Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();

    this.contactRef = React.createRef();
    this.state = {
     elementWidth : 0
      // dateMonth: this.convertMonth(d.getMonth())
    };

  }
  convertMonth = (num) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    return months[num];
  }
  
  matrix = () => {
    // var canvas = document.body.appendChild( document.createElement( 'canvas' ) ),
    //  var canvas =     this.hamburger.current.appendChild( document.createElement( 'canvas' ) );
    //  var context =   this.canvas.current ;
    // this.hamburger.current
    function resizeCanvas() {
      // canvas.width = contactRef.innerWidth;
      // canvas.height = contactRef.innerHeight;

      /**
       * Your drawings need to be inside this function otherwise they will be reset when 
       * you resize the browser window and the canvas goes will be cleared.
       */


}
resizeCanvas();
    var canvas = this.refs.canvas;
    window.addEventListener('resize', resizeCanvas, false);
    let context = canvas.getContext( '2d' );
    context.globalCompositeOperation = 'lighter';
    var textStrip = ['JS','JQuery','Redux','Woocomerce', ' HTML5', 'CSS','Angular','Angular.js', 'React.js','API','UI/UX','WP','C#','Node.js','SCSS','Bootsrap','Moment.js','ES6'];
    var stripCount = 15, stripX = [], stripY = [], dY = [], stripType = [], stripFontSize = [];

    for (var i = 0; i < stripCount; i++) {
      stripX[i] = 0;
      stripY[i] = Math.floor(Math.random() * canvas.height);
      stripType[i] = Math.floor(Math.random() * textStrip.length);
      dY[i] = Math.floor(Math.random() * 7) + 3;
      stripFontSize[i] = Math.floor(Math.random() * 16) + 8;
    }

    var theColors = ['rgba(255, 255, 255, 0.2)'];

    function drawStrip(x, y, i) {
      for (var k = 0; k <= 0; k++) {
        var randChar = textStrip[Math.floor(Math.random() * textStrip.length)];
         randChar = textStrip[i];
        if (context.fillText) {
          switch (k) {
            case 0:
              context.fillStyle = theColors[0]; break;
            default:
            break;
          }
          context.fillText(randChar, x, y);
        }
        x += stripFontSize[k];
      }
    }
    const width =  this.state.elementWidth 
    function draw() {
      // clear the canvas and set the properties
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.shadowOffsetX = context.shadowOffsetY = 0;
      context.shadowBlur = 1;
      context.shadowColor = 'rgba(255, 255, 255, 0.5)';
  
      for (var j = 0; j < stripCount; j++) {
        context.font = stripFontSize[j] + 'px GalanoGrotesqueW00-Bold';
        context.textBaseline = 'bottom';
        context.textAlign = 'center';
    
        if ( stripX[j] > width) {
          stripX[j] = 0;
          stripY[j] = Math.floor(Math.random() * canvas.height + 10) ;
          stripType[j] = Math.floor(Math.random() * textStrip.length);
          dY[j] = Math.floor(Math.random() * 7) + 3;
          stripFontSize[j] = Math.floor(Math.random() * 16) + 8;
          drawStrip(stripX[j], stripY[j], stripType[j]);
        } else
          drawStrip(stripX[j], stripY[j], stripType[j]);

        stripX[j] += 0.5 * dY[j];
      }
      setTimeout(draw, 70);
    }

    draw();

  }


  componentDidMount() {
    this.setState({ elementHeight: 2 * this.contactRef.clientHeight ,
      elementWidth: this.contactRef.clientWidth  },    () => setTimeout(()=>this.matrix(),1000)  );
  }

  render() {
    return (

      <div ref={element => this.contactRef = element}  className="contact" id='contact'>
   <h2 ><span></span>Contact</h2>     
    {this.state.elementHeight && <canvas ref="canvas" width={this.state.elementWidth} height={this.state.elementHeight}/> }


          {/* <form className="formData" action="https://formspree.io/krskrysiak@gmail.com"
            method="POST">
            <TextField rowsMax={10} multiline={true} type="text" className="textData" name="message" placeholder="Your message" fullWidth={true} required={true}/>
            <Input type="email" className="emailData" name="_replyto" placeholder="Email" fullWidth={true} required={true}/>
            <IconButton type="submit" value="Send" children='send'/>
          </form> */}
          <MessengerCustomerChat
            pageId="410114706194481"
            appId="2201094929903504"
            htmlRef={window.location.pathname}
            themeColor="#dbaf40"
          />
   
          <div  className={!this.state.email ? "icon-contact" : 'icon-contact scale'}  ><img src={Email} alt='email icon' className={!this.state.email ? "floater" : ''} onClick={()=>this.setState({email : true})}/></div>
          {this.state.email &&<p className={this.state.email ? "slideDown" : ''}>krskry@gmail.com</p>}
          <h3>If you wish a new website, or you are looking for front-end developer for your projects, feel free to contact me.<br/>  Let's work together! </h3>
         


      </div>




    );
  }
}

export default Contact;
