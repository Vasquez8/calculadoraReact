import "./App.css";
import milogo from "./img/mi-logo.png";
import Boton from "./componentes/Boton.jsx";
import Pantalla from "./componentes/Pantalla.jsx";
import BotonClear from "./componentes/BotonClear.jsx";

function App() {
  return (
    <div className="App">
      <div className="my-logo-contenedor">
        <img src={milogo} className="my-logo" alt="David Vasquez mi logo" />
      </div>
      <div className="contenedor-calculadora">
        <div className="contenedor">
          <Pantalla />
        </div>
        <div className="fila">
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className="fila">
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className="fila">
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className="fila">
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className="fila">
          <BotonClear>CLEAR</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
