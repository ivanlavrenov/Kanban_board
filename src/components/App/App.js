import React from 'react';
import './App.css';
import List from '../List/List.js';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Modal from '../Modal/Modal';


export default class Board extends React.Component {
  constructor( props ) {

    super( props );

    if(localStorage.getItem( 'lists' )) {
      const rawLS = localStorage.getItem( 'lists' );
      const parsedLS = JSON.parse( rawLS );

      this.state = { lists: parsedLS }

    } else {

      this.state = {
        lists: [
          {
            title: 'В работе',
            id: 0,
            cards: [{
              listNumber: 0,
              timeId: 'demo-card',
              taskText: ''
            }]
          },
          {
            title: 'На проверке',
            id: 1,
            cards: [{
              listNumber: 1,
              timeId: 'demo-card',
              taskText: ''
            }]
          },
          {
            title: 'Выполнено',
            id: 2,
            cards: [{
              listNumber: 2,
              timeId: 'demo-card',
              taskText: ''
            }]
          }
        ]
      }

      localStorage.setItem( 'lists', JSON.stringify( this.state.lists ))
    }
  }

  onDragStart = ( e, fromList ) => {
    const dragInfo = {
      taskId: e.currentTarget.id,
      fromList: fromList
    }
  
    localStorage.setItem( 'dragInfo', JSON.stringify( dragInfo ));
  }

 onDragOver = (e) => {
    e.preventDefault();
  }

  onDrop = (e, listNum) => {

    const droppedTask = localStorage.getItem('dragInfo');
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);
    const parsedDragInfo = JSON.parse(droppedTask)
    

    const cardsArray = parsedLS[parsedDragInfo.fromList].cards
    const taskCard = cardsArray.find(card => card.timeId == parsedDragInfo.taskId)
    const indexOfCard = cardsArray.findIndex(card => card.timeId == parsedDragInfo.taskId)
    parsedLS[parsedDragInfo.fromList].cards.splice(indexOfCard, 1)
    parsedLS[listNum].cards.push({...taskCard, listNumber: parseInt(listNum)})
   

    this.setState({
      lists: parsedLS
    });
    localStorage.setItem('lists', JSON.stringify(parsedLS));
}


  addTaskCard( taskText, listNumber ) {
    const rawLS = localStorage.getItem( 'lists' );
    const parsedLS = JSON.parse( rawLS );

    const newTask = {
      taskText,
      listNumber,
      timeId: new Date().valueOf()
    }

    parsedLS[listNumber].cards.push( newTask )


    this.setState({
      lists: parsedLS
    })
    localStorage.setItem( 'lists', JSON.stringify( parsedLS ))
  
  }


render() {
  const lists = this.state.lists.map(( list, index ) => (
    <li className="list-wrapper" key={index}>
      <List {...list} 
        onAdd={(taskText, listNumber) => this.addTaskCard( taskText, listNumber )} 
        onDragStart={(e, fromList) => this.onDragStart(e, `${list.id}`)}
        onDragOver={( e ) => this.onDragOver( e )} 
        onDrop={( e, listNum ) => { this.onDrop(e, `${list.id}`)}}
      />
    </li>
  ));
   

  return (
    <main>
      <HashRouter basename="/app"> 
        <header>
         <Route path="/modal" component={ Modal }/>
        </header>
         <main>
           <div className="board">
            <ul className="lists">
              { lists }
            </ul>
           </div>
         </main>
      </HashRouter>
     </main> 
  );
  }
}

