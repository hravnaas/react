
// Import requirements.
//var mongoose = require("mongoose");
// var friends = require("../controllers/friends.js");
// var users = require("../controllers/users.js");


// Handle incoming route requests.
module.exports = function(app)
{
  ////////// Login & Registration - start //////////

  app.get('/lotsofdata/', function(req, res)
  {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.json({ data : "lots of it" });
  });
}
