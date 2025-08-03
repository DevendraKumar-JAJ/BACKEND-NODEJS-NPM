const User=require('../../model/blog.model')
const validUser=require('../../utils/validate')
const bcrypt=require('bcrypt')
async function handleRegister(req, res) {
  try {
    validUser(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const body = req.body;
    console.log(req.body.filename)
    await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      email: body.email,
      role: body.role,
      profileImage: req.body.filename,
    }).then((data) => {
      res.redirect('/user/signin');
    });
  } catch (err) {
    console.log(err.message);
    res.redirect('/user/signup');
  }
}

module.exports=handleRegister