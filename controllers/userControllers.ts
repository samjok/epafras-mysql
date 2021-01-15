import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { getConnection, getRepository } from "typeorm";
import { User } from "../entities/User";

export const addUser = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { username, password } = req.body;
    console.log('req.body', req.body);
    try {
        const userRepository = getRepository(User);
        const salt = await bcrypt.genSalt(10);
        const cryptedPassword = await bcrypt.hash(password, salt);

        // Saving new user with the crypted password into database.
        const newUser = new User();
        newUser.username = username;
        newUser.password = cryptedPassword;
        newUser.admin = false;
        const existingUser = await userRepository.findOne({ where: { username } });
        if (!existingUser) {
            await userRepository.save(newUser);
            return res.status(200).json({ msg: "User account succesfully registered" });
        } else return res.status(409).json({ error: "User with this username is already in database" });
    } catch (err) {
        return res.status(501).send({ error: "Server error" });
    }
};