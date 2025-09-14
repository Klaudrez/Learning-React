import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Frases para mantenerte enfocado</h1>
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
       </div>
    </div>
  );
}

export default App;
