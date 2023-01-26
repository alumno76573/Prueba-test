import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import BotonMem from './components/BotonMem';
import { useState } from 'react';
import {evaluate} from 'mathjs';
import BotonEscribirMem from './components/BotonEscribirMem';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [input,setInput]=useState('');
  const [mem,setMem]=useState('');
  const agregarInput=(val)=>{
    setInput(input+val)
  }

  const calcularResultado=()=>{
    if (input){
      setInput(evaluate(input));
    } else {
      alert('Debes introducir datos')
    }
  }

  const guardarOperacion=()=>{
    if (input){
      setMem(input);
    } else {
      alert('Debes introducir datos')
    }
  }
  const escribirOperacion=()=>{
    if (mem){
      setInput(input+mem);
    } else {
      alert('Debes guardar datos previamente')
    }
    
  }
  return (
    <div className="App">
      <Header/>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=>setInput('')}>Clear</BotonClear>
          <BotonMem manejarClick={guardarOperacion}>C+</BotonMem>
          <BotonEscribirMem manejarClick={escribirOperacion}>C-</BotonEscribirMem>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
