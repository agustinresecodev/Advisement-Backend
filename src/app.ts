import express, { Application } from "express";
import cors from "cors";
import {corsOptions} from "./config/cors";
import dotenv from "dotenv";
import BaseRoutes from "./routes/base.routes";
import apiRoutes from "./routes/api.routes";



//------------------------------------------------------

dotenv.config();
dotenv.config({ path: ".env" });

const app: Application = express();

//Middleware
app.use(express.json());
app.use(cors(corsOptions));

//Routes
//Register Base Routes
app.use('/',BaseRoutes); 

//Register API Routes
app.use('/api',apiRoutes);

export default app;