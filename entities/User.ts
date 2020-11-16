import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    username: string;

    @Column({
        unique: true
    })
    password: string;

    @Column()
    admin: boolean;


}

// need to set "strictPropertyInitialization" to false in tsconfig file
