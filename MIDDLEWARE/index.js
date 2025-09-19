const express = require('express')
const path=require('path')

const app = express()
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

app.listen(4000,()=>{
  console.log("http://localhost:4000/");
})

app.use((req,res,next)=>{
  console.log('1st Middleware')
  // res.send('Hiii')// For all path the result is same 
  next()
})

app.use((req,res,next)=>{
  console.log('2nd Middleware')
  next()
})
app.use((req,res,next)=>{
  console.log('3rd Middleware')
  next()
  console.log('After next()')//this print at the end 
  // res.send('hello')// Error 
})
app.use((req,res,next)=>{
  console.log('4th Middleware')
  return next()
  console.log('After next()')// Never run
})

// Utility middleware 
app.use((req,res,next)=>{
  req.time=new Date(Date.now())
  console.log(req.method, req.hostname, req.path,req.time)
  next()
})

// Middleware for defined path
app.use('/random',(req,res,next)=>{
  console.log('Middleware for random')
  next()
})
app.get('/',(req,res)=>{
  res.send('Hiii')
})

app.get('/random',(req,res)=>{
  res.send('Random')
})



// API access token 
app.use('/api',(req,res,next)=>{
  let {token}=req.query
  if(token==='giveaccess'){
    next()
  }
  else{
  res.send("Access Denied");
  }
})

app.get('/api',(req,res)=>{
  res.send('Access Grant')
})



// variabled middleware

const data=(req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    res.send("Data Access Denied");
  }
}

app.get("/data", data, (req, res) => {
  res.send("Data Access Grant");
});









// Middleware for undefined path request 
app.use((req,res)=>{
  // res.status(404).json({msg:"Page not found"}),
  res.render('404.ejs')
})