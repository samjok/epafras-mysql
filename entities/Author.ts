import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    name: string;

}