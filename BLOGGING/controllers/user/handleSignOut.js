module.exports = function handleSignOut(req, res) {
  res.clearCookie('token').redirect('/user');
};
