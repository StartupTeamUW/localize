<<<<<<< HEAD
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");
=======
var express = require('express');

var app = express();

var PORT = process.env.PORT || 8080;
>>>>>>> 22bc862fc2b1ac8f097330149de266ccd7d0023d

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

<<<<<<< HEAD
// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/author-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on http://localhost: " + PORT);
  });
});
=======
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
>>>>>>> 22bc862fc2b1ac8f097330149de266ccd7d0023d
