const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    lastName:{
        type:String
    },
    age:{
        type: Number,
        min: 14,
        max: 70,
        required: true,
    },
    gender:{
        type: String,
        // enum: ["male","female","others"]
        validate(value){
            if(!["male","female","others"].includes(value))
                throw new Error("Invalid Gender")
        }
    },
    emailId:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase:true,
        immutable: true,
    },
    password:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        default: "This is the default photo"
    }
}, { timestamps: true })


const User = mongoose.model("user",userSchema);

module.exports = User;