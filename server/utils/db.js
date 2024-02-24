const mongoose =require('mongoose')
const URI  = process.env.MONGODB_URI


const ConnectDb = async()=>{
    try{
        await mongoose.connect(URI)
        console.log("Connected to database")
    }
    catch(error){
        console.error("Connection to DB failed")
        process.exit(0)
    }
}

module.exports = ConnectDb;