require('dotenv').config();
const jwt = require('jsonwebtoken')
const Key = process.env.PRIMERY_KEY;
const token = jwt.sign({Uid:88},Key,{expiresIn: '1h'});
console.log(token);
try {
  const pelet = jwt.verify(token, Key);
  console.log(pelet.Uid)
} catch (error) {
  console.log(error.mesage)
}
