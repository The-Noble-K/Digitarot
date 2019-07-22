import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardDeck } from 'react-bootstrap';

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
            <CardDeck>
                {this.state.cards.map(card => (
                    <Card>
                        <Card.Img variant="top" src={card.image} alt={card.name} />
                        <Card.Body>
                            <Card.Title>{card.name}</Card.Title>
                            <Card.Text>
                                Themes: {card.meaning}
                                Reverse Themes: {card.reversal}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Sharman-Caselli Deck</small>
                        </Card.Footer>
                    </Card>
                ))}
            </CardDeck>
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