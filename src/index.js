const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");
var methodOverride = require("method-override");
const app = express();
const port = 8080;

const route = require("./routes");
const db = require("./config/db");

//add req.body
app.use(
  express.urlencoded({
    extended: true,
  })
);

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// handle folder public
app.use(express.static(path.join(__dirname, "public")));
// helpers
app.engine(
  ".hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
// set view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
// use cookies
app.use(cookieParser());
route(app);
db.connect();

app.listen(port, () => {
  console.log("app listening on :", port);
});
