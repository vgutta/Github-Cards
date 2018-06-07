import React from 'react';
import Card from './Card';

class CardList extends React.Component {

    render () {
        return (
            <div>
                {props.cards.map(card => <Card key={card.id} {...card}/>)}
            </div>
        );
    }

}

export default CardList;