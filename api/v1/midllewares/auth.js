let ipUsers = ['12:25::36', '352::256', 'aa:125::36','256:236','258852'];

module.exports.auth = (req, res, next) => {
  ipUsers.forEach((ip)=> {
    if (req.socket.remoteAddress === ip) {
      next();
    }
    else {
      res.status(401).send({message: 'authorization required'})
    }
  })
};