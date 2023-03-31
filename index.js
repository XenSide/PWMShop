const express = require('express')
const app = express()
const oneday = 1000 * 60 * 60 * 24
const session = require('express-session')
const path = require('path')


app.use(session({
    secret: "IlCorpoNazionaleDeiVigiliDelFuocoSalviamLaVitaAgliAltriIlRestoContaPocoIlPompierePauraNonNeHa",
    saveUninitialized: true,
    cookie: { maxAge: oneday },
    resave: false
}))

app.set('view engine', 'ejs')
app.use(express.static('public'))
// app.use('/shop', express.static('public'))
app.use(express.urlencoded({ extended: true }))

const homepage = require('./routes/homepage')
const signup = require('./routes/signup')
const shop = require('./routes/shop')
const logout = require('./routes/logout')

app.use('/', homepage)
app.use('/signup', signup)
app.use('/shop', shop)
app.use('/logout', logout)

app.listen(3000)