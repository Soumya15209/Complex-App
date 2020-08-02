var express = require("express");
var app = express();

var router = require("./router");

app.use(express.urlencoded({ extended: false }));
app.use(express.json);

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", router);

app.listen(3000, () => {
    console.log("Server has started");
})