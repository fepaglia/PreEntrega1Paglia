import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./Item.css";


function Item({ title, price, pictureUrl }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <span>{price} u$s</span> 
        </Card.Text>
        <Button variant="primary">Ver detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;


