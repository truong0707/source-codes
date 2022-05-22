var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.routes');
var todoListRouter = require('./routes/todolist.routes');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/// kết nối mongoDB bằng mongose
const connectDB = async () => {
  try {
      await mongoose.connect(`mongodb+srv://truongphanone12:truong19062001@cluster0.bwqca.mongodb.net/?retryWrites=true&w=majority`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log("Mongoose connected")
  } catch (error) {
      console.error(error.message);
      process.exit(1); // mã lỗi
  }
}
connectDB();

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
  console.log("server dang chay tren port 8080");
});

module.exports = app;
