import { ClientFactory } from "../factories/ClientFactory";
import { Seeder } from "./Seeder";
import { SeederConfig } from "../../config/SeederConfig";
import { Client } from "../../models/Client";



export class ClientSeeder extends Seeder{
    protected async generate(): Promise<void> {
        const {CLIENTS} = SeederConfig;

        const clientFactory = new ClientFactory();
        
        const clients = clientFactory.createMany(CLIENTS);
        
        await Client.save(clients);
    }
}