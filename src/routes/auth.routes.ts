import express from 'express';
import { authController } from '../controllers/authController';

//CREATE CONST WITH ROUTER METHOD
const router = express.Router();

//REGISTER ROUTE
router.post('/register', authController.register);
router.post('/login', authController.login);


export default router;