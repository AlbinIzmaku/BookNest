import express from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
} from "../controllers/booksController.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);
router.get("/:id", getBookById);
router.put("/:id", updateBookById);

export default router;
