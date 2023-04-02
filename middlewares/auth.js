function auth(req, res, next) {
    if (req.session.userid) {
    // if (true) { //used for debugging
            next()
        } else {
            res.status(401).send('Non sei autorizzato a visualizzare questa pagina<br><a href="/">Torna indietro</a>')
        }
    }

module.exports = auth