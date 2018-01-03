import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './MainApp/MainApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
