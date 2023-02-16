import { useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import './App.css';

const Home = () => {
  return <h1>Home</h1>;
};

const SearchPage = () => {
    const tareas=[
        'Hacer la cama',
        'Lavar los platos',
        'Sacar la basura',
        'Estudiar fisica nuclear'
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
    </div>
  );
};


function App2() {
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
        <Route path="/tareas/:name" element={<Tareas />} />
      </Routes>
    </div>
  );
}

export default App2