require('dotenv').config();
const http=require('http');
const app = require('./app');
//const PORT = 3000;
const port= process.env.PORT;
const server = http.createServer(app);
server.listen(port, ()=>{console.log("server started")})