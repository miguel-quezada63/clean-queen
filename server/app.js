const express = require("express");
const app = express();
const port = 3000 || process.env.port;
const path = require("path");
const routes = require("./routes");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes.appRoutes(app);
app.use(express.static(path.join(__dirname, "../public")));

app.listen(port);
