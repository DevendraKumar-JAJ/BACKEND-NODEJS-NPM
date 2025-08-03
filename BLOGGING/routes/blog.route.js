const express = require("express");
const avatarupload=require('../utils/avatarImg.js')
const handleGet = require("../controllers/user/handleGet.js");
const handleLoginForm=require('../controllers/user/handelLooginForm.js')
const handleRegister= require('../controllers/user/handleSignUp.js')
const {
  handleSignUp,
  handleLogin,
} = require("../controllers/blog.controller.js");
const handleSignOut = require("../controllers/user/handleSignOut.js");

const router = express.Router();

router.route("/").get(handleGet);
router.route("/signup").get(handleSignUp).post(avatarupload.single('profileImage'),handleRegister);
router.route("/signin").get(handleLogin).post(handleLoginForm);
router.route('/signout').get(handleSignOut)
module.exports = {
  router,
};
