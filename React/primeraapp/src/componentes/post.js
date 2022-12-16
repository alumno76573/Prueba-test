import React from "react";
import '../css/post.css'

export function Post(props){
    return(
        <div className="contenedor-post">
            <img className="imagen-post" src={require(`../img/foto${props.imagen}.jfif`)}/>
            <div className="contenedor-texto">
                <p className="nombre-post"><strong>{props.nombre}</strong> en <u>{props.pais}</u><br/>{props.correo}</p>
                <p className="cargo-post">{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className="texto-post">{props.texto}</p>
            </div>
        </div>
    )
}
//export default post;