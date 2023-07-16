import { Router } from "express";
import { productController } from "../controllers/product.controllers.js";
import { tokenVerify } from "../middlewares/tokenVerify.js";

const route = Router()

route.post('/product', tokenVerify, (req, res) => productController.create(req, res))

export default route