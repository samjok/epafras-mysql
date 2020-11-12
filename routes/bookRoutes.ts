import { Router } from "express";
import { addBook, getAllBooks } from "../controllers/bookControllers";
import auth from '../middlewares/authenticationMiddleware';

const bookRoutes = (): Router => {
    const router = Router();
    router.get("/", getAllBooks);
    router.post("/", auth, addBook);
    return router;
};

export default bookRoutes;