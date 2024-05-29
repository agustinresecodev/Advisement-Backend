import { Request, Response } from "express";
import { Case } from "../models/Case";
import jwt from "jsonwebtoken";
import { TokenData } from "../types/types";

export const caseController = {
    //GET ALL CASES
    async getAllCases(req: Request, res: Response) {
        try {
            const cases = await Case.find(
                {
                    relations: {
                        client: true,
                        user: true,                        
                    },
                    select: {
                        user: {
                            id: true,
                            firstName: true,
                            lastName: true,
                            email: true,
                            phone: true,
                            isActive: true,
                            role: {
                                name: true
                            }
                        },
                        client: {
                            id: true,
                            name: true,
                            email: true,
                            phone: true,
                            address: true,
                            contactName: true,
                        },
                }
                }
            );
            res.status(200).json(cases);
        } catch (error) {
            
            res.status(500).json({ message: "Internal server error" });
        }
    },

    //GET CASE BY ID
    async getCaseById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            const cases = await Case.findOne({
                relations: {
                    client: true,
                    user: true,                        
                },
                select: {
                    user: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                        phone: true,
                        isActive: true,
                        role: {
                            name: true
                        }
                    },
                    client: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true,
                        address: true,
                        contactName: true,
                    },
            },
                where: { id: id }
            });
            res.status(200).json(cases);
        } catch (error) {
            
            res.status(500).json({ message: "Internal server error" });
        }
    },

    //Edit case
    async editCase(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const edit = await Case.findOne({ where: { id: id } });
            const { status, description, initialDate, finalDate, userId, clientId } = req.body;

            if (!edit) {
                return res.status(404).json({ message: "Case not found" });
            }

            
            edit.status = Boolean(status);
            edit.description = description;
            edit.initialDate = initialDate;
            edit.finalDate = finalDate;
            edit.user = userId;
            edit.client = clientId;
            edit.updatedAt = new Date();
            edit.save();
            console.log(edit);

            res.status(200).json(edit);
    }catch (error) {
        
        res.status(500).json({ message: "Internal server error" });
    }
    },

    //Delete case
    async deleteCase(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const deleteCase = await Case.findOne({ where: { id: id } });

            if (!deleteCase) {
                return res.status(404).json({ message: "Case not found" });
            }

            deleteCase.remove();
            res.status(200).json({ message: "Case deleted" });
        } catch (error) {
            
            res.status(500).json({ message: "Internal server error" });
        }
    },

    //Get cases By User
    async getCasesByUser(req: Request, res: Response) {
        try {
            const token = req.headers.authorization;

            const user_Id = req.tokenData?.userId
            
            

            const cases = await Case.find({
                relations: {
                    client: true,
                    user: true,                        
                },
                select: {
                    id: true,
                    user: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                        phone: true,
                        isActive: true,
                        role: {
                            name: true
                        }
                    },
                    client: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true,
                        address: true,
                        contactName: true,
                    },
                    description: true,
                    status: true,
                    initialDate: true,
                    finalDate: true,
                    createdAt: true,
                },
                where: { 
                    user: {
                        id:user_Id
                    }
                }  
            }
        )
            res.status(200).json(cases);

            } catch (error) {
                console.error(error);
                res.status(500).json({ message: "Internal server error" });
            }
        },

    //Create case
    async createCase(req: Request, res: Response) {
        try {
            const { description, userId, clientId } = req.body;
            const token = req.headers.authorization;

            if (!description || !userId || !clientId) {
                
                return res.status(400).json({ message: "Missing fields" });
            }

            const creationDate = new Date();
            const updated = new Date();

            const newCase = new Case();

            newCase.description = description;
            newCase.status = false;
            newCase.createdAt = creationDate;
            newCase.updatedAt = updated;
            newCase.user = userId;
            newCase.client = clientId;
            
                
            await newCase.save();
           
            res.status(201).json(newCase);
        } catch (error) {
            
            res.status(500).json({ message: "Internal server error" });
        }
    }
};