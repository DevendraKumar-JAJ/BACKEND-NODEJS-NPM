import user from '../models/user.model.js'
import { validateName,validateEmail,validatePassword} from '../validation/user.validation.js'
import {genToken_setCookie} from '../utils/genToken-setCookie.js'
import bcryptjs from 'bcryptjs'
import { sendVerificationEmail } from '../mailtrap/emails.js'
export const handleSignup =async (req, res) => {
  let message = null;
  let statusCode = null;

  try {
    const { email, password, name } = req.body;
    if (!email || !name || !password) {
      message = "Required all fields (name, email, password)";
      statusCode = 400;
    } else if (!validateName(name)) {
      message = "Invalid name";
      statusCode = 400;
    } else if (!validateEmail(email)) {
      message = "Invalid email";
      statusCode = 400;
    } else if (!validatePassword(password)) {
      message = "Invalid password";
      statusCode = 400;
    } else {
      const userAlreadyExists=await user.findOne({email})
      if(userAlreadyExists){
        message='user allready exists'
        statusCode=409
      }
      else{
        const hashedpass = await bcryptjs.hash(password, 10);
        const varificationCode = Math.floor(
          1000 + Math.random() * 9000
        ).toString();


        const newUser = new user({
          email,
          password: hashedpass,
          name,
          verificationToken: varificationCode,
          verificationTokenExpiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
        });
        const User=await newUser.save()
        genToken_setCookie(res,User._id)

        sendVerificationEmail(varificationCode)
        message={
          ...User._doc,
          password:undefined
        }
        statusCode=201

      }
    }
  } catch (err) {
    statusCode = 500;
    message = err.message;
  } finally {
    res.status(statusCode).send(message);
  }
};

export const handleLogin=(req,res)=>{
  res.send('Hi login ')
}
export const handleLogout=(req,res)=>{
  res.send('Hi logout')
}
