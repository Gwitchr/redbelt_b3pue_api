const mongoose = require('mongoose');

//Modelo de usuario
const ticketSchema = new mongoose.Schema({
    subtotal:Number,
    taxes:Number,
    total:{
      type:Number
    },
    article:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Item'
    }
},{timestamps:true});

const Ticket = mongoose.model('Ticket', ticketSchema);


module.exports = {Ticket}
