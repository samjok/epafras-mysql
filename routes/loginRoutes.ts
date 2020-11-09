import { Router } from "express";
import { login } from "../controllers/loginControllers";

const loginRoutes = (): Router => {
    const router = Router();
    router.post("/", login);
    return router;
};

export default loginRoutes;