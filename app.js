var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
//recognize the incoming request object as a jason object.
app.use(express.json());
//is a method inbuilt in express to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;
