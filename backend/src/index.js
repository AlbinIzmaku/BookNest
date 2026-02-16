import express, { response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Book from "./models/bookModel.js";
import booksRoutes from "./routes/booksRoutes.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/books", booksRoutes);

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.error(error);
  });
