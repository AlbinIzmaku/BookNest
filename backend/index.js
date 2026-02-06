import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.error(error);
  });
