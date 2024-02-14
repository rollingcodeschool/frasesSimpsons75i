import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  
  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async ()=>{
    try {
      //aqui agregar el codigo a ejecutar
      const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
      const dato = await respuesta.json()
      console.log(respuesta);
      console.log(dato[0]);
      setPersonaje(dato[0])
    } catch (error) {
      console.log(error);
      //agregar algun mensaje para el usuario final, que mencione intentar mas adelante
    }
  }

  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        <Frase personajeProps={personaje}></Frase>
        <Button variant="warning" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;
