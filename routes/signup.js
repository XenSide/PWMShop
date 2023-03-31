const express = require('express')
const router = express.Router()
const confirmSignUp = require('../middlewares/confirmsignup')

router.get('/', (req, res) => {
    res.render('signup.ejs')
});

router.post('/', confirmSignUp, (req, res) => {
    res.status(200).redirect('/')
});

module.exports = router