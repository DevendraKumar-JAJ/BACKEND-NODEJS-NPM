const fs = require("fs");
const Path=require('path')

function logging(fileName) {
  const file=Path.join('logs',fileName)
  return (req,res,next)=>{
    fs.appendFile(
      file,
      `\n${Date.now()}  : ${req.ip} : ${req.path} : ${req.method} \n`,
      (err, data) => {
        next();
      } 
    );
  }
}

module.exports = logging;
