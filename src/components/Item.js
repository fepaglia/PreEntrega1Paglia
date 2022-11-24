import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { propTypes } from 'react-bootstrap/esm/Image';
import "./Item.css";

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.propTypes} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <span>{props.price} u$s</span>
          <p>{props.description}</p>
          <i>{props.id}</i>
        </Card.Text>
        <Button variant="primary">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;


