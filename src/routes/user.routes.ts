import express from 'express';
import { userController } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';

//CREATE CONST WITH ROUTER METHOD
const router = express.Router();

//ROUTES
router.get('/',authMiddleware, userController.getAllUsers);
router.get('/profile',authMiddleware, userController.getSelfProfile);

router.put('/profile',authMiddleware, userController.editUserProfile);
router.get('/techs',authMiddleware, userController.getAllTechs);
router.get('/:id',authMiddleware, userController.getUserById);





export default router;