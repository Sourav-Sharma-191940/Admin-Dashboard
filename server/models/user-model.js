const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
   
    isAdmin:{
        type: Boolean,
        default: false
    }
})

//hashing the password before saving
UserSchema.pre('save', async function(next){
    const user = this;
    if(!(user.isModified('password'))){
        next();
    }
    try{
        const salt = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(user.password, salt)
        user.password = hash_password;
    }
    catch(err){
        next(err)
    }

})
//we can create methods here and it can be accessed by controller.(creating JWT token)
UserSchema.methods.generateToken = async function(){
    try{
        //generate token
        jwt.sign({
            user_id: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        }, process.env.JWT, {expiresIn:'1h'})

    }
    catch(error){
        console.error(error);
    }
}

const User = new mongoose.model('User', UserSchema)
module.exports = User;