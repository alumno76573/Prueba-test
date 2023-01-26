import React from "react";
import '../css/Boton.css'

const BotonEscribirMem=(props)=>(
    <div className="boton-contenedor operador" onClick={props.manejarClick}>
        {props.children}
    </div>
)
export default BotonEscribirMem