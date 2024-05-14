import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClientsTable1715687788633 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clients",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "company_name",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "address",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "phone",
            type: "varchar",
            length: "20",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "cif",
            type: "varchar",
            length: "15",
            isNullable: false,
          },
          {
            name: "contact_name",
            type: "varchar",
            length: "50",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clients");
  }
}
