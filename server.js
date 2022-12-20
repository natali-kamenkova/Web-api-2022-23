require('dotenv').config();
const http=require('http');
const app = require('./app');
const PORT = 3000;
//const port=process.env.DORT ;
const server = http.createServer(app);
server.listen(PORT, () => {console.log('server started')})