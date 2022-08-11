const mongoose = require('mongoose') 

const fragranceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: String, required: true },
    stock: { type: String, required: true },
})

const Fragrance = mongoose.model('Fragrance', fragranceSchema)   

module.exports = Fragrance