const express = require('express')
require('dotenv').config()
const fragrance = require('./models/fragrance')
const app = express()
const port = process.env.PORT || 3003

//my routes
app.get('/', (req, res)=>{
    res.send('Welcome to the You Smell Me!')
})

app.get('/fragrance', (req,res) =>{
    res.send(fragrance)
})

//port 
app.listen(port, () => {
    console.log("I am listening on port", port);
})