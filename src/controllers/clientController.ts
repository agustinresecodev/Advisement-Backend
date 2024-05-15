
import { Request, Response } from "express";
import { Client } from "../models/Client";
import { get } from "http";


export const clientController = {

    async getAllClients(req: Request, res: Response){
        try {
            const clients = await Client.find();
            res.status(200).json(clients);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Internal server error"});
        }
    },

    async getClientById(req: Request, res: Response){
        try {
            const id = Number(req.params.id);
            const client = await Client.findOne({
                where:{id: id}
            });
            res.status(200).json(client);
            }
                
            
            
         catch (error) {
            console.error(error);
            res.status(500).json({message: "Internal server error"});
        }
    },

    async editClient(req: Request, res: Response){
        try {
            const id = Number(req.params.id);
            const {name, email, phone, address, cif, contactName} = req.body;
            const client = await Client.findOne({
                where:{id: id}
            });
            if(client){
                client.name = name;
                client.email = email;
                client.phone = phone;
                client.address = address;
                client.cif = cif;
                client.contactName = contactName;
                await client.save();
                res.status(200).json({message: "Client updated successfully"});
            }else{
                res.status(404).json({message: "Client not found"});
            }
        }catch (error) {
            console.error(error);
            res.status(500).json({message: "Internal server error"});
        }
    },

    async deleteClient(req: Request, res: Response){
        try {
            const id = Number(req.params.id);
            const client = await Client.findOne({
                where:{id: id}
            });
            if(client){
                await client.remove();
                res.status(200).json({message: "Client deleted successfully"});
            }else{
                res.status(404).json({message: "Client not found"});
            }
        }catch (error) {
            console.error(error);
            res.status(500).json({message: "Internal server error"});
        }
    },

    async createClient(req: Request, res: Response){
        try {
            const {name, email, phone, address, cif, contactName} = req.body;
            const client = new Client();
            client.name = name;
            client.email = email;
            client.phone = phone;
            client.address = address;
            client.cif = cif;
            client.contactName = contactName;
            await client.save();
            res.status(201).json({message: "Client created successfully"});
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Internal server error"});
        }
    }
};