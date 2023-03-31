//require db
const { users, savedb } = require('../utils/db')

function login(req, res, next) {
    var user = users.find(user => user.email === req.body.email && user.password === req.body.password)
    if (user) {
        // session=req.session
        req.session.userid=user.username
        next()
    }else{
        res.status(400).send('Email o password errati<br><a href="/">Torna indietro</a>')
    }

}
    module.exports = login