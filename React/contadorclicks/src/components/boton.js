import React from "react";
import '../css/boton.css'

function Boton({texto,esBotonCLick,manejarClick}){
    return(
        <button className={esBotonCLick?'boton-click':'boton-reiniciar'} onClick={manejarClick}>{texto}</button>
    )
}
export default Boton