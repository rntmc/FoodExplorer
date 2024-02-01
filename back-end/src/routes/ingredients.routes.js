const { Router } = require("express");

const IngredientsController = require("../controllers/IngredientsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const ingredientsRoutes = Router();

const ingredientsController = new IngredientsController();

ingredientsRoutes.get("/", ensureAuthenticated, ingredientsController.index);//nao precisa :user_id pois sera passado pelo middleware

module.exports = ingredientsRoutes;