const authroute = require("./routes/authroute");
const projectroute = require("./routes/projectroute");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(authroute);
app.use(projectroute);
app.use(cors());

module.exports = app;
