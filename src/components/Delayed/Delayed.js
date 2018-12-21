import React from 'react';
import PropTypes from 'prop-types';

class Delayed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        this.timerHandle =  setTimeout(() => {
            this.setState({hidden: false});
            this.timerHandle = 0;  
        }, this.props.waitBeforeShow);
    }

    componentWillUnmount = () => {                        
        if (this.timerHandle) {                  
            clearTimeout(this.timerHandle);      
            this.timerHandle = 0;                
        }                                        
      };                                         
    

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

Delayed.propTypes = {
  waitBeforeShow: PropTypes.number.isRequired
};

export default Delayed;