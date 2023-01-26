import React from "react";
import '../css/Header.css';
import titulo from '../img/img_calculadora.jpg';

function Header(){
    return(
        <div className="header">
            <img src={titulo} alt="titulo cabecera"/>
        </div>
    )
}

export default Header