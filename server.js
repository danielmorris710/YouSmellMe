const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Fragrance = require('./models/fragrance')
const app = express()
const port = process.env.PORT || 3003
const methodOverride = require('method-override')
const fragranceData = require('./utilities/fragranceData')

//connect to mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

//setting up my views
app.set('view engine', 'jsx'); //setting up our HTML template
app.engine('jsx', require('express-react-views').createEngine()); //initializing our engine 

//middleware
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'))


//seed route
app.get('/fragrance/seed', async (req, res)=>{
    await  Fragrance.deleteMany({})
    await  Fragrance.create(fragranceData)
    res.redirect('/fragrance')
})

//my routes
app.get('/', (req, res)=>{
    res.render('Home')
})

app.get('/fragrance', (req,res) =>{
    Fragrance.find({}, (error, allFragrance)=>{
        res.render('Index', {
            fragrance: allFragrance
        })
    })
})

//new fragrance put this above your Show route
app.get('/fragrance/new', (req, res) => {
    res.render('New');
})

//create
app.post('/fragrance/', (req, res)=>{
    Fragrance.create(req.body, ()=>{
         res.redirect('/fragrance'); //send the user back to /fragrance
    })
})

//show route
app.get('/fragrance/:id', (req,res)=>{
    Fragrance.findById(req.params.id, (err, foundFragrance)=>{
     res.render('Show', {
         fragrance: foundFragrance
     })
    })
 })

//edit route
app.get('/fragrance/:id/edit', (req,res)=>{
    Fragrance.findById(req.params.id,(err, foundFragrance)=>{
        if(!err){
            res.render('Edit', {
                fragrance: foundFragrance
            })
        } else {
            res.send({
                message:err.message
            })
        }
    })
})

//update route
app.put('/fragrance/:id', (req, res) => {
    Fragrance.findByIdAndUpdate(req.params.id,(req.body), {
        new: true
    }, (error, fragrance) => {
        res.redirect(`/fragrance/${req.params.id}`)
    })    
})

//update route for buy button
app.put('/fragrance/:id/buy', (req, res) => {
    Fragrance.findByIdAndUpdate(req.params.id, {$inc: {stock: -1 } },
        (error, fragrance) => {
        res.redirect(`/fragrance/${req.params.id}`)
    })
})

//delete route
app.delete('/fragrance/:id', (req,res)=>{
    Fragrance.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/fragrance')
    })
})


//port 
app.listen(port, () => {
    console.log("I am listening on port", port);
})