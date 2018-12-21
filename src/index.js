import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/wickedcss.min.css';
// import './styles/animate.css';
// import "react-alice-carousel/lib/alice-carousel.css";
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
