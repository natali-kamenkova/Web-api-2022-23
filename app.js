const express = require('express');
const {auth} = require('./api/v1/midllewares/auth')
const app = express();
const morgan = require('morgan'); 
const Productrouter = require('./api/v1/routes/product');

app.use('/product',Productrouter)

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Natalia',
  password: 'Natalia1971',
  database: 'ecommdb'

})
connection.connect(function(err) {
  if(err){
    console.log('Error'+ err.message)
  }
  else {
    console.log('Server connected DataBase')
  }

})
global.db = connection;


app.use(morgan('dev')) // выводит в консоль все запросы на сервер

module.exports = app; 