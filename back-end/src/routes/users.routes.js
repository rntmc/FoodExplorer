const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const UsersValidationController = require("../controllers/UsersValidationController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoutes = Router();

const usersController = new UsersController();
const usersValidationController = new UsersValidationController();

usersRoutes.post("/", usersController.create);
usersRoutes.get("/validated", ensureAuthenticated, usersValidationController.index);
// usersRoutes.put("/", ensureAuthenticated, usersController.update); //Nao necessaria

module.exports = usersRoutes;