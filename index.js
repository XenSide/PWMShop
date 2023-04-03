const compression = require("compression");
const path = require("path");

app.disable('x-powered-by');

app.use(compression());

    secret: "IlCorpoNazionaleDeiVigiliDelFuocoSalviamLaVitaAgliAltriIlRestoContaPocoIlPompierePauraNonNeHa",
    saveUninitialized: true,
    cookie: { maxAge: oneday },
    resave: false,
    store: new FileStore(),
}))

app.use(function (req, res, next) {
    res.setHeader("Cache-Control",`max-age=${oneday},immutable`);
    next()  
})

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

// let port = process.env.PORT || 3000
// let hostname = process.env.HOSTNAME || 'localhost'
let port = 80
let hostname =  '0.0.0.0'
app.listen(port, hostname)
console.log(`Server running at http://${hostname === '0.0.0.0' ? 'omnixen.ddns.net' : hostname}:${port}/`);