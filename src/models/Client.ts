import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Case } from "./Case";

@Entity("clients")
export class Client extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name:"company_name"})
    name!: string;

    @Column({name:"email"})
    email!: string;

    @Column({name:"phone"})
    phone!: string;

    @Column({name:"address"})
    address!: string;

    @Column({name:"cif"})
    cif!: string;

    @Column({name:"contact_name"})
    contactName!: string;

    // relation 1:N with table cases

    @OneToMany(()=> Case,(cases)=>cases.client)
    cases!: Case[];

}
