function bloogMiddleWare(req,res,next){
    if(req.cookies?.token){
        console.log('cookies')
        next()
    }else{
        res.redirect('/user')
    }
}

module.exports=bloogMiddleWare