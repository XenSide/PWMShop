const { users, savedb } = require("../utils/db");

function confirmSignUp(req, res, next) {
    if (req.body.TOS === "on") {
        if (users.find((user) => user.email === req.body.email || user.username === req.body.nome)) {
            res.status(400).send('Email o Username già registrati<br><a href="/signup">Torna indietro</a>');
            return;
        }
        users.push({ username: req.body.username, email: req.body.email, password: req.body.psw });
        savedb(users, "users.json");
        next();
    } else {
        res.status(400).send(
            'Password non corrispondenti o TOS non accettati<br><a href="/signup">Torna indietro</a>'
        );
    }
}

module.exports = confirmSignUp;
