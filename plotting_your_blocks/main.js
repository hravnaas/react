var React = require('react');
var ReactDOM = require('react-dom');

var GrayBox = React.createClass({
  render: function() {
    return (
      <div style={{border: '5px solid lightgray', width : "800px", height : "800px"}}>
        {this.props.children}
      </div>
    )
  }
});

var GreenBox = React.createClass({
  render: function() {
    return (
      <div style={{border: '5px solid green', width : "790px", height : "200px"}}></div>
    )
  }
});

var BlueBox = React.createClass({
  render: function() {
    return (
      <div style={{border: '5px solid blue', width : "200px", height : "300px"}}></div>
    )
  }
});

var RedBox = React.createClass({
  render: function() {
    return (
      <div style={{border: '5px solid red', width : "490px", height : "400px"}}></div>
    )
  }
});

var App = React.createClass({
  render: function(){
    return (
      <GrayBox>
        <GreenBox>
          <RedBox/>
        </GreenBox>
        <BlueBox/>
      </GrayBox>
    )
  }
});
console.log(document.getElementById('app'));
ReactDOM.render(<App />, document.getElementById('app'));
