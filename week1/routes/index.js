const routes = require("express").Router();
const myController = require("../controllers");

routes.get("/firstname", myController.firstname);
routes.get("/lastname", myController.lastname);
routes.get("/email", myController.email);
routes.get("/color", myController.color);
routes.get("/birthday", myController.birthday);

module.exports = routes;