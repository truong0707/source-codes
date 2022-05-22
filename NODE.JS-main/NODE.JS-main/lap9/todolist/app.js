var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todoListRouter = require('./routes/todolist.routes');
let mongoose = require('mongoose');


//
mongoose.connect('mongodb+srv://Truongphanone12:truong19062001@cluster0.ijdmi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true,});
var db = mongoose.connection;
if(!db) {
  console.log("ko kết nối được database");
} else {
  console.log("Đã kết nối database");
}


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todolist', todoListRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8080,function(){
  console.log("server is running on port 8000");
});

module.exports = app;
