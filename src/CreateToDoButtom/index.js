import './CreateToDoButtom.css'

function CreateToDoButtom({setOpenModal}){
    return (
      <button 
      className="addTask"
      // todo lo que pasemos en REACT que empiece con "on" será un evento
      // escuchador de evento
      // Cada vez que generamos un evento debemos pasarle una función
        onClick={
          () => {setOpenModal(state=>!state);}
        }
      >+</button>
    );
  }

  export {CreateToDoButtom}