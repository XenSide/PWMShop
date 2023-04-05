let express = require("express");
const router = express.Router();
let auth = require("../middlewares/auth");

let { products, reviews, savedb } = require("../utils/db.js");

router.get("/", auth, (req, res) => {
    res.status(200).render("shop.ejs", { nome: req.session.userid, products: products });
});

router.get("/:id", auth, (req, res) => {
    const { id } = req.params;
    product = products.find((product) => product.id === Number(id));
    if (product) {
        res.status(200).render("product.ejs", {
            product: product,
            nome: req.session.userid,
            reviews: reviews.filter((review) => review.idprodotto === id),
        });
    } else {
        res.status(400).send('Prodotto non trovato <br><a href="/shop">Torna indietro</a>');
    }
});
router.post("/review/add", auth, (req, res) => {
    console.log(req.body);
    if (
        req.body.tos &&
        req.body.idprodotto.length > 0 &&
        req.body.username.length > 0 &&
        req.body.titolo.length > 0 &&
        req.body.corpo.length > 0
    ) {
        reviews.push({
            idprodotto: req.body.idprodotto,
            username: req.body.username,
            titolo: req.body.titolo,
            corpo: req.body.corpo,
        });
        savedb(reviews, "reviews.json");
        console.log("/" + req.body.idprodotto + "#reviews");
        res.status(200).redirect("/shop/" + req.body.idprodotto + "#reviews");
    } else {
        res.status(400).send(
            'C\'è stato un problema, assicurati di aver effettuato il login e di aver riempito tutti i campi<br><a href="/shop">Torna indietro</a>'
        );
    }
});
module.exports = router;
