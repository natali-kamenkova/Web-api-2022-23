const bcrypt = require('bcrypt');
const pass = '123';
const saltRound = 10;
bcrypt.hash(pass,saltRound,(err,hashPass)=>{
  if(err)
  console.log(err.message);
  else
  console.log(hashPass);
})