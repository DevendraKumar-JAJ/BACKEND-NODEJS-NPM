const express=require('express')
const app=express()
const ExpressError=require('./ExpressError.js')
const aysncWrap=require('./wrapAsync.js')
app.listen(4000,()=>{
  console.log('4000 Port')
})
app.use(express.urlencoded({extended: true
}))

app.get('/',(req,res)=>{
  avcd=abcde
})




// using this method we can write middleware at last 
const logStuff = [logOriginalUrl, logMethod];
// app.get("/user/:id", logStuff, (req, res,next) => {
//   try{
//     abcd=acbsd
//     res.send("User Info");
//   }catch(err){
//     next(err)
//   }
// });


//we can replace with 

// here aysncWrap() is a userdefined function 
app.get('/user/:id',logStuff,aysncWrap((req,res,next)=>{
  abcd=abcdef
  res.send('User Info')
}))

app.use((req,res)=>{
  console.log(req.path)
  res.send('Path not found')
})


function logOriginalUrl(req, res, next) {
  console.log("Request URL:", req.originalUrl);
  next();
}

function logMethod(req, res, next) {
  console.log("Request Type:", req.method); 
  next();
}


app.use((err, req, res, next) => {
  console.log("First Error Handling middleware");
  next(err); //calling next Error Handling middleware
});

app.use((err, req, res, next) => {
  console.log("Second Error Handling middleware");
  let {status=500,message='Some error occurred'}=err

  throw new ExpressError(501, "avcd and abcde is not defiend");
  // res.status(status).send(message);
});

app.use((err,req,res,next)=>{
  console.log('Third Error handler')
  console.log(err.message)
  next(err)
})

app.use((err,req,res,next)=>{
  console.log('Fourth Error Handler')
res.send(err.message)
  
})