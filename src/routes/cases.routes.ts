import express from 'express';
import { caseController } from '../controllers/caseController';
import { authMiddleware } from '../middlewares/authMiddleware';

//CREATE CONST WITH ROUTER METHOD
const router = express.Router();

//ROUTES
router.get('/',authMiddleware, caseController.getAllCases);
router.get('/:id',authMiddleware, caseController.getCaseById);
router.put('/:id',authMiddleware, caseController.editCase);

export default router;