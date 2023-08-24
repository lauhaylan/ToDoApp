import React from 'react';
import preloader from './loading.png'
import './ToDosLoading.css';

function ToDosLoading(){    
    return (
        <div className='ToDoLoading-container'>
        <p>Cargando....</p>
        <div class="preloader"><img src={preloader} alt="loading" /></div>
        </div>
    );
  }

  export {ToDosLoading}