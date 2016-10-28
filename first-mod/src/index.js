var React = require('react')
var ReactDOM = require('react-dom')
var ReactRouter = require('react-router');
var axios = require('axios');
var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory,
    IndexRoute = ReactRouter.IndexRoute


var CreateUser = React.createClass({
  handleFormSubmit: function(e){
    e.preventDefault()
    // This is another way to collect form information, rather than two-way binding via state
    var newUser = e.target.elements[0].value

    hashHistory.push({pathname: 'show', state: { newUser: newUser }})
  },
  render: function(){
    return (
      <form onSubmit={ this.handleFormSubmit }>
        Username: <input type='text' />
        <input type='submit' value='Create User'/>
      </form>
    )
  }
})

var ShowUser = React.createClass({
  render: function(){
    return (
      <div>
        New User: { this.props.location.state.newUser }
      </div>
    )
  }
})

var routes = (
  <Router history={hashHistory}>
    <Route path='/create' component={CreateUser} />
    <Route path='/show' component={ShowUser} />
  </Router>
)

var App = React.createClass({
  render: function(){
    return routes
  }
})

axios.get('/lotsofdata', {
  baseURL: "http://localhost:9000/"
})
  .then(function(response)
  {
    console.log(response);
    ReactDOM.render(<App/>, document.getElementById('root'))
  })
