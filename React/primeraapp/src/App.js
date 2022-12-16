import logo from './logo.svg';
import './App.css';
//import Post from './componentes/post.js';
import {Post} from './componentes/post.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>COMPAÑEROS DE CARRERA</h1>
        <Post
          nombre='Pascual Moya Cañadas'
          pais='España'
          imagen='1'
          cargo='Ingeniero de Sistemas'
          empresa='Orange'
          texto='Siempre haciendo por los demás'
          correo='Pascualmoya@ies-azarquiel.es'
        />
        <Post
          nombre='Eduardo Collado'
          pais='España'
          imagen='2'
          cargo='Ingeniero de Sistemas'
          empresa='NetBerry'
          texto='Siempre haciendo por los demás'
          correo='Eduardocollado@ies-azarquiel.es'
        />
        <Post
          nombre='Inés Moya'
          pais='España'
          imagen='3'
          cargo='Ingeniero de Sistemas'
          empresa='JCCM'
          texto='Siempre haciendo por los demás'
          correo='Inesmoya@ies-azarquiel.es'
        />
      </div>
    </div>
  );
}
export default App;
