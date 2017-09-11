const express = require('express');
const router = express.Router();
const Models = require('../models')

router.get('/', (req, res) => {
    Models.Subject.findAll({
        include: [{model: Models.Teacher}],
        order: [
            ['id', 'ASC']
        ]
    })
    .then(data_subjects => {
        res.render('subject', {data: data_subjects})
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router