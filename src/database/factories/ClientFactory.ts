import { faker } from "@faker-js/faker";
import {Client} from "../../models/Client";
import {Factory} from "./Factory";



export class ClientFactory extends Factory<Client>{
    protected generate(): Client {
        return{
            name: faker.company.name(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            address: faker.location.streetAddress(),
            cif: faker.string.numeric(9)+faker.string.alphanumeric({casing: 'upper', length: 1}),
        } as Client;    
    }
}