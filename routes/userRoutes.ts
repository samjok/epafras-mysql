import { Router } from "express";
import { addUser, getAllUsers } from "../controllers/userControllers";

const userRoutes = (): Router => {
    const router = Router();
    router.get("/", getAllUsers);
    router.post("/signup", addUser)
    return router;
};

export default userRoutes;