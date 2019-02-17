//next is called when the middleware is done
//  is unathorize or forbidden
module.exports = (req, res, next) => {
  //there is not a user
  if (!req.user) {
    //stops the process/request and 
    return res.status(401).send({ error: "You must log in" });
  }

  //continue to the actual request handler
  next();
};
