const { Router } = require("express");
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const DishesController = require("../controllers/DishesController");
const DishImageController = require("../controllers/DishImageController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const dishesController = new DishesController();
const dishImageController = new DishImageController();

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.post("/add-dish", dishesController.create);//
dishesRoutes.put("/edit-dish/:id", dishesController.update)
dishesRoutes.patch("/update-dish-image/:id", upload.single("image"), dishImageController.create)
dishesRoutes.delete("/delete-dish/:id", dishesController.delete);
dishesRoutes.get("/index-dish", dishesController.index);//nao precisa /:user_id pq vamos passar por query 
dishesRoutes.get("/show-dish/:id", dishesController.show);

module.exports = dishesRoutes;