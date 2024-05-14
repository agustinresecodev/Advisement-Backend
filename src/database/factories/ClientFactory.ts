import { faker } from "@faker-js/faker";
import {Client} from "../../models/Client";
import {Factory} from "./Factory";



export class ClientFactory extends Factory<Client>{
    protected generate(): Client {
        return{
            name: faker.company.name(),
            email: faker.internet.email(),
            phone: "123456789090",
            address: faker.location.streetAddress(),
            cif: faker.string.numeric(9),
            contactName: faker.person.firstName(),
        } as Client;    
    }
}