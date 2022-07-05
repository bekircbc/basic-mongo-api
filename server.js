import express from "express";
import mongoose from "mongoose";
import { Book } from "./models/Book.js";

const app = express();
const port = 3025;

app.use(express.json());

mongoose.connect("mongodb://localhost/bookapi");

app.get("/", (req, res) => {
  res.send("<h1>Book API</h1>");
  // console.log(req.url);
});

//sending data to bookapi

// app.post("/book", async (req, res) => {
//   const book = new Book({
//     title: "ttt",
//     description: "ddd",
//     numberOfPages: 999,
//   });
//   await book.save();
//   console.log("book created: " + new Date());
//   res.status(200).json({
//     message: "book was created",
//   });
// });

//posting data

app.post("/book", async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(200).json({ message: "added book", book });
});

//getting books data

app.get("/book", async (req, res) => {
  const books = await Book.find();
  res.status(200).json({ message: "fetched all books", books });
});

//getting a book with id

app.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  const book = await Book.findOne({ id });
  res.status(200).json({ message: "fetched book with id " + id, book });
});

//putting data

//patching data from

//deleting data from

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
