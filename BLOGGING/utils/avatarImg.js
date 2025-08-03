const multer=require('multer')
const path=require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve('./public/avatars/'))
  },
  filename: function (req, file, cb) {
    const regex = /.\.(jpg|png|jpeg)$/i;
    if (regex.test(file.originalname)) {
      const uniqueSuff = Date.now() ;
      cb(null, uniqueSuff + "-" + file.originalname);
      req.body.uploaded=true
      req.body.filename= "/avatars/"+uniqueSuff + "-" + file.originalname
    } else {
        req.body.uploaded=false
    }
  }
})

const avatarupload = multer({ storage: storage })

module.exports=avatarupload