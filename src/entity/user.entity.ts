import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
@Entity()
export class User {
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
        @Column()
        created_At: string;
        @Column()
        updated_At: string;
}
