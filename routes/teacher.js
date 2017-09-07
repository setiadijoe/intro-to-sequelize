const express = require('express');
const router = express.Router();
const Models = require('../models')

router.get('/', (req, res)=>{
    Models.Teacher.findAll()
    .then(row=>{
        res.render('teacher', {data:row})
    })
    .catch(err=>{
        res.send(err)
    })
})
module.exports = router