const db = require("../models");

exports.createNiveau = (req, res) => {
    db.Niveau.create(
        {
            nom : req.body.nom,
            code : req.body.code,
            description : req.body.description
        }
    ).then(result => res.json({ niveau: result }))
}

exports.updateNiveau = (req, res) => {
    db.Niveau.update(
        {

        },
        {
            where: {

            }
        }
    ).then(result => res.json({niveau: result}))
}


exports.findAllNiveaux = (req, res) => {
    db.Niveau.findAll(
        {
            include: [
                {
                    model: db.Etudiant,
                    as: 'etudiants'
                }
            ]
        }
    ).
    then(result => res.json({niveaux: result}))
}