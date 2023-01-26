import React from "react";
import '../css/Boton.css'

const BotonMem=(props)=>(
    <div className="boton-contenedor operador" onClick={props.manejarClick}>
        {props.children}
    </div>
)
export default BotonMem