const jw = require("jsonwebtoken");
const bcrypt=require('bcrypt')
const User = require("../../model/blog.model");
async function handleLoginForm(req, res) {
  try {
    const userIs = await User.findOne({ email: req.body.email });
    console.log(userIs.profileImage)
    const isAllowed = await bcrypt.compare(req.body.password, userIs.password);
    if (!isAllowed) throw new Error("Credential failed");
    const token = jw.sign(
      { email: userIs.email, _id: userIs._id ,img:userIs.profileImage,role:userIs.role },
      process.env.JWT_KEY,
      { expiresIn: "2h" }
    );
    const oneMinLater = new Date(Date.now() + 60 * 60 * 1000);
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        expires: oneMinLater,
      })
      .redirect("/user");
  } catch (Err) {
    console.log(Err.message)
    res.redirect("/user/signin");
  }
}

module.exports = handleLoginForm;
