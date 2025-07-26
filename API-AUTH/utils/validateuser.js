
const validator = require("validator");

function validUser(data){
const mandatoryField = ["firstName","emailId","age","password"]

const IsAllowed = mandatoryField.every((k)=> Object.keys(data).includes(k));

        if(!IsAllowed)
            throw new Error("Fields Missing");

        if(!validator.isEmail(data.emailId))
            throw new Error("Invalid Email");

        if(!validator.isStrongPassword(data.password))
            throw new Error("Week Password");

        if(!(data.firstName.length>=3 && data.firstName.length<=20 && validator.isAlphanumeric(data.firstName)))
            throw new Error("Name should have atleast 3 char and atmost 20 char");
};

module.exports = validUser;