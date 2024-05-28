import express from 'express';
import { caseController } from '../controllers/caseController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { authorizeMiddleware } from '../middlewares/authorize';

//CREATE CONST WITH ROUTER METHOD
const router = express.Router();

//ROUTES
router.get('/',authMiddleware, caseController.getAllCases);
router.get('/technician/',authMiddleware, caseController.getCasesByUser);
router.get('/:id',authMiddleware, caseController.getCaseById);
router.put('/:id',authMiddleware, caseController.editCase);
router.delete('/:id',authMiddleware, authorizeMiddleware(['administration']), caseController.deleteCase);
router.post('/',authMiddleware,authorizeMiddleware(['administration']), caseController.createCase);



export default router;