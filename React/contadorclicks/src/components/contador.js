import React from "react";
import '../css/contador.css'

function Contador({numclicks}){
    return(
        <div className="contador">
            {numclicks}
        </div>
    )
}
export default Contador