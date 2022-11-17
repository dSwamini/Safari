const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required: true,
        select: false
    },
    cpassword: {
        type:String,
        required: true,
        select: false
    },
    tokens: [
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})



// hashing pswrd
userSchema.pre('save', async function(next) {
    //console.log("hash check");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});


// token generate 

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchema);
module.exports = User;
