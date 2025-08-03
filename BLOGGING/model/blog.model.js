const { default: mongoose } = require('mongoose')
const moongose=require('mongoose')

const userSchema= new moongose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profileImage:{
        type:String,
        default:"/images/img.png"
    },
    role:{
        type:String,
        enum:["USER","ADMIN"],
        default:'USER'
    }
},{timestamps:true})

const User=mongoose.model('user',userSchema)
module.exports =User