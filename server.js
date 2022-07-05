import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/bookapi");

const app = express();
const port = 3678;

app.get("/", (req, res) => {
  res.send("<h1>Book API</h1>");
  // console.log(req.url);
});

app.get("/book", (req, res) => {
  res.status(200).json({
    message: "book was created",
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
