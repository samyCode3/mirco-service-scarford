import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import { ROLE } from '../interface/enum/enum'
import { singleton } from 'tsyringe'
// import {UserTI } from '../interface/user/user.interface'
@singleton()
@Entity()
export class User{
        @PrimaryGeneratedColumn()
        id: number;
        @Column()
        fullname: string;
        @Column()
        email: string;
        @Column()
        password: string;
        @Column({
        nullable: false,
        select: false,
        })
        status: boolean;
        @BeforeInsert()
        beforeInsertActions() {
        this.status = false;
        }
        @Column({ default : ROLE.user})
        role: string = ROLE.user;
        @Column({ default : Date.now()})
        created_At: string;
        @Column({ default : Date.now()})
        updated_At: string;
}

