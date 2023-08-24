import { CompleteIcon } from '../ToDoIcon/CompleteIcon'
import { DeleteIcon } from '../ToDoIcon/DeleteIcon'
// import { TextoCondicional } from './mostrar'
import './ToDoItem.css';

function ToDoItem(props){
    return (
      <li className="ToDoitem"> 
      
        <DeleteIcon
           onDelete={props.onDelete}
        />
      {/* se va a llamar a la clase entre "" solo si cumple la propiedad (completed en true)  */}
        
        <p className= {`ToDoitem-p ${props.completed && "ToDoitem-p--complete"} `} >
           {props.text} 
        </p>
        
        <CompleteIcon 
          completed={props.completed}
          onComplete={props.onComplete}
        
        />
        
      </li>
    );
  }

  export { ToDoItem };