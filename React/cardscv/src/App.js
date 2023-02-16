import './App.css';
import Tarjetas from './Components/Tarjetas';
import Header from './Components/Header';
import * as API from './Services/cv';
import { useState, useEffect } from 'react';

function App() {
  const [cvs,setCvs]=useState([]);
  useEffect(()=>{API.getCV().then(setCvs);},[]);
  return (
    <div className="App">
      <Header/>
      <section>
        {cvs.map(cv=>(
          <Tarjetas key={cv.login.uuid} {...cv}/>
        ))}
      </section>
    </div>
  );
}

export default App;
