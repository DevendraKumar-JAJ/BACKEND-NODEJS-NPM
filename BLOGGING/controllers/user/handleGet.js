const jw = require('jsonwebtoken')
const User=require('../../model/blog.model')
async function handleGet(req, res) {
   if (!req.cookies?.token) {
      return res.render("home.ejs", {
         user: {firstName:"User"},
         logged: false,
         type: "signin",
         value:"Sign In"
      });
   }
   const data = jw.verify(req.cookies.token, process.env.JWT_KEY);
   const loggedUser = await User.findOne({email:data.email})
   console.log(loggedUser.profileImage)
  res.render("home.ejs", { user: loggedUser, logged: true, type: "SignOut",value:"Sign Out"  });
}

module.exports=handleGet