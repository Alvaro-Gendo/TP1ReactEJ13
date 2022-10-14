import { Card, Col } from "react-bootstrap";

const Clima = ({ clima, nombre, temperatura }) => {
  return (
    <>
      {clima.map((clima) => (
        <Card.Body className="mt-4" key={clima}>
          <Col sm={12} md={4} lg={4}>
            <Card className="m-1 text-center">
              <Card.Header>{nombre}</Card.Header>
              <Card.Text>Clima: {clima.description}</Card.Text>
              <Card.Text>Temperatura: {temperatura.temp}°</Card.Text>
            </Card>
          </Col>
        </Card.Body>
      ))}
    </>
  );
};

export default Clima;
