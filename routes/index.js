import express from "express";
import { Login } from "../controllers/user.controller";


const router = express.Router();
router.post('/Login', Login );

//router.post('/login', loginController.login);


export default router;