const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = (req, res) => {

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            db.User.create({
                nomComplet: req.body.nomComplet,
                email: req.body.email,
                telephone: req.body.telephone,
                role: req.body.role,
                password: hash
            }).then(result => res.json({ user: result }))

        }
    });
}

exports.signin = (req, res) => {
    db.User.findOne({
        where: {
            telephone: req.body.telephone
        }
    }).then(result => {
        if (result.length === 0) {
            return res.status(401).json({
                message: "l'utilisateur n'existe pas"
            });
        } else {
            bcrypt.compare(req.body.password, result.password, (error, resultTest) => {
                if (resultTest) {
                    const token = jwt.sign({result}, "neksyteam");

                    return res.status(200).json({
                        token: token
                    });

                }else {
                    return res.status(401).json({
                        message: "mot de passe incorrect"
                    });
                }
            })
        }
    })
}

exports.updateUser = (req, res) => {
    db.User.update(
        {
            nomComplet: req.body.nomComplet,
            email: req.body.email,
            telephone: req.body.telephone,
            role: req.body.role,
            // password: req.body.password
        },
        {
            where: {
                id: req.body.id
            }
        }
    ).then(result => res.json({user: result}))
}