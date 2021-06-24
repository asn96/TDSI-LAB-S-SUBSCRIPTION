module.exports = function (app) {
    const checkAuth = require("../middlewares/check-auth");
    const etudiantController = require("../controllers/etudiant.controller");

    app.post(
        '/createEtudiant',
        checkAuth,
        etudiantController.createEtudiant
    )

    app.post(
        '/updateEtudiant',
        checkAuth,
        etudiantController.updateEtudiant
    )

}