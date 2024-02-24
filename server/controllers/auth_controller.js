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
            await User.create({username, email, phone, password})
            res.status(200).json({msg : "User registered successfully", data: req.body})
        }
    }
    catch(error){
        res.status(500).json("internal Server Error")
    }
}
module.exports = {home, register};