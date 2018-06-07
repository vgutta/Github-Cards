import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    state = { userName: ''}
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Event: form submit", this.state.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(resp => {
            this.props.onSubmit(resp.data);
            this.setState({ userName: ''});
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} 
                className="pure-form"
                style={{'margin-left': '400px', 'margin-right': '100px', 'margin-top': "1.25em", 'margin-bottom': '1.25em'}}>
                <input type="text" 
                className="pure-input-rounded"
                style={{'margin-right': '1em', width: '20em'}}
                value={this.state.userName}
                onChange={(event) => this.setState({ userName: event.target.value})}
                placeholder="GitHub Username" required/>
                <button type="submit" className="pure-button">Add Card</button>
            </form>
        );
    }
}

export default Form;