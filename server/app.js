const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cookieSession = require('cookie-session')


const cors = require("cors")
const mongoose = require("mongoose");


mongoose
  .connect("mongodb://localhost:27017/alma")
  .then(() => {
    console.log("connected");
  })
  .catch("not connected");


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const menuRouter = require('./routes/menu');
const tokenRouter = require('./routes/getToken');
const registerRouter = require('./routes/register');
const mailveriayRouter = require('./routes/mailveriay');
const profileRouter = require('./routes/profile');
const googleRouter = require('./routes/google');







const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "jsx");
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menu', menuRouter);
app.use('/getToken', tokenRouter);
app.use('/register', registerRouter);
app.use('/profile', profileRouter);
app.use('/google', googleRouter);
app.use('/mailveriay', mailveriayRouter);



app.use(cookieSession({
  name: 'tuto-session',
  keys: ['key1', 'key2']
}))





app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });







module.exports = app;
