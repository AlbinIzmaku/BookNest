import Book from "../models/bookModel.js";

export async function getAllBooks(req, res) {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error getting books");
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createBook(req, res) {
  try {
    const { title, author, publishYear } = req.body;

    const book = await Book.create({
      title,
      author,
      publishYear,
    });

    res.status(201).json(book);
  } catch (error) {
    console.error("Error posting book");
    res.status(500).json({ message: "Interval server error" });
  }
}

export async function getBookById(req, res) {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.error("Error getting book");
    res.status(500).send({ message: "Interval server error" });
  }
}

export async function updateBookById(req, res) {
  try {
    const { id } = req.params;

    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.error("Error updating Book");
    res.status(500).send({ message: "Interval server error" });
  }
}

export async function deleteBookById(req, res) {
  try {
    const { id } = req.params;

    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book");
    res.status(500).send({ message: "Interval server error" });
  }
}
