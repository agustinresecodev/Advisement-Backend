import express from "express";

//IMPORT ROUTES
import authRoutes from "./auth.routes";
import baseRoutes from "./base.routes";
import clientsRoutes from "./clients.routes";
import userRoutes from "./user.routes";


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





export default router;