import express from 'express';
import { clientController } from '../controllers/clientController';

//CREATE CONST WITH ROUTER METHOD
const router = express.Router();

//ROUTES
router.get('/', clientController.getAllClients);
router.get('/:id', clientController.getClientById);
router.put('/:id', clientController.editClient);
router.delete('/:id', clientController.deleteClient);
router.post('/', clientController.createClient);




export default router;