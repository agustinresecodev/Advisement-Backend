import { faker } from "@faker-js/faker";
import {Case} from "../../models/Case";
import {Factory} from "./Factory";
import { User } from "../../models/User";
import { Client } from "../../models/Client";



export class CaseFactory extends Factory<Case>{

    

    protected generate(): Case {
        return{
            description: faker.lorem.sentence(),
            status: false,
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
            initialDate: faker.date.past(),
            finalDate: faker.date.future(),
            user: Math.floor(Math.random() * 10) + 6 as unknown as User,
            client: Math.floor(Math.random() * 10) + 6 as unknown as Client,


        } as Case;    
    }
}