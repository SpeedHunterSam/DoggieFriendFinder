const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// 

//const routes = require("./controllers/catsController.js");

//require("./routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);

//app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
