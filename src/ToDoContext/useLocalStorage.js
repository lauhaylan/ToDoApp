import React from "react";

// los customsHooks siempre llevan en su nombre "use"
function useLocalStorage(itemName, initialValue){
  
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(()=>{
    setTimeout(()=> {
      try{
        const localStorageItem = localStorage.getItem(itemName);
      
        let parseItem;
      if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = initialValue;
        }else{
          parseItem= JSON.parse(localStorageItem);
          setItem(parseItem);
        }
          setLoading(false);
      }catch(error){
        setLoading(false);
        setError(true);// si paso true asegurarme que el error sea entendible al usuario y no el log
      }
    }, 2000);
     });

  
    // funcion para actualiza el estado y el localStorage
  const saveItem = (newItem)=> {
    localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
  };
    return {
      item,
      saveItem,
      loading,
      error,
    };
  
  }

  export {useLocalStorage};


  // const defaultToDo=[
//   { text: 'tomar un cafe', completed: true },
//   { text: 'cepillarse los dientes', completed: true },
//   { text: 'bañarse', completed: false },
//   { text: 'ponerse PJ', completed: false },
//   { text: 'ARARAR', completed: false },
//   { text: 'dormir', completed: false }
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDo));
// localStorage.removeItem('TODOS_V1');