import React from "react";
import { ToDoContext } from '../ToDoContext';
import './ToDoForm.css';

function ToDoForm () {
    const {
        addToDo,
        setOpenModal, 
    }= React.useContext(ToDoContext);

    const [newToDoValue,setNewToDoValue]= React.useState('');
    //se crea aca (y no en el ToDoContext) porque no hace falta ver cada valor tipeado si no se agrega la oración completa
    //se guarda el valor del ToDo de manera local hasta que se realiza el submit

    const onSubmit=(event)=> {
        event.preventDefault(); // para evitar que recargue la pagina  
        addToDo(newToDoValue); // para agregar el nuevo TODO
        setOpenModal(false); //para cerrar el modal no hace falta evaluar el estado y después negarlo, por eso solo se pasa un false
    }

    const onCancel = ()=>{
        setOpenModal(false);
    };

    const onChange= (event)=>{
        setNewToDoValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
                placeholder="deja tu ToDo"
                maxLength="500"
                value={newToDoValue}
                onChange={onChange}
                // required
            /> 
            <div className="ToDoForm-buttonContainer">
                <button 
                type="button"
                className="ToDoForm-button ToDoForm-button--cancel"
                onClick={onCancel}
                >cancelar</button>           
                <button 
                type="submit"
                className="ToDoForm-button ToDoForm-button--add"
                >añadir</button> 
            </div>          
        </form>
    )
}

export { ToDoForm };