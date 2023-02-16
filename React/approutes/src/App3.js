import { useState } from "react";
import { Link, NavLink, Route, Routes, useParams, Outlet } from "react-router-dom";
import './App.css';

const Home = () => {
  return <h1>Home</h1>;
};

const SearchPage = () => {
    const tareas=[
        'Hacer-la-cama',
        'Lavar-los-platos',
        'Sacar-la-basura',
        'Estudiar-fisica-nuclear'
    ]
  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {tareas.map(tarea=>(
            <li key={tarea}><Link to={`/tareas/${tarea}`}>{tarea}</Link></li>
        ))}
      </ul>
    </div>
  );
};

const Tareas = () => {
    const {name}=useParams();
  return (
    <div>
      <h1>Tareas</h1>
      {name}
      <p><Link to='details'>Ir a los detalles</Link></p>
      <Outlet/>
    </div>
  );
};

const TareaDetalle=()=>{
  const {name}=useParams();
  return(
    <h1>Tarea detalles {name}</h1>
  )
}

function App3() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="search-page">Search Page</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/tareas/:name" element={<Tareas />} >
            <Route path="details" element={<TareaDetalle/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App3