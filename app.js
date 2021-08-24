/*      DEFAULT API SKELETON 
    The developer = Mehmet Ali Yılgın
*/
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const app = express();

const indexRouter = require("./routes/index");

// Config
const config = require("./config");

// Middleware
const verifyToken = require("./middleware/verify-token");

app.use(cors());

app.set("api_secret_key", config.api_secret_key);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));


app.use("/", indexRouter);
app.use("/api", verifyToken);

// catch 404 and forward to error handler

app.use((req, res, next) => {
  console.log(req, res, next);
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
