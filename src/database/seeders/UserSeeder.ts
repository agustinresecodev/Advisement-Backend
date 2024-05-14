import { SeederConfig } from "../../config/SeederConfig";
import { User } from "../../models/User";
import { UserRoles } from "../../constants/UserRoles";
import { UserFactory } from "../factories/UserFactory";
import { Seeder } from "./Seeder";

export class UserSeeder extends Seeder{
    protected async generate(): Promise<void> {
        const {ADMINS, ADMINISTRATION, TECHNICIANS} = SeederConfig;

        const userFactory = new UserFactory();

        // Create Admins
        const adminUsers = userFactory.createMany(ADMINS);
        adminUsers.forEach(async (user) => {
            user.role = UserRoles.ADMIN;
        });


        // Create Administration users
        const administrationUsers = userFactory.createMany(ADMINISTRATION);
        administrationUsers.forEach(async (user) => {
            user.role = UserRoles.ADMINISTRATION;
        });

        // Create Technicians
        const techUsers = userFactory.createMany(TECHNICIANS);
        techUsers.forEach(async (user) => {
            user.role = UserRoles.TECHNICIANS;
        });

        // Save to the database
        const allUsers = [...adminUsers, ...administrationUsers, ...techUsers];
        await User.save(allUsers);
    }
}