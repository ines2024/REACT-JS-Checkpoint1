import React from 'react'
import { ListGroup } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function Shopcard({product}) {
  return (
    <div>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>color:{product.color}</ListGroup.Item>
        <ListGroup.Item>{product.size}</ListGroup.Item>
        <ListGroup.Item>{product.price}</ListGroup.Item>
      </ListGroup>
      
    </Card>
    </div>
    )
  
}

export default Shopcard