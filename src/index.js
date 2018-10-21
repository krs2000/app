import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/wickedcss.min.css';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
