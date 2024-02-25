const User = require('../models/user-model.js')

const home = async(req, res)=>{
    try{
        res.status(200).send('Welcome to the Home Page')
    }
    catch(error){
        console.log(error)
    }
}
const register = async(req, res)=>{
    try{
        const {username, email, phone, password} = req.body;
        const isUser = await User.findOne({email});
        if(isUser){
            return res.status(400).json({msg: "User Already Exist"})
        }
        else{
            const userCreated = await User.create({username, email, phone, password})
            // generateToken method is defined in user-model.js and can be accessed here directly.
            res.status(201).json({msg : 'Registration Successful', token: await userCreated.generateToken(), userId: userCreated._id.toString(),})
        }
    }
    catch(error){
        res.status(500).json("internal Server Error")
    }
}
module.exports = {home, register};