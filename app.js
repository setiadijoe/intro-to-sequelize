const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const pg = require('pg');
const Sequelize = require('sequelize')
const index = require('./routes/index.js')
const teacher = require('./routes/teacher.js')
const subject = require('./routes/subject.js')
const student = require('./routes/student.js')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json())
app.use('/',index)
app.use('/teacher',teacher)
app.use('/subject',subject)
app.use('/student',student)

app.use(session({
  secret: 'clear',
  cookie: {}
}))

app.listen(3000,()=>{
    console.log(`Hello I'm on 3000`);
  })