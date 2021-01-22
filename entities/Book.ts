import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Author } from './Author';

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

    @ManyToOne(() => Author, author => author.id)
    author1: Author;

    @ManyToOne(() => Author, author => author.id)
    author2: Author;

    @ManyToOne(() => Author, author => author.id)
    author3: Author;

    @Column()
    pages: number;

    @Column()
    published: number;

    @Column()
    edition: number;

    @Column()
    description: string;

}
