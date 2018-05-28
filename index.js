/* eslint-env node */

// ----- Initialize Express -----

var express = require("express");
var app = express();




// ----- Configuration -----

var port = process.env.PORT || 3000;

var dbport = "mongodb://sparc:sparcpassword@ds119449.mlab.com:19449/sparc";

var routes = require("./routes.js");




// ----- Middleware -----

//Import the mongoose module
var mongoose = require("mongoose");

//Set up default mongoose connection
mongoose.connect(dbport);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// -----

var bodyParser = require('body-parser');

//To parse URL encoded data
app.use(bodyParser.urlencoded({
    extended: false
}));

//To parse json data
app.use(bodyParser.json());

// -----

app.set('view engine', 'pug');
app.set('views', './views');

// -----

var cors = require('cors');

app.use(cors());

// -----

app.use(express.static('www'));

// -----

app.use('/', routes);

// -----






// ----- Start listening -----

app.listen(port, function (err) {

    if (err) {
        throw err;
    }

    console.log("App listening on port " + port);

});
