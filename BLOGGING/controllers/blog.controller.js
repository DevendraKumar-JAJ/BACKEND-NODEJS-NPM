function handleSignUp(req, res) {
  res.render("signup.ejs");
}

function handleLogin(req, res) {
  res.render("signin.ejs");
}


module.exports = {
  handleSignUp,
  handleLogin,
};
