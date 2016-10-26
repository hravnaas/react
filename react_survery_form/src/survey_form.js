var React = require("react");

// Create an app component that will either render the form or results, according to information in its state

var SurveyFormApp = React.createClass(
{
  getInitialState : function(){
    return {
      results: null
    }
  },
  handleFormSubmit: function(formData){
  // This function will be passed down to our FormComponent and expect to be given data that will be
  // attached to the App state and passes as props to our ResultsComponent

    this.setState({
      results: formData
    });
  },
  render: function(){
    return (this.state.results === null) ? <Survey onFormSubmit={ this.handleFormSubmit }/> :
        <ResultsComponent results={ this.state.results }/>
  }
});

var Survey = React.createClass({
  getInitialState: function(){
    return {
      name: null,
      course: null,
      rating: null,
      comment: null
    }
  },
  handleInputChange: function(key, e){
    // Instead of doing a separate handler for every input, just use one function and pass the relevant key by binding the handler below. Make sure you understand the use of .bind().
    var stateObj = this.state;
    stateObj[key] = e.target.value
    this.setState(stateObj);
  },
  render: function(){
    return (
      <form onSubmit={ this.handleFormSubmit }>
        <label>Name: </label>
        <input type='text' onChange={ this.handleInputChange.bind(this, 'name') } /><br/>
        <label>Course:</label>
        <select onChange={ this.handleInputChange.bind(this,'course')} defaultValue='choose'>
          <option disabled value='choose' />
          <option value='React' >React</option>
          <option value='Angular' >Angular</option>
          <option value='Backbone' >Backbone</option>
        </select><br/>
        <label>Rating: </label>
        <input type='number' onChange={ this.handleInputChange.bind(this,'rating') } /> <br/>
        <label>Comment:</label>
        <textarea onChange={ this.handleInputChange.bind(this,'comment')}>
        </textarea><br/>
        <input type='submit' value='Submit'/>
      </form>
    )
  }
});

var ResultsComponent = React.createClass({
  render: function(){
    var results = this.props.results
    return (
      <div>
        <h1>Results</h1>
        <p>Name: {results.name}</p>
        <p>Course: {results.course}</p>
        <p>Rating: {results.rating}</p>
        <p>Comment: {results.comment}</p>
      </div>
    )
  }
})

module.exports = SurveyFormApp;
