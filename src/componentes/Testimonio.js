import React from "react";
import '../styles/Testimonios.css'

function Testimonio(){
  return(
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../images/Linus.jpg")}
        alt="Foto1" />
        <div className="contenedor-texto-textimonio">
          <p className="nombre">Linus Torvalds</p>
          <p className="cargo">Creador del kernel de Linux</p>
          <p className="testimonio">La mayoría de los buenos programadores programan no porque esperan que les paguen o que el público los adore, sino porque programar es divertido. </p>
        </div>
    </div>
  );
}

export default Testimonio;