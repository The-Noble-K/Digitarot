import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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
            <div>
                {this.state.cards.map(card => (
                    <div class='ui centered cards' idName='cardGroup'>
                        <div class="ui card">
                            <div class="image">
                                <img src={card.image} alt={card.name} />
                            </div>
                            <div class="content">
                                <div class="header">
                                    <h1>{card.name}</h1>
                                </div>
                            <div class="description">
                                <p>{card.meaning}</p>
                                <p>{card.reversal}</p>
                            </div>
                            </div>
                            <div class="extra content">
                                <a>
                                <i aria-hidden="true" class="link icon"></i>
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
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


    */