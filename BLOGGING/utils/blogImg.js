const multer=require('multer')
const path=require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve('./public/uploads/'))
  },
  filename: function (req, file, cb) {
    const uniqueSuff = Date.now() ;
    const regex = /.\.(jpg|png|jpeg)$/i;
    if (regex.test(file.originalname)) {
      cb(null, uniqueSuff + "-" + file.originalname);
      req.body.uploaded=true
      req.body.filename="/uploads/"+uniqueSuff + "-" + file.originalname
    } else {
        req.body.uploaded=false
        cb(null,`unuploaded-${uniqueSuff}-${file.originalname}`)
    }
  }
})

const upload = multer({ storage: storage })

module.exports=upload