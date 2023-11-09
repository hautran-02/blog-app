const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const route = require("./routers");
const app = express();
const port = 3000;

app.use(morgan("combined"));

//static file
app.use(express.static(path.join(__dirname, "public")))

//template engine
app.engine("hbs", handlebars.engine({ defaultLayout: 'main', extname: "hbs", }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "resources/views"));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
