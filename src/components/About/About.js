import React, { Component } from 'react';
import './About.css';
import Delayed from '../Delayed/Delayed';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {


    }

  }

  componentDidMount() {
    this.loaded = true;
  }

  // componentDidUpdate(prevProps) {

  //   if (this.props.active !== prevProps.active) {
  //   this.animate = setTimeout( () => this.loaded = true , 11000 );
  //     this.animate
  //   }
  // }




  render() {
    return (

      <div className="about" id='about'>
        <h2 ><span ></span>About</h2>
    {    this.props.active &&  <div className='skills'>
        <Delayed mounted={true} mountAfter={0} waitBeforeShow={0}><h3 className={this.props.active ? " fadeIn" : " fadeOut"}>FRONT-END DEVELOPMENT</h3></Delayed>
        <Delayed mounted={true} mountAfter={0} waitBeforeShow={100}><p className={this.props.active ? " fadeIn" : " fadeOut"}>Well written JS, HTML and CSS can make your ideas happen.</p> </Delayed>
        <Delayed mounted={true} mountAfter={0} waitBeforeShow={200}> <h3 className={this.props.active ? " fadeIn" : " fadeOut"}>RESPONSIVE DESIGN</h3></Delayed>
        <Delayed mounted={true} mountAfter={0} waitBeforeShow={300}> <p className={this.props.active ? " fadeIn" : " fadeOut"}>No matter the device, your website will shine.</p></Delayed>
        <Delayed mounted={true} mountAfter={0} waitBeforeShow={400}>  <h3 className={this.props.active ? " fadeIn" : " fadeOut"}>WORDPRESS DEVELOPMENT</h3></Delayed>
        <Delayed mounted={true} mountAfter={0} waitBeforeShow={500}>  <p className={this.props.active ? " fadeIn" : " fadeOut"}>Most advanced extensions and plugins can make a difference.</p></Delayed>
        <Delayed mounted={true} mountAfter={0} waitBeforeShow={600}>  <h3 className={this.props.active ? " fadeIn" : " fadeOut"}>WOOCOMMERCE DEVELOPMENT</h3></Delayed>
        <Delayed mounted={true} mountAfter={0} waitBeforeShow={700}> <p className={this.props.active ? " fadeIn" : " fadeOut"}>E-commerce is on the rise.</p></Delayed>
        <Delayed mounted={true} mountAfter={0} waitBeforeShow={800}>  <h3 className={this.props.active ? " fadeIn" : " fadeOut"}>ADVANCED ANIMATIONS</h3></Delayed>
        <Delayed mounted={true} mountAfter={0} waitBeforeShow={900}> <p className={this.props.active ? " fadeIn" : " fadeOut"}>Animations that can make your website alive.</p></Delayed>
        <Delayed mounted={true} mountAfter={0} waitBeforeShow={1000}> <h3 className={this.props.active ? " fadeIn" : " fadeOut"}>ACCESSIBILITY & SEMANTICS</h3></Delayed>
        <Delayed mounted={true} mountAfter={0} waitBeforeShow={1100}> <p className={this.props.active ? " fadeIn" : " fadeOut"}>Usability to make your website up to standards.</p></Delayed>
        </div>}
      </div>




    );
  }
}

export default About;
