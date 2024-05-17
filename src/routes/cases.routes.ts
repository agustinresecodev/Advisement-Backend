import express from 'express';
import { caseController } from '../controllers/caseController';

//CREATE CONST WITH ROUTER METHOD
const router = express.Router();

//ROUTES
router.get('/', caseController.getAllCases);
router.get('/:id', caseController.getCaseById);

export default router;