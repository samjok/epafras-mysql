import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    isbn: string;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    pages: number;

    @Column()
    published: number;

    @Column()
    edition: number;

    @Column()
    description: string;

}
