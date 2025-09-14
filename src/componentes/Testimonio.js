import React from "react";
import '../styles/Testimonios.css'

function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../images/${props.imagen}`)}
        alt="Foto1" />
        <div className="contenedor-texto-textimonio">
          <p className="nombre"> <strong> {props.nombre} </strong></p>
          <p className="cargo">{props.cargo}</p>
          <p className="testimonio">{props.testimonio} </p>
        </div>
    </div>
  );
}

export default Testimonio;