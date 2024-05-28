import express from 'express';
import { userController } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { authorizeMiddleware } from '../middlewares/authorize';

//CREATE CONST WITH ROUTER METHOD
const router = express.Router();

//ROUTES
router.get('/',authMiddleware, userController.getAllUsers);
router.get('/profile',authMiddleware, userController.getSelfProfile);

router.put('/profile',authMiddleware, userController.editUserProfile);
router.get('/techs',authMiddleware, userController.getAllTechs);
router.get('/:id',authMiddleware,authorizeMiddleware(['administration','technicians']), userController.getUserById);
router.delete('/:id',authMiddleware,authorizeMiddleware(['administration']), userController.deleteUser);





export default router;