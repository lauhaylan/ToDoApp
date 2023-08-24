import React from 'react';
import { ToDoIcon } from './';

function CompleteIcon( {completed, onComplete} ){
 return (
   <>
    <ToDoIcon
    type="check"
    color= {completed ? '#935FA7' : 'gray'}
    onClick={onComplete}
    />
    {completed ? <span className='listo'>DONE</span>:''}
    </>
 );
}

export {CompleteIcon};