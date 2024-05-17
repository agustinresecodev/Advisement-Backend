import express from "express";

//IMPORT ROUTES
import authRoutes from "./auth.routes";
import baseRoutes from "./base.routes";
import clientsRoutes from "./clients.routes";
import userRoutes from "./user.routes";
import casesRoutes from "./cases.routes";


const router = express.Router();

//////////      API ROUTES      //////////////////
//BASE ROUTE
router.use("/",baseRoutes)

//AUTH ROUTES
router.use('/auth',authRoutes);

//CLIENT ROUTES
router.use('/clients',clientsRoutes);

//USER ROUTES
router.use('/users',userRoutes);

//CASES ROUTES
router.use('/cases',casesRoutes);





export default router;