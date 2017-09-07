const express = require('express');
const router = express.Router();
const Models = require('../models')

router.get('/', (req, res)=>{
    Models.Subject.findAll()
    .then(row=>{
        res.render('subject', {data:row})
    })
    .catch(err=>{
        res.send(err)
    })
})
module.exports = router