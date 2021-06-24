module.exports = function (app) {
    const checkAuth = require("../middlewares/check-auth");
    const userController = require("../controllers/user.controller");

    app.post(
        '/createUser',
        checkAuth,
        userController.createUser
    )

    app.post(
        '/signin',
        userController.signin
    )

    app.post(
        '/updateUser',
        checkAuth,
        userController.updateUser
    )
}