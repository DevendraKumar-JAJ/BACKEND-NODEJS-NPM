function checkParams(req, res, next) {
  console.log("Middleeware");
  next();
}

module.exports = {
  checkParams,
};
