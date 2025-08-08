import express from 'express';
import { createBook, deleteBook, editBook, getBookById, getBooks } from '../controllers/book.controller.js';

const router = express.Router();

router.get("/", getBooks);
router.post("/", createBook);
router.get("/:id", getBookById);
router.put("/:id", editBook);
router.delete("/:id", deleteBook);

export default router;