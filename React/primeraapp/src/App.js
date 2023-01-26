import logo from './logo.svg';
import './App.css';
//import Post from './componentes/post.js';
import {Post} from './componentes/post.js'

function App() {
  const getPost= async () =>{
    try{
      const getInfo=await(await fetch(".data/blog.json")).json();
      console.log(getInfo);
    }catch{

    }
  }
  getPost();
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>COMPAÑEROS DE CARRERA</h1>
        <Post
          nombre=''
          pais=''
          imagen=''
          cargo=''
          empresa=''
          texto=''
          correo=''
        />
        <Post
          nombre=''
          pais=''
          imagen=''
          cargo=''
          empresa=''
          texto=''
          correo=''
        />
        <Post
          nombre=''
          pais=''
          imagen=''
          cargo=''
          empresa=''
          texto=''
          correo=''
        />
      </div>
    </div>
  );
}
export default App;
