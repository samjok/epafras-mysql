import { Router } from "express";
import bookRoutes from "./bookRoutes";
import loginRoutes from "./loginRoutes";
import userRoutes from "./userRoutes";

export const createRoutes = (): Router => {
    const router = Router();
    router.use("/users", userRoutes());
    router.use("/login", loginRoutes());
    router.use("/books", bookRoutes());
    return router;
};
