import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="App">
      <h1 className="text-center">Clima</h1>
      <hr/>
      <Formulario/>
    </Container>
  );
}

export default App;
