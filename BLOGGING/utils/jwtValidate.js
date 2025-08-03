const jw=require('jsonwebtoken')
 async function jwtValidate(cookie){
    const data= jw.verify(cookie.token,process.env.JWT_KEY)
    return data
 }

 module.exports=jwtValidate