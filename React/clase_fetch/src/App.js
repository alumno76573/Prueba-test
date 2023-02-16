import {useState, useEffect} from 'react';
import './App.css';
import ItemLanzamiento from './Components/ItemLanzamiento';
import * as API from './Services/launches';
import { Heading } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { ListaLanzamientos } from './Components/ListaLanzamientos';
import { DetallesLanzamiento } from './Components/DetallesLanzamiento';

function App() {
  const [launches,setLaunches]=useState([]);
  useEffect(()=>{API.getAllLaunches().then(setLaunches);},[])
  return (
    <div className="App">
      <Heading as='h1' size='lg'>
        Lanzamientos
      </Heading>
      {/* <ul>
        {launches.map(launches=>(
          <li key={launches.flight_number}>
            {launches.mission_name} {launches.launch_year}
          </li>
        ))}
      </ul> */}
      <Routes>
        <Route path='/launch' element={<ListaLanzamientos/>}/>
        <Route path='/launch/*' element={<ListaLanzamientos/>}>
          <Route path=':launchId' element={<DetallesLanzamiento/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
