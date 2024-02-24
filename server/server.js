require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./router/auth-router')
const ConnectDb = require('./utils/db')

app.use(express.json())
app.use('/api/auth/', router)

const PORT = process.env.PORT;

ConnectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on Port ${PORT}`)
    })
})
