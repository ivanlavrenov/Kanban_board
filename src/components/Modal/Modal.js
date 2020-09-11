import React from "react";
import "./Modal.css";
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom';
import Card from '../Card/Card.js';



export default function Modal( props ) {

const taskText = localStorage.getItem( 'cardText' );

		return (
			<div className="modal-screen">
			  	<div className="modal-block">
			  		<div className="modal-header">
				  		<div className="modal-card-text">
				  			{taskText}
				  		</div>
				  		<NavLink to="/" activeClassName="active" className="modal-link">
				  			<div className="close-img"/>
				  		</NavLink>
				  	</div>
			  		<div className="modal-block-text">
			  			<textarea className="modal-text" placeholder="Описание"/>
			  		</div>
			  		<button className="modal-button">
			  			<a className="modal-button-text">Сохранить</a>
			  		</button>
			  	</div>
		  	</div>
		  );
	}
