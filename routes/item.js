const express = require('express');
const router = express.Router();
const {Item} = require('../models')

/* GET users listing. */
router.post('/', function(req, res, next) {
    const {body} = req
    const newItem = new Item(body)
    newItem.save((error,item)=>{
      if(error)res.status(400).json({error})
      res.status(201).json({item})
    })
});

module.exports = router;
