const express = require('express')
require('dotenv').config()
const fragrance = require('./models/fragrance.js')
const app = express()
const port = process.env.PORT || 3003

//middleware
app.use(express.urlencoded({extended:false}));

//setting up our views
app.set('view engine', 'jsx'); //setting up our HTML template
app.engine('jsx', require('express-react-views').createEngine()); //initializing our engine 

//my routes
app.get('/', (req, res)=>{
    res.send('Welcome to the You Smell Me!')
})

app.get('/fragrance', (req,res) =>{
    res.render('Index')
})

//port 
app.listen(port, () => {
    console.log("I am listening on port", port);
})