// ----- Initialize Express -----

var express = require('express');
var app = express();




// ----- Configuration -----

var port = process.env.PORT || 3000;

var routes = require("./routes.js");




// ----- Middleware -----

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
