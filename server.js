//reuired modules   == Deisel ------------ ready to be burnt
var express = require('express')
   ,routes  = require('./routes');

var socket = require('socket.io');
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); 



var app = express();
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

var port = process.env.PORT || 8080;
var http = require('http').Server(app);


//static files
app.use(express.static('public'));

app.get('*',routes.index );

// Fire it up : start server  ::::>================>
var server = http.listen(port, function(){
  console.log('Express server listening on port ' + port);
});

// Initialize socket.io
var io = socket.listen(server);
