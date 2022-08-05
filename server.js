const express = require('express')
require('dotenv').config()
const fragrance = require('./models/fragrance.js')
const app = express()
const port = process.env.PORT || 3003

//setting up our views
app.set('view engine', 'jsx'); //setting up our HTML template
app.engine('jsx', require('express-react-views').createEngine()); //initializing our engine 

//middleware
app.use(express.urlencoded({extended:false}));

//my routes
app.get('/', (req, res)=>{
    res.render('Home')
})

app.get('/fragrance', (req,res) =>{
    res.render('Index', {fragrance})
})

//show route
app.get('/fragrance/:indexOfFrangranceArray', (req, res) => {
    res.render('Show', {
        fragrance: fragrance[req.params.indexOfFrangranceArray]
    });
})

//port 
app.listen(port, () => {
    console.log("I am listening on port", port);
})