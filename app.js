//  Author: Mohammad Jihad Hossain
//  Create Date: 24/03/2021
//  Modify Date: 24/03/2021
//  Description: Main entry point Application for Famous-Auto


const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const expessFormData = require('express-form-data');
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer();
const cors = require('cors');
const mysql = require('mysql');
/*const db = mysql.createConnection({
  host: "192.168.64.2",
  database: "famousautodb",
  username: "root",
  password: "",
});

db.connect((err) => {
  if(err){
    throw err;
  }
  console.log("Mysql Connected");
})*/


const api = require("./api");
const { Forbidden } = require("http-errors");

// Application
const app = express();
/*app.listen('3001', () => {
  console.log('server stated on 3001')
})*/
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));


//To read raw json input.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expessFormData.parse());

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('uploads'));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));




// To read data
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Expose-Headers", "Content-Length");
    res.header(
      "Access-Control-Allow-Headers",
      "Accept, Authorization, Content-Type, X-Requested-With, Range"
    );
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    } else {
      return next();
    }
  });

// Using all API
app.use(api);
// Headers For API Accessing
app.use(cors());

module.exports = app;
