const express = require('express');
const router = express.Router();
const Models = require('../models')

// router.get('/', (req, res)=>{
//     //ini untuk ambil data teacher nya
//     Models.Teacher.findAll()
//      .then(rows=>{
//         //ini buat combobox data subject nya
//         Models.Subject.findAll({exclude:Models.Teacher})
//             .then(subjects=>{
//                 // res.send({dataTeachers:rows, dataSubjects: subjects})
//                     res.render('teacher', {dataTeachers: rows, dataSubjects: subjects})

            
//         })     
//     })
//     .catch(err=>{
//         // console.log(err)
//         res.send(err)
//     })
// })

router.get('/', (req, res) => {
    Models.Teacher.findAll()
    .then(data_teachers => {
        res.render('teacher', {data_teachers: data_teachers})
    })
    .catch(err => {
        res.send(err)
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
            res.render('../views/editteacher', {teacher: teacher, data_subjects: subjects})
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
    .then(teacher => {
        res.redirect('/teacher')
    })
    .catch(err => {
        res.send(err)
    })
})
module.exports = router