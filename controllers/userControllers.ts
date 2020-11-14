import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { getConnection, getRepository } from "typeorm";
import { User } from "../entities/User";

export const addUser = async (
    req: Request,
    res: Response,
): Promise<Response> => {
    const { username, password } = req.body;
    try {
        // Crypting user's password.
        const salt = await bcrypt.genSalt(10);
        const cryptedPassword = await bcrypt.hash(password, salt);

        // Saving new user with the crypted password into database.
        // Database will generate user ID automatically.
        const newUser = new User();
        newUser.username = username;
        newUser.password = cryptedPassword;
        const userRepository = getRepository(User);
        const existingUser = await userRepository.findOne({ where: { username } });
        if (!existingUser) {
            userRepository.save(newUser);
            return res.status(200).json({ msg: "User account succesfully registered." });
        } else return res.status(400).json({ msg: "User with this username is already in database." });
    } catch (err) {
        return res.status(501).json(err.stack);
    }
};