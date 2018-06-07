
import React from 'react';
import Form from './Form';
import CardList from './CardList';

class App extends React.Component {
    state = {
        cards: [
            { name: "Vineeth Gutta",
            avatar_url: "https://avatars1.githubusercontent.com/u/17258339?v=4",
            company: "@vipud "},
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