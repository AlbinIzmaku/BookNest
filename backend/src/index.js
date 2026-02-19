import express, { response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Book from "./models/bookModel.js";
import booksRoutes from "./routes/booksRoutes.js";
import cors from "cors";
import path from "path";

dotenv.config();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

app.use("/books", booksRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get((req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
