import React from 'react';

const TextoCondicional = ({ mostrar }) => {
  if (mostrar) {
    return <p>hecho</p>;
  } else {
    return null; 
    // No se muestra nada cuando mostrar es false.
  }
};

export default TextoCondicional;




