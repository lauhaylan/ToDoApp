import React from 'react';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { ToDosLoading } from '../ToDosLoading';
import { ToDosError } from '../ToDosError';
import { EmptyToDos } from '../EmptyToDos';
import { CreateToDoButtom } from '../CreateToDoButtom';
import { ToDoForm } from '../ToDoForm';
import { Modal } from '../Modal';
import { ToDoContext } from '../ToDoContext';

function AppUI(){
    const{
      loading,
      error,              
      searchedToDos,
      completeToDo,
      deleteToDo,
      openModal,
      setOpenModal
    } = React.useContext(ToDoContext)

    return (
        <>         
          <ToDoCounter />
          <ToDoSearch  />
    
          <ToDoList>
            {loading && (<><ToDosLoading/></>)}
            {error && <ToDosError/>}
            {(!loading && searchedToDos.length===0  ) && <EmptyToDos/>}
              
              {/* //mientras el array este vacío trae lo anterior, si no va a atraer el searchedToDos   */}

            {searchedToDos.map(toDo =>(
              <ToDoItem 
              key={toDo.text} 
              text={toDo.text}
              completed={toDo.completed}
              onComplete={()=> completeToDo(toDo.text)} 
              onDelete={()=> deleteToDo(toDo.text)}
              />
              ))}
          </ToDoList>
           
          <div className="newTask">
            <CreateToDoButtom  setOpenModal= {setOpenModal} />
          </div>

          {openModal &&
          (<Modal>
            <ToDoForm/>
          </Modal>
          )}
        </>
      );
}

export { AppUI };
