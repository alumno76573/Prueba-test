import React from 'react'
import '../css/Tarea.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import 'https://kit.fontawesome.com/2da7ac124d.js';

function Tarea({id,texto,prioridad,completada,completarTarea,eliminarTarea}){
    
    return(
        <div className={completada?'tarea-contenedor completada':'tarea-contenedor'}>
            <div className='prioridad'>{prioridad}</div>
            <div className='tarea-texto' onClick={()=>completarTarea(id)}>
                {texto}
            </div>
            <div className='tarea-contenedor-iconos' onClick={()=>eliminarTarea(id)}>
                <i class="fa-solid fa-trash-can icono-basura"></i>
                {/* <AiOutlineCloseCircle className='tarea-icono'/> */}
            </div>
        </div>
    )
}

export default Tarea