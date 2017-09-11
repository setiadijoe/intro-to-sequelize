const express = require('express');
const router = express.Router();
const Models = require('../models')

router.get('/', (req, res)=>{
    Models.Student.findAll()
    .then(row=>{
        res.render('student', {data:row, pageTitle: 'Student Data' ,head:'Student Data'})
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/add', (req, res)=>{
   res.render('addstudent')
})

router.post('/add', (req,res) => {
    Models.Student.create({
        first_name:req.body.first_name, 
        last_name:req.body.last_name, 
        email:req.body.email
    })
    .then(row=>{
        res.redirect('/student')
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/edit/:id', (req, res)=> {
    Models.Student.findAll({
        where : {
            id : req.params.id
        }
    })
    .then(rows =>{
        res.render('editstudent', {data:rows[0]})
    }) 
    .catch(err =>{
        res.send(err)
    })
})

router.post('/edit/:id', (req, res)=>{
    Models.Student.update({
        first_name:`${req.body.first_name}`, 
        last_name:`${req.body.last_name}`, 
        email:`${req.body.email}`
    },{
        where:{
            id : req.params.id
        }
    })
    .then((r)=>{
        res.redirect('/student')
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/delete/:id', (req, res)=>{
    Models.Student.destroy({
        where:{
            id: req.params.id
        }
    })

    .then(()=>{
        res.redirect('/student')
    })
    .catch(err=>{
        res.send(err)
    })
})
module.exports = router