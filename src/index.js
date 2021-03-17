const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Passport = require("passport");

const app = express();
require("./controllers/passport")(Passport);
const server = require("http").createServer(app);

const routes = require("./routes");
const config = require("../config");

app.use(bodyParser.json());
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());

app.use(routes);
server.listen(config.app.port, () =>
  console.info(`Server listening on port ${config.app.port}!`)
);

module.exports = server;
