
import React from 'react';
import Form from './Form';
import CardList from './CardList';

class App extends React.Component {
    state = {
        cards: [
            { name: "Tim Berners-Lee",
            avatar_url: "https://avatars3.githubusercontent.com/u/1254848?v=4",
            company: "MIT"},
        ]
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    };

    render () {
        return (
            <div>
                <Form onSubmit={this.addNewCard}/>
                <CardList cards={this.state.cards}/>
            </div>
        );
    }
}

export default App;