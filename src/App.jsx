import "./App.css";
import milogo from "./img/mi-logo.png";
import Boton from "./componentes/Boton.jsx";
import Pantalla from "./componentes/Pantalla.jsx";
import BotonClear from "./componentes/BotonClear.jsx";
import { useState } from "react";
import { evaluate } from "mathjs";
import Swal from "sweetalert2";

function App() {
  // Estado del conponente
  const [input, setInput] = useState(""); //inicialmente cadena vacia

  //Agregar valor del input a la pantalla
  const agregarInput = (val) => {
    setInput(input + val);
  };
  // // función para calcular el resultado
  // const calcularResultado = () => {
  //   //Condicional
  //   if (input) {
  //     setInput(evaluate(input));
  //   } else {
  //     Swal.fire({
  //       icon: "warning",
  //       title: "Campo vacio",
  //       text: "Por favor, ingrese valores para realizar los calculos",
  //     });
  //     // alert("Por favor ingrese valores para realizar los calculos");
  //   }
  // };
  const calcularResultado = () => {
    if (!input.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Entrada vacía",
        text: "Por favor, ingresa una operación matemática antes de calcular.",
      });
      return;
    }
    try {
      const resultado = evaluate(input);
      if (!isFinite(resultado)) {
        throw new Error("Resultado inválido");
      }
      setInput(String(resultado));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error en la operación",
        text: "Revisa la expresión matemática ingresada.",
      });
      setInput("");
    }
  };

  return (
    <div className="App">
      <div className="my-logo-contenedor">
        <img src={milogo} className="my-logo" alt="David Vasquez mi logo" />
      </div>
      <div className="contenedor-calculadora">
        <div className="contenedor">
          <Pantalla input={input} />
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>CLEAR</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
