var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var menuRouter = require("./routes/menu_items");
var chocoMoRouter = require("./routes/choc_of_month");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public"))); //not using public folder

app.use("/api", menuRouter);
app.use("/api/choc_of_month", chocoMoRouter);

module.exports = app;
