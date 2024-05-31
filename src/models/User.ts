import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from "typeorm"
import {Role} from "./Role"
import { Case } from "./Case";


@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({name:"first_name"})
    firstName!: string;

    @Column({name:"last_name"})
    lastName!:string;

    @Column({name:"email"})
    email!:string;

    @Column({name:"phone"})
    phone!:string;

    @Column({name:"password", select:false})
    password!:string;

    @Column({name:"is_active"})
    isActive!:boolean;

    //Relacion N:1 con Roles
    @ManyToOne(()=>Role,(role)=>role.user)
    @JoinColumn({name:"role_id"})
    role!:Role;

    //Relacion 1:N con tabla cases
   @OneToMany(() => Case, (cases) => cases.user)
    case!: Case[];
}