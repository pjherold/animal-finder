var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var animalController = require("./controllers/animalController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", animalController);

var server_port = process.env.PORT || 7777;
app.listen(server_port, function() {
	console.log("Started listening on port", server_port);
});

// Connect to mongodb database
mongoose.connect("mongodb://search:finder@ds153715.mlab.com:53715/animal-finder");
