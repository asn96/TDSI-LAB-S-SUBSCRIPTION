const express = require("express");
const app = express();
const http = require('http');
const bodyParser = require("body-parser");
const db = require("./models");
var server = http.createServer(app);

app.use(bodyParser.json());

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");

    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization "
    );

    if (request.method === 'OPTIONS') {

        response.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH ');

        return response.status(200).json({});

    }

    next();
});


require('./routes/etudiant.routes')(app);
require('./routes/niveau.routes')(app);
require('./routes/user.routes')(app);


db.sequelize.sync().then(() => {
    server.listen(4000, () => console.log(`App listening on http://localhost:4000 `));
});