import { faker } from "@faker-js/faker";
import {Case} from "../../models/Case";
import {Factory} from "./Factory";



export class CaseFactory extends Factory<Case>{
    protected generate(): Case {
        return{
            description: faker.lorem.sentence(),
            status: false,
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
            initialDate: faker.date.past(),
            finalDate: faker.date.future(),
        } as Case;    
    }
}