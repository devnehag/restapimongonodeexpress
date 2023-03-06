const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email error"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");

            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },

    address:{
        type:String,
        required:true
    }

})

//Create a new collection with help of this model
const Employee = new mongoose.model('Employee',employeeSchema);

module.exports = Employee;