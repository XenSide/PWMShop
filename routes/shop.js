let express = require('express');
const router = express.Router();
let auth = require('../middlewares/auth');

let { products, reviews } = require('../utils/db.js');

router.get('/', auth, (req, res) => {
    res.render('newshop.ejs', { nome: req.session.userid, products: products })
});
router.get('/old', auth, (req, res) => {
    res.render('shop.ejs', { nome: req.session.userid, products: products })
});
router.get('/:id', auth, (req, res) => {
    const { id } = req.params
    product = products.find(product => product.id === Number(id))
    if (product) {
        res.status(200).render('product.ejs', { product: product, nome: req.session.userid, reviews: reviews.filter(review => review.idprodotto === id) })
    }else{
        res.status(400).send('Prodotto non trovato <br><a href="/shop">Torna indietro</a>')
    }
})

module.exports = router