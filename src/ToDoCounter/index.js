import React from 'react';
import './ToDoCounter.css';
import { ToDoContext } from '../ToDoContext';
import miImagen from './Recurso3.svg';

function ToDoCounter(){
  const {
    completedToDos,
    totalToDos
  }= React.useContext(ToDoContext)
    return (
      <div className='ToDoCounter'>
        <img src={miImagen} alt="Mi Imagen" />
      <h1>        
        Has completado <span>{completedToDos}</span> de <span>{totalToDos}</span> ToDo
      </h1>
      </div>
    );
  }

  export {ToDoCounter}