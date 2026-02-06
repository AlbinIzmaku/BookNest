import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
console.log(app);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
