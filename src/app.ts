import express, { Application } from "express";
import cors from "cors";
import {corsOptions} from "./config/cors";
import dotenv from "dotenv";
import { dot } from "node:test/reporters";


//------------------------------------------------------

dotenv.config();
dotenv.config({ path: ".env" });

const app: Application = express();

//Middleware
app.use(express.json());
app.use(cors(corsOptions));

//Routes


export default app;