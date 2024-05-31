
import { CaseSeeder } from "./CaseSeeder";
import { ClientSeeder } from "./ClientSeeder";
import { RoleSeeder } from "./RoleSeeders";
import { UserSeeder } from "./UserSeeder";



(async () => {
    console.log("🌱 Seeding database...");
    await new ClientSeeder().start();
    await new RoleSeeder().start();
    await new UserSeeder().start();
    await new CaseSeeder().start();
    console.log("🌱 Database seeded");

})();