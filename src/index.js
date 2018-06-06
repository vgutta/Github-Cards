import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card';
//import registerServiceWorker from './registerServiceWorker';

const Card = (props) => {
    return (
        <div>
        <img src="http://placehold.it/75" />
        <div className="info">
          <div>Name: </div>
          <div>Company: </div>
        </div> 
      </div>
    );
}

ReactDOM.render(<Card />, document.getElementById('root'));
//registerServiceWorker();
