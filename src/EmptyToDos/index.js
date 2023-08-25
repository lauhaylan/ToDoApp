import React from 'react';
import EmptyToDosImg from './carita.svg'
import './EmptyToDos.css';

function EmptyToDos(){    
    return (
      <div className='containerEmptyToDos'>
      <p className='textEmptyToDos'>Crea tu primer To Do!!!</p>
      <img className='carita' src={EmptyToDosImg} alt="Mi Imagen" />
      </div>        
    );
  }

  export {EmptyToDos}