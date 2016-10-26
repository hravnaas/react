var React = require('react')

// This file holds our JSON array of turtles
// may need json loader for webpack

var NinjaList = React.createClass({
  render: function(){
    var ninjas = this.props.turtles.map(function(turtle, idx){
      return (
        <li key={idx}>
          <a href='#'>{turtle.name}</a>
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

var NinjaComponent = React.createClass({
    render: function (){
      console.log(this.props);
        return (
          <div>
            <h1>Greetings Ninja!</h1>
            <h2>Click on a ninja for more information</h2>
            <NinjaList turtles={this.props.data}/>
          </div>
        )
    }
});

module.exports = NinjaComponent;
