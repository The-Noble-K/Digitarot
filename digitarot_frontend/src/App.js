import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardDeck, Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    state = {
        cards: []
    };

    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:8001/api/');
            const cards = await response.json();
            this.setState({cards});
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return(
            <Container>
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Navbar.Brand href="#">Digital Tarot</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Deck</Nav.Link>
                        <Nav.Link href="#">Card of the Day</Nav.Link>
                        <Nav.Link href="#">Spreads</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                {this.state.cards.map(card => (
                    <Row>
                        <Col xs="4"></Col>
                        <Col xs="4">
                            <CardDeck>
                                <Card>
                                    <Card.Img variant="top" src={card.image} alt={card.name} />
                                    <Card.Body>
                                        <Card.Title>{card.name}</Card.Title>
                                        <Card.Text>
                                            Themes: {card.meaning}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Sharman-Caselli Deck</small>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>
                        </Col>
                        <Col xs="4"></Col>
                    </Row>
                ))}
            </Container>
        );
    }
}

export default App;



/*
return(
    <div>
        {this.state.cards.map(card => (
            <div key={card.id}>
                <h1>{card.name}</h1>
                <img src={card.image} alt={card.name} />
                <span>{card.meaning}</span>
                <span>{card.reversal}</span>
            </div>
        ))}
    </div>
    );


                    <Card>
                        <CardBody>
                            <CardImg src={card.image} alt={card.name} />
                            <CardTitle key={card.id}>{card.name}</CardTitle>
                            <CardSubtitle>{card.meaning}</CardSubtitle>
                            <Button>Read More</Button>
                        </CardBody>
                    </Card>


                    <div class="card mb-4" key={card.id}>
                        <img class="card-img-top" src={card.image} alt={card.name}/>
                        <div class="card-body">
                            <h5 class="card-title">{card.name}</h5>
                            <p class="card-text">Themes: {card.meaning}</p>
                            <p class="card-text"><small class="text-muted">Reversed Themes: {card.reversal}</small></p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Sharman-Caselli Tarot Deck</small>
                        </div>
                    </div>


    */