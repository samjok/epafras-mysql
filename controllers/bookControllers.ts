import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { Book } from "../entities/Book";

export const addBook = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { isbn, title, author, published, edition, pages, description } = req.body;
    try {
        const newBook = new Book();
        newBook.isbn = isbn;
        newBook.title = title;
        newBook.author = author;
        newBook.edition = edition;
        newBook.published = published;
        newBook.pages = pages;
        newBook.description = description;
        const bookRepository = getRepository(Book);
        const existingBook = await bookRepository.findOne({ where: { isbn } });
        console.log("existingBook", existingBook);
        if (!existingBook) {
            const book = await bookRepository.save(newBook);
            return res.status(200).json(book);
        } else return res.status(400).json({ msg: "The book is already in database." });
    } catch (err) {
        return res.status(501).send(err.stack);
    }
};

export const getAllBooks = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    try {
        const bookRepository = getRepository(Book);
        const books = await bookRepository.find();
        return res.status(200).json(books);
    } catch (err) {
        return res.status(501).send(err.stack);
    }
};