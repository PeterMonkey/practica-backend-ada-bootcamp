import { Router } from "express";
import { userControllers } from "../controllers/user.controllers.js";
import { tokenVerify } from "../middlewares/tokenVerify.js";

const route = Router()

route.post('/user', (req, res) => userControllers.create(req, res))
route.post('/user/login', (req, res) => userControllers.login(req, res))
route.put('/user/addProduct', tokenVerify, (req, res) => userControllers.addProduct(req, res))

export default route