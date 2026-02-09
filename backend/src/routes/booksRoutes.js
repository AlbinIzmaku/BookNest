import express from "express";
import { createBook, getAllBooks } from "../controllers/booksController.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);

export default router;
