const mongoose = require('mongoose');
// const { required } = require('nodemon/lib/config');
const bcrypt = require('bcryptjs');
const res = require('express/lib/response');
const jwt = require('jsonwebtoken');

const studentSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    pass:{
        type:String,
        required:true
    },
    confirmpass:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

studentSchema.methods.generateToken = async function(){
    try {
        const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        // await this.save();
        return token;
    } catch (error) {
        res.send(error);
    }
}

studentSchema.pre("save", async function(next){
    if(this.isModified("pass")){
        this.pass = await bcrypt.hash(this.pass,10);
        this.confirmpass = await bcrypt.hash(this.pass,10);
    }
    next();
})

const Register = new mongoose.model("Register",studentSchema);
module.exports = Register;