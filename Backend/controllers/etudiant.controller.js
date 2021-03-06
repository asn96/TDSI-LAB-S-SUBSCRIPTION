const db = require("../models");

exports.createEtudiant = (req, res) => {
    db.Etudiant.create(
        {
            nomComplet: req.body.nomComplet,
            email: req.body.email,
            telephone: req.body.telephone,
            adresse: req.body.adresse,
            userid: req.body.userid,
            niveauid: req.body.niveauid,
            sexe: req.body.sexe
        }
    ).then(result => res.json({etudiant: result}))
}

exports.updateEtudiant = (req, res) => {
    db.Etudiant.update(
        {
            nomComplet: req.body.nomComplet,
            email: req.body.email,
            telephone: req.body.telephone,
            adresse: req.body.adresse,
            niveauid: req.body.niveauid,
            sexe: req.body.sexe
        },
        {
            where: {
                id: req.body.id
            }
        }
    ).then(result => res.json({etudiant: result}))
}