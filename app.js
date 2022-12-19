const express = require('express');
const {auth} = require('./api/v1/midllewares/auth')
const app = express();
const morgan = require('morgan'); 
const Productrouter = require('./api/v1/routes/product');
app.use('/product',auth ,Productrouter)
app.use(morgan('dev')) // выводит в консоль все запросы на сервер

module.exports = app; 