import express from "express";

const app = express();
const port = 3678;

app.get("/", (req, res) => {
  res.send("<h1>Book API</h1>");
  // console.log(req.url);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
