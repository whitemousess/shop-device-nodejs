const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const port = 8080;

const route = require("./routes");
const db = require("./config/db");



app.use(express.static(path.join(__dirname, "public")));
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "views"));

route(app);
db.connect();

app.listen(port,() => {
    console.log("app listening on :",port);
});