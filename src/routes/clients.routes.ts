import express from 'express';
import { clientController } from '../controllers/clientController';
import { authMiddleware } from '../middlewares/authMiddleware';

//CREATE CONST WITH ROUTER METHOD
const router = express.Router();

//ROUTES
router.get('/',authMiddleware, clientController.getAllClients);
router.get('/:id',authMiddleware, clientController.getClientById);
router.put('/:id',authMiddleware, clientController.editClient);
router.delete('/:id',authMiddleware, clientController.deleteClient);
router.post('/',authMiddleware, clientController.createClient);




export default router;