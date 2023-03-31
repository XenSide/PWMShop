const express = require('express')
const router = express.Router()
const login = require('../middlewares/login')

router.get('/', (req, res) => {
    if (req.session.userid) {
        res.status(200).redirect('/shop')
    } else {
        res.render('index.ejs', { name: 'Pippo' })
    }
});

router.post('/', login, (req, res) => {
    res.status(200).redirect('/shop')
});

module.exports = router