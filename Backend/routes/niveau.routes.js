module.exports = function (app) {
    const checkAuth = require("../middlewares/check-auth");
    const niveauController = require("../controllers/niveau.controller");

    app.post(
        '/createNiveau',
        checkAuth,
        niveauController.createNiveau
    )

    app.post(
        '/updateNiveau',
        checkAuth,
        niveauController.updateNiveau
    )

    app.get(
        '/getAllNiveau',
        // checkAuth,
        niveauController.findAllNiveaux
    )
}