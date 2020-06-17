import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

export default function Card( props ) {

let saveId = (e, fromList) => {
   const cardText = {
      taskId: e.currentTarget.id,
      fromList: fromList
    }
 localStorage.setItem('cardText', props.taskText);
}


const path = "/modal/" + props.timeId;

  return (
    <NavLink to={path} onClick={saveId} activeClassName="active" className="task-card" draggable="true" id={[props.timeId]} onDragStart={props.onDragStart}>
  		<div className="card-text">{props.taskText}</div>
    </NavLink>
  ) 
};