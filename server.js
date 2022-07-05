import express from "express";
import mongoose from "mongoose";
import { Book } from "./models/Book.js";

const app = express();
const port = 3025;

mongoose.connect("mongodb://localhost/bookapi");

app.get("/", (req, res) => {
  res.send("<h1>Book API</h1>");
  // console.log(req.url);
});

app.post("/book", async (req, res) => {
  const book = new Book({
    title: "ttt",
    description: "ddd",
    numberOfPages: 999,
  });
  await book.save();
  console.log("book created: " + new Date());
  res.status(200).json({
    message: "book was created",
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
