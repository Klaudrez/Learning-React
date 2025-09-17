import './App.css';
import Boton from './componentes/boton';
import Testimonio from './componentes/Testimonio';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numeroDeClicks, setNumeroDeClicks] = useState(0);

  const manejarClick = () => {
    setNumeroDeClicks(numeroDeClicks + 1 );
  };

  const reiniciarContador = () => {
    setNumeroDeClicks(0);
  };

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Frases de internet.</h1>
          <Testimonio 
            nombre = "Linus Torvalds"
            cargo = "Creador del Kernel de Linux" 
            testimonio= "La mayoría de los buenos programadores programan no porque esperan que les paguen o que el público los adore, sino porque programar es divertido."
            imagen = "Linus.jpg"
          />
          <Testimonio 
            nombre = "Jorge Luis Borges"
            cargo = "Escritor argentino" 
            testimonio= "Todo lo que nos sucede, incluso nuestras humillaciones, nuestras desgracias, nuestras vergüenzas, todo nos es dado como materia prima, como barro, para que podamos dar forma a nuestro arte."
            imagen = "borges.jpg"
          />
        <h1>Contador de Clicks</h1>
          <Contador 
            numeroDeClicks={numeroDeClicks}
          />
          <Boton
            texto= "Contador"
            esBotonDeClick={true}
            manejarClick={manejarClick}
          />
          <Boton
            texto= "Reinicio"
            esBotonDeClick={false}
            manejarClick={reiniciarContador}
          />
       </div>
    </div>
  );
}

export default App;
