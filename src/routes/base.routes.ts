import express, { Request, Response } from "express";

const router = express.Router();

///////////// BASE ROUTES ////////////////////
router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API");
});

export default router;
