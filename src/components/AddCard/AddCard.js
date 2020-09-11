import React from 'react';
import  './AddCard.css';
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";



export default class AddCard extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      editing: false
    }
  }

  onSubmit( event ) {
    event.preventDefault();
    const taskText = this.textInput.value.trim();
    const listNumber = this.props.formNum;

    if ( taskText && this.props.onAdd ) {
      this.props.onAdd( taskText, listNumber );
    }
    this.textInput.value = '';
  }

 setEditing( editing ) {
    this.setState({
      editing
    });
  }

  render() {
    if(!this.state.editing) {
      return (
        <div className="open-add-button" onClick={() => this.setEditing(true)}>
          <div className="main-button" href="#">
             <div className="img"/>
             <p>Добавить еще одну карточку</p>
          </div>
        </div>  
        ); 
    }

      return (
        <form className="card add-task-form" onSubmit={(e) => this.onSubmit(e)}>
          <input type="text" placeholder="Введите текст карточки" className="task-input" ref={input => this.textInput = input} />
          <div className="buttons-block">
            <button className="button add-button">Добавить карточку</button>
            <button className="button cancel-button" onClick={() => this.setEditing(false)}><div className="close-img"/>Отмена</button>
          </div>
        </form>
      );
  }
}