import React from "react";
import "../style/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      //Cuando hacemos click llamamos una función flecha anonima
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Boton;
