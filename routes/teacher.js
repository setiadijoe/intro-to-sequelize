const express = require('express');
const router = express.Router();
const Models = require('../models')

router.get('/', (req, res) => {
    Models.Teacher.findAll({ include: [{model: Models.Subject}], 
        order: [
            ['id', 'ASC']
        ] 
    })
    .then(data_teachers => {
        res.render('teacher', {data_teachers: data_teachers, pageTitle:'Teacher List', head:'Teacher List'})
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/add', (req, res) => {
    Models.Subject.findAll()
     .then(subjects => {
       res.render('addteacher', {pageTitle: 'Add Teacher', head:'Add Teacher', data_subjects: subjects})
     })
     .catch(err => {
       res.render('addteacher')
     })
  })

router.post('/add', (req, res) => {

    Models.Teacher.build({
        first_name: `${req.body.first_name}`,
        last_name : `${req.body.last_name}`,
        email : `${req.body.email}`,
        SubjectId : `${req.body.SubjectId}`,
        createdAt : new Date(),
        updatedAt : new Date()
    })
    .save()
    .then(students => {
        res.redirect('teacher')
    })
  })

router.get('/edit/:id', (req,res) => {
    Models.Teacher.findAll({
        where: {
            id: `${req.params.id}`
        }
    })
    .then(teacher => {
        Models.Subject.findAll()
        .then( subjects => {
            res.render('../views/editteacher', {head:'Teacher',teacher: teacher, data_subjects: subjects, pageTitle:'Edit Teacher'})
        })
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/edit/:id',(req, res) => {
    Models.Teacher.update({
        first_name: `${req.body.first_name}`,
        last_name: `${req.body.last_name}`,
        email: `${req.body.email}`.toLowerCase(),
        SubjectId: req.body.SubjectId,
        createdAt: new Date(),
        udpatedAt: new Date()
    }, {
        where: {id: `${req.params.id}`}
    })
    .then(row => {
        // res.send(row)
        res.redirect('/teacher')
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/delete/:id', (req,res) => {
    Models.Teacher.destroy({
      where: {
          id:`${req.params.id}`
      }
    })
    .then(()=> {
      res.redirect('/teacher')
    })
  })
module.exports = router