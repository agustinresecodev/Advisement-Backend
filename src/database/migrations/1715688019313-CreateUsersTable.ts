import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1715688019313 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "first_name",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "last_name",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "phone",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "is_active",
            type: "boolean",
            default: true,
          },
          {
            name: "role_id",
            type: "int",
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ["role_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "roles",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
