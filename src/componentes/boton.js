import React from "react";
import '../styles/Boton.css'

function Boton({ texto, esBotonDeClick, manejarClick }){ //en este caso {texto} reemplaza a props y permite usar el argumento como una variable normal, evitando usar props.texto
                                                        // str, boolean, function
    return(
        <button
        className={ esBotonDeClick ? "boton-click" : "boton-reiniciar" }
        onClick={manejarClick}>
            {texto}
        </button>
    );
}

export default Boton;