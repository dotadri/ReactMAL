import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Card, Button, CardColumns} from 'react-bootstrap';

export default class Home extends React.Component{

  render(){
    return(
        <div class="col-12 card-deck">
          <Card style={{ width: '18rem', marginRight: '1rem' }}>
      <div className="container-fluid body-main">
        <CardColumns>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', marginRight: '1rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', marginRight: '1rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>);
        </CardColumns>
      </div>);
  }
}
