import express from 'express';
import { clientController } from '../controllers/clientController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { authorizeMiddleware } from '../middlewares/authorize';

//CREATE CONST WITH ROUTER METHOD
const router = express.Router();

//ROUTES
router.get('/',authMiddleware, clientController.getAllClients);
router.get('/:id',authMiddleware, clientController.getClientById);
router.put('/:id',authMiddleware,authorizeMiddleware(['administration']), clientController.editClient);
router.delete('/:id',authMiddleware,authorizeMiddleware(['administration']), clientController.deleteClient);
router.post('/',authMiddleware,authorizeMiddleware(['administration']), clientController.createClient);




export default router;