import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import '../css/TareaFormulario.css'

function TareaFormulario(props){
    const [input,setInput]=useState()
    const [value,setValue]=useState("");
    const manejarCambio=(e)=>{
        setInput(e.target.value);
    }

    const manejarEnvio=(e)=>{
        e.preventDefault();
        const tareaNueva={
            id:uuidv4(),
            texto:input,
            completada:false,
            prioridad:value,
        }
        props.onSubmit(tareaNueva)
        setInput();
    }

    return(
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <select className='tarea-select' value={value} onChange={(e)=> setValue(e.target.value)}>
                <option value="0"></option>
                <option value="baja">baja</option>
                <option value="media">media</option>
                <option value="alta">alta</option>
            </select>
            <input 
            className='tarea-input' 
            type='text' 
            placeholder='Escribe tarea' 
            name='texto' 
            onChange={manejarCambio}/>
            <button className='tarea-boton'>Agregar Tarea</button>
        </form>
    )
}

export default TareaFormulario