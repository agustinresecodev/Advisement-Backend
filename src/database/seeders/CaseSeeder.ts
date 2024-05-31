import { SeederConfig } from "../../config/SeederConfig";

import { Case } from "../../models/Case";
import { CaseFactory } from "../factories/CaseFactory";
import { Seeder } from "./Seeder";


export class CaseSeeder extends Seeder{
    protected async generate(): Promise<void> {
        const {CASES} = SeederConfig;

        const caseFactory = new CaseFactory();
        
        const cases = caseFactory.createMany(CASES);
        
        await Case.save(cases);
    }
}