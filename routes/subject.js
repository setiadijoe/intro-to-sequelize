const express = require('express');
const router = express.Router();
const Models = require('../models')

router.get('/', (req, res)=>{
    Models.Subject.findAll()
    .then(rows=>{
        res.render('subject', {data:rows})
    })
    .catch(err=>{
        res.send(err)
    })
})

module.exports = router