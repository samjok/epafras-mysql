import { Router } from "express";
import { addUser } from "../controllers/userControllers";
import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import auth from "../middlewares/authenticationMiddleware";

const userRoutes = (): Router => {
    const router = Router();
    router.post("/signup", [
        body("username").isLength({ min: 3 })
            .withMessage("Username must be at least 3 characters long."),
        body("password").isLength({ min: 5 })
            .withMessage("Password must be at least 5 characters long."),
    ], async (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } return next();
    }, auth, addUser);
    return router;
};

export default userRoutes;
