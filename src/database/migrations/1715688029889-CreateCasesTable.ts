import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCasesTable1715688029889 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"cases",
                columns:[
                    {
                        name:"id",
                        type:"int",
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:"increment"
                    },
                    {
                        name:"client_id",
                        type:"int",
                        isNullable:false

                    },
                    {
                        name:"technician_id",
                        type:"int",
                        isNullable:false
                    },
                    {
                        name:"description",
                        type:"varchar",
                        length:"255",
                    },
                    {
                        name:"status",
                        type:"boolean",
                        default:false
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"initial_date",
                        type:"timestamp",
                        isNullable:true
                    },
                    {
                        name:"final_date",
                        type:"timestamp",
                        isNullable:true
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cases");
    }

}
