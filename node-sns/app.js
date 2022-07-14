var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');

var app = express();

/*
- api 이므로 사용 안함
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
*/

app.use(logger('dev'));
app.use(express.json());

// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// static(이미지) 파일 전송할 때 사용, ./public 에 저장
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); // root URL 설정
app.use('/users', usersRouter); // /users 경로일 경우 users router에서 처리
app.use('/api/v1/articles', articlesRouter); // /users 경로일 경우 users router에서 처리

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

module.exports = app;
