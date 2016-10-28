import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route, hashHistory, IndexRoute } from 'react-router';
import './index.css';

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

var NinjaList = React.createClass(
{
  render: function()
  {
    var ninjas = this.props.turtles.map(function(turtle, idx){
      return (
        <li key={idx}>
          <Link to={'ninjas/' + turtle.id}>{turtle.name}</Link>
        </li>
      )
    })
    return (
      <ul>
        {ninjas}
      </ul>
    )
  }
});

var NinjaComponent = React.createClass(
{
    render: function ()
    {
        return (
          <div>
            <h1>Greetings Ninja!</h1>
            <h2>Click on a ninja for more information</h2>
            <NinjaList turtles={this.props.route.data}/>
          </div>
        )
    }
});

var NinjaDescription = React.createClass(
{
  render: function()
  {
    // Here's the route parameter (notice it's a string)
    var routeID = this.props.params.id;
    // Let's pass it into the method our Route parent provided and assign the result to a variable
    var ninja = this.props.route.fetchTurtle(parseInt(routeID));

    return(
      <div>
        <h1>{ninja.name}</h1>
        <p>{ninja.description}</p>
        <Link to='/ninjas'>Back</Link>
      </div>
    )
  }
});

var App = React.createClass(
{
  fetchTurtle: function(id)
  {
    // Filter the array of turtles by the id and return the first element of the resulting array
    return this.props.data.filter(function(ninja)
    {
      return (ninja.id === id)
    })[0]
  },
  render: function()
  {
    return (
      <Router history={hashHistory}>
        <Route path='/ninjas' >
          <IndexRoute component={NinjaComponent} data={this.props.data}/>
          <Route path=':id' component={NinjaDescription} fetchTurtle={this.fetchTurtle}/>
        </Route>
      </Router>
    )
  }
});

ReactDOM.render(<App data={data}/>, document.getElementById('root'))
