import React from "react";
import '../css/Boton.css'

function Boton(props){
    const esOperador=(valor)=>{
        return isNaN(valor)&&(valor!=='.'&&(valor!=='='))
    }
    return(
        //Templates literals
        <div className={`boton-contenedor ${esOperador(props.children)?'operador':''}`.trimEnd()}
        onClick={()=>props.manejarClick(props.children)}>
            {props.children}
        </div>
    )
}
export default Boton