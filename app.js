var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors")
var indexRouter = require('./routes/index');
const postRouter = require("./routes/post")
// const authorRouter = require("./routes/author")
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;

db.once("open", function () {
    console.log("MongoDB database connection established successfully!");
});

var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/author', authorRouter);
app.use('/post', postRouter);





module.exports = app;
