var React = require('react');

var NinjaGoldApp = React.createClass({
  // Keep track of the total number of golds
  // as well as all activities since app started.
  getInitialState : function(){
    return {
      numGolds : 0,
      activities : []
    }
  },
  handleFindGoldClick : function(event){
    // Determine how much gold to give the user.
    // Due to laziness, this is NOT currently randomized.
    var newGold = 0;

    switch (event.target.id.toLowerCase()) {
      case "farm":
        newGold = 10;
        break;
      case "cave":
        newGold = 5;
        break;
      case "house":
        newGold = 3;
        break;
      case "casino":
        newGold = 30;
        break;
      default:
        newGold = 0;
    }

    // Compute the new total number of golds.
    var totalGolds = this.state.numGolds + newGold;

    // Insert new actiivty FIRST in the array.
    var currentActivities = this.state.activities;
    currentActivities.unshift(<p>Earned { newGold } from the { event.target.id.toLowerCase() } </p>);

    // Update the two variables we are keep tracking of.
    this.setState({
      numGolds : totalGolds,
      activities : currentActivities
    });
  },
  render : function(){
    // Object used to store our places and description.
    var places =
    {
      Farm : "(earns 10-20 golds)",
      Cave : "(earns 5-10 golds)",
      House : "(earns 2-5 golds)",
      Casino : "(earns/takes 0-50 golds)"
    };

    var placeDivs = [];
    for(var key in places)
    {
      // Add the 4 divs for the 4 types of places/building that are supported.
      placeDivs.push(
        <div key={key} className="place">
          <h5>{key}</h5>
          <p>{places[key]}</p>
          <button id={key} onClick={ this.handleFindGoldClick }>Find Gold!</button>
        </div>);
    }
    return (
      // Build out the HTML for the app.
      <div>
        <div>
          <p>Your gold: { this.state.numGolds }</p>
          { placeDivs }
        </div>
        <div className="activities">
          { this.state.activities }
        </div>
      </div>
    )
  }
});

// Export the module (to index.js).
module.exports = NinjaGoldApp;
