import { Request, Response, NextFunction } from "express";
import { getConnection, getRepository } from "typeorm";
import { User } from "../entities/User";
import jwt from "jsonwebtoken";
import "dotenv/config";

const secret = String(process.env.JWT_SECRET);

const auth = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const token = req.headers.authorization;
    if (!token) {
        res.sendStatus(403).send("Forbidden");
    } else
        try {
            const decodedData = jwt.verify(token.split(" ")[1], secret);
            const id = decodedData;
            const userRepository = getRepository(User)
            const existingUser = userRepository.findOne({ where: id })
            if (existingUser) {
                next();
            } else res.status(403).send("Forbidden");

        } catch (err) {
            res.send(err);
        }
};

export default auth;