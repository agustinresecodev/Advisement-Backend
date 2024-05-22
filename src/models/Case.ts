import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";
import { Client } from "./Client";

@Entity('cases')
export class Case extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name:"description"})
    description!: string;

    @Column({name:"status"})
    status!: boolean;

    @Column({name:"created_at"})
    createdAt!: Date;

    @Column({name:"updated_at"})
    updatedAt!: Date;

    @Column({name:"initial_date"})
    initialDate?: Date;
    

    @Column({name:"final_date"})
    finalDate?: Date;


    // Relation 1:N con tabla users
    @ManyToOne(()=> User,(user)=>user.case)
    @JoinColumn({name:"technician_id"})
    user!:User;
    
    // Relation 1:N con tabla clients
    @ManyToOne(()=> Client,(client)=>client.cases)
    @JoinColumn({name:"client_id"})
    client!:Client;
}
