import React from 'react';
import ReactDOM from 'react-dom';
//import NinjaComponent from './App';
var ReactRouter = require('react-router');
var NinjaComponent = require('./App');
import './index.css';

//var data = require('./data.json');
var data = [
  {
    "id" : 1,
    "name": "Donatello",
    "description": "The scientist, inventor, engineer, and technological genius, Donatello wears a purple mask and wields a bo staff."
  },
  {
    "id" : 2,
    "name": "Leonardo",
    "description": "The tactical, courageous leader and devoted student of his sensei, Leonardo wears a blue mask and wields two katana."
  },
  {
    "id" : 3,
    "name": "Michelangelo",
    "description": "The most stereotypical teenager of the team, Michelangelo is a free-spirited, relaxed, and often goofy jokester and known for his love of pizza. Michelangelo wears an orange mask and wields a pair of nunchucks."
  },
  {
    "id" : 4,
    "name": "Raphael",
    "description": "The team's bad boy, Raphael wears a dark red mask and wields a pair of sai. He is physically very strong, has an aggressive nature, and seldom hesitates to throw the first punch."
  }
];

var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory;

var App = React.createClass(
{
  render: function()
  {
    //console.log(this.props.data);

    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ NinjaComponent } data={ this.props.data }/>
      </Router>
    )
  }
});

ReactDOM.render(<App data={data}/>, document.getElementById('root'))

//ReactDOM.render(<NinjaComponent data={data}/>, document.getElementById('root'));
