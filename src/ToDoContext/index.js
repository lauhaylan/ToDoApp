import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider({children}){
    const {
        //vamos a renombrar toDos y saveToDos
        item: toDos,
        saveItem: saveToDos,
        loading,
        error,
      }= useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue, ]= React.useState('');
      const [openModal, setOpenModal ]= React.useState(false);
      const completedToDos = toDos.filter(toDo => !!toDo.completed).length; // para saber que va a traer un boolean coloco !!
      const totalToDos = toDos.length;
    
    // //función para que se busque en todos los items el valor tipeado en el buscador
      const searchedToDos = toDos.filter(
      (toDo) => {
        // return toDo.text.toLowerCase().includes(searchValue.toLowerCase());
        // es lo mismo que:
    
        const toDoText= toDo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return  toDoText.includes(searchText);
      }
    );
    
    //agregar ToDO

    const addToDo= (text)=>{
      const newToDos= [...toDos];
      newToDos.push({
        text,
        completed: false,
      });      
      saveToDos(newToDos);
    }

    // funcion para completar los items
    const completeToDo = (text)=> {
      const newToDos= [...toDos];
      const toDoIndex = newToDos.findIndex( 
    // hayar el item apartir del index texto ( key={toDo.text} ) 
      (toDo) => toDo.text === text
      );
      newToDos[toDoIndex].completed=true;
      saveToDos(newToDos);
    }
    
    // funcion para elinminar items
    const deleteToDo = (text)=> {
      const newToDos= [...toDos];
      const toDoIndex = newToDos.findIndex( 
    // hayar el item apartir del index texto ( key={toDo.text} ) 
      (toDo) => toDo.text === text
      );
      //splice mediante el index va a borrar en la posición indicada y las cantidades de items indicados)
      newToDos.splice(toDoIndex,1);
      saveToDos(newToDos);
    }

    return(
        <ToDoContext.Provider value={{
            loading,
            error,
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            addToDo,
            completeToDo,
            deleteToDo,
            openModal, 
            setOpenModal
        }}>
            {children}
        </ToDoContext.Provider>
    );
}

export { ToDoContext, ToDoProvider };