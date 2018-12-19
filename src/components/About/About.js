import React, { Component } from 'react';
import './About.css';
import Delayed from '../Delayed/Delayed';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {


    }

  }

  componentDidUpdate(prevProps) {
    if (this.props.active !== prevProps.active) {
      setTimeout(() => this.setState({ loaded: true }), 11000);
    }
  }

  returnActiveClass = (t) => {
    return 'zoomer'

  }
  


  render() {
    return (

      <div className="about" id='about'>

        <h2><span ></span>About</h2>
        {
         (this.state.loaded || this.props.active) &&  <div>
             <Delayed waitBeforeShow={0}><h3 className='zoomer'>..::FRONT-END DEVELOPMENT::..</h3></Delayed>
            <Delayed waitBeforeShow={1000}><p className='slideDown'>Well written JS, HTML and CSS can make your ideas happen.</p> </Delayed>
            <Delayed waitBeforeShow={2000}> <h3 className='zoomer'>..::RESPONSIVE DESIGN::..</h3></Delayed>
            <Delayed waitBeforeShow={3000}> <p className='slideDown'>No matter the device, your website will shine.</p></Delayed>
            <Delayed waitBeforeShow={4000}>  <h3 className='zoomer'>..::WORDPRESS DEVELOPMENT::..</h3></Delayed>
            <Delayed waitBeforeShow={5000}>  <p className='slideDown'>Most advanced extensions and plugins can make a difference.</p></Delayed>
            <Delayed waitBeforeShow={6000}>  <h3 className='zoomer'>..::WOOCOMMERCE DEVELOPMENT::..</h3></Delayed>
            <Delayed waitBeforeShow={7000}> <p className='slideDown'>E-commerce is on the rise.</p></Delayed>
            <Delayed waitBeforeShow={8000}>  <h3 className='zoomer'>..::ADVANCED ANIMATIONS::..</h3></Delayed>
            <Delayed waitBeforeShow={9000}> <p className='slideDown'>Animations that can make your website alive.</p></Delayed>
            <Delayed waitBeforeShow={10000}> <h3 className='zoomer'>..::ACCESSIBILITY & SEMANTICS::..</h3></Delayed>
            <Delayed waitBeforeShow={11000}> <p className='slideDown'>Usability to make your website up to standards.</p></Delayed></div>
        }
      </div>




    );
  }
}

export default About;
