import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState} from "react";


function App() {
const [personaje, setPersonaje] = useState({})

  useEffect(()=>{
     consultarApi();
  },[])

  const consultarApi = async()=> {
    const repuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const dato = await repuesta.json()
    console.log(repuesta)
    console.log(dato[0])
    setPersonaje(dato[0])
  }
  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        <Frase personajeProps={personaje}></Frase>
        <Button variant="warning" onClick={consultarApi}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;
