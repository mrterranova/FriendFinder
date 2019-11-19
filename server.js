//dependencies imported
var express = require("express");

//initializing an express server
var app = express();

// create a port
var PORT = process.env.PORT || 7000;

// middleware for express to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});