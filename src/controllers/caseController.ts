import { Request, Response } from "express";
import { Case } from "../models/Case";

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
            console.error(error);
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
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
};