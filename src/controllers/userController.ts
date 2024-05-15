import { Request, Response } from "express";
import { User } from "../models/User";

export const userController = {
    //GET ALL USERS
    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    },


    async getSelfProfile(req: Request, res: Response) {
        try {
            const userId = req.tokenData?.userId;
            
            const user = await User.findOne({
                relations:{
                    role:true
                },
                select:{
                    id:true,
                    firstName:true,
                    lastName:true,
                    email:true,
                    phone:true,
                    isActive:true,
                    role:{                    
                            name:true
                        }
                    },
                
                where: { id: userId }
            });
            
        res.json(user).status(200);
        } catch (error) {
            console.log(req)
          res.status(500).json({ message: "Something went wrong" });
        }
      },

    //GET USER BY ID
    async getUserById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            
            const user = await User.findOne({
                where: { id: id }
            });
            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    },

    



};