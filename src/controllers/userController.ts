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

    //Edit user Profile
    async editUserProfile(req: Request, res: Response) {
        try {
            const userId = req.tokenData?.userId;
            const user = await User.findOne({ where: { id: userId } });
            
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            const { firstName, lastName, email, phone } = req.body;
            
            if (!firstName && !lastName && !email && !phone) {
                return res.status(400).json({ message: "Nothing to update" });
            }

            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.phone = phone;


            await user.save();
            res.status(200).json({ message: "User updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    },

    //get all users with role tech
    async getAllTechs(req: Request, res: Response) {
        try {
            const users = await User.find({
                relations:{
                    role:true
                },
                where: { 
                    
                    role:{name:"technicians"}}
            });
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error ups" });
        }
    }



};