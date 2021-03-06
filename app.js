const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(
  session({
    secret: "alpinweb",
    key: "sessionkey",
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 100 * 60 * 60 * 1000
    },
    saveUninitialized: false,
    resave: false
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
});

const server = app.listen(process.env.PORT || 3000, function() {
  console.log("Сервер запущен на порте: " + server.address().port);
});