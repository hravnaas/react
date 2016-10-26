var React = require('react');
var ReactDOM = require('react-dom');

var MainLayout = React.createClass({
  render: function() {
    return (
      <div style={{border: '2px dotted red'}}>
        <header>
          <h1>Page Logo</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>
        <div>
          {/*PUTTING this.props.children ALLOWS US TO KEEP THE MAIN LAYOUT FOR ALL CHILD COMPONENTS WITHOUT RE-WRITING CODE*/}
          {this.props.children}
        </div>
        <footer>
          Footer information.
        </footer>
      </div>
    )
  }
});

var HomePage = React.createClass({
  render: function(){
    return (
      <div style={{border: '2px dotted blue'}}>
        <h1>Home Page</h1>
        <p>HomePage is rendered as this.props.children inside MainLayout in App''s render method.</p>
      </div>
    )
  }
})

var App = React.createClass({
  render: function(){
    return (
      <MainLayout>
        <HomePage />
      </MainLayout>
    )
  }
});
console.log(document.getElementById('app'));
ReactDOM.render(<App />, document.getElementById('app'));
