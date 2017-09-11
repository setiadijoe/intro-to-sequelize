const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.render('index', {pageTitle: 'SHS' ,head:'SENIOR HIGH SCHOOL'});
});

module.exports = router;