import express from 'express';
import { userController } from '../controllers/userController';

//CREATE CONST WITH ROUTER METHOD
const router = express.Router();

//ROUTES
router.get('/', userController.getAllUsers);
router.get('/profile', userController.getSelfProfile);
router.get('/:id', userController.getUserById);




export default router;