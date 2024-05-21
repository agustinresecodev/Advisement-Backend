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

            edit.status = status;
            edit.description = description;
            edit.initialDate = initialDate;
            edit.finalDate = finalDate;
            edit.user = userId;
            edit.client = clientId;
            edit.updatedAt = new Date();
            edit.save();

            res.status(200).json(edit);
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
    }
};