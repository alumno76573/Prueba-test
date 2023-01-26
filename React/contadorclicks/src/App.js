import './App.css';
import Boton from './components/boton';
import Contador from './components/contador';
import logoies from './images/logoAzarquiel.png';
import { useState } from 'react';

function App() {
  const [numclicks,setNumClicks]=useState(0);
  const manejarClick=()=>{
    setNumClicks(numclicks+1);
  }
  const reiniciarContador=()=>{
    setNumClicks(0)
  }
  return (
    <div className='App'>
      <div className='iesazarquiel-logo-contenedor'>
        <img className='iesazarquiel-logo' src={logoies} alt='logo azarquiel'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numclicks={numclicks}/>
        <Boton texto='Click' esBotonCLick={true} manejarClick={manejarClick}/>
        <Boton texto='Reiniciar' esBotonCLick={false} manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
