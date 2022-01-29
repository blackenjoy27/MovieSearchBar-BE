const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movie");



var app = express();
mongoose
  .connect(
    "mongodb+srv://kyleli:kyleli@cluster0.ii4e3.mongodb.net/movies?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log(`connected to database: ${res}`);
  })
  .catch((err) => {
    console.log(`failed to connect to the database: ${err}`);
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/movies", movieRoutes);
module.exports = app;
