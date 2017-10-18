// Dependencies //

var express = require("express");
var method = require("method-override");
var parser = require("body-parser");

var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(parser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(method('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = process.env.PORT || 3030;
app.listen(port);