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
