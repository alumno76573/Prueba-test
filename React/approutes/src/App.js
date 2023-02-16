import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <h1>Home</h1>
  )
}

const SearchPage = () => {
  return (
    <div>
      <h1>Search Page</h1>
    </div>
  )
}

const TareasCasa = () => {
  return (
    <div><h1>Tareas de la Casa</h1></div>
  )
}

const TareasEstudiar = () => {
  return (
    <div><h1>Tareas del instituto</h1></div>
  )
}

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='search-page'>Search Page</Link></li>
            <li><Link to='tareas-casa'>Tareas de la Casa</Link></li>
            <li><Link to='tareas-estudiar'>Tareas del Insituto</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/tareas-casa' element={<TareasCasa />} />
        <Route path='/tareas-estudiar' element={<TareasEstudiar />} />
      </Routes>
    </div>
  );
}

export default App;
