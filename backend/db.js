const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:HwchcPjxwULVlWjf@cluster0.xoaqmti.mongodb.net/PaytmApp")
const UserSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true,
        minLength:3,
        maxLength:30,
        trim : true /// trim means to remove extra space from beginning and end
    },
    firstName :{
        type : String,
        required : true,
        maxLength : 50,
        trim : true

    } ,
    lastName :{
        type : String,
        required : true,
        maxLength : 50,
        trim : true
    } ,
    password :{
        type : String,
        required : true,
        minLength : 6,
        trim : true
    } 
});

const accountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId, //Reference to user schema
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
});

const Account = mongoose.model('Account' ,accountSchema )
const User = mongoose.model('Users' , UserSchema );

module.exports = ({
    User,
    Account
})