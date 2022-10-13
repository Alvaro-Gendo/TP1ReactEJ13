import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Clima from "./Clima";

const Formulario = () => {
  const [clima, setClima] = useState([]);
  const [pais, setPais] = useState("");
  const [nombre, setNombre]  = useState("");
  const [temperatura, setTemperatura] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pais.trim() === "") {
      alert("Debes comletar el campo");
    } else {
      consultarAPI();
      setPais("");
    }
  };

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${pais}&appid=1fcaebff532be7caf4c874f6d9171167`
      );
      const dato = await respuesta.json();
      console.log(dato)
      // console.log(dato.main)
      setClima(dato.weather);
      setNombre(dato.name)
      setTemperatura(dato.main)
    } catch (error) {
      alert("Ubicacion no encontrada");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Ingrese el nombre de un pais o ciudad</Form.Label>
          <Form.Control
            required
            type="text"
            minLength={3}
            maxLength={50}
            placeholder="Nombre de pais o ciudad"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="mt-3">
          Buscar
        </Button>
      </Form>
      <Clima clima={clima} nombre={nombre} temperatura={temperatura}></Clima>
    </>
  );
};

export default Formulario;
