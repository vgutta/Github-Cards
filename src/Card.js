import React from 'react';

class Card extends React.Component {

    constructor (props) {
        
    }
    render () {
        return (
            <div>
                {props.cards.map(card => <Card key={card.id} {...card}/>)}
            </div>
        );
    }
    
}

export default Card;