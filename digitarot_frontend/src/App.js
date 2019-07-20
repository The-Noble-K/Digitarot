import React, {Component} from 'react';

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
                <div key={card.id}>
                    <h1>{card.name}</h1>
                    <img src={card.image} alt={card.name} />
                    <span>{card.meaning}</span>
                    <span>{card.reversal}</span>
                </div>
            ))}
        </div>
        );
    }
}

export default App;
