const mongoose = require('mongoose');

//Modelo de usuario
const itemSchema = new mongoose.Schema({
    name:String,
    price:Number,
    stock:Number
},{timestamps:true});

const Item = mongoose.model('Item',itemSchema);


module.exports = {Item}
