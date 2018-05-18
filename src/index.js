import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<Provider store={createStore(reducer, applyMiddleware(thunk))}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
