import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Modal from './components/Modal/Modal';


ReactDOM.render(
	<HashRouter> 
		<Route path="/" component={ App }/>
		<Route path="/modal" component={ Modal }/>
	</HashRouter>,

 document.getElementById('root'));