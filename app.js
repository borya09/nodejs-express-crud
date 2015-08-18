/*
 * Main App file App.js
 * @author Kevin Blanco
 */


// Dependencies requirements, Express 4
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require("mongoose");
var app            = express();

app.use(express.static(__dirname + '/public')); 	// set the static files location
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser.json()); 				// pull information from requests
app.use(methodOverride()); 					// simulate DELETE and PUT

//Add the routes
routes = require('./routes/tshirt')(app);


// MongoDB configuration
mongoose.connect('mongodb://localhost/tshirt', function(err, res) {
  if(err) {
    console.log('error connecting to MongoDB Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});

app.listen(8080);
console.log('server running on port 8080');

