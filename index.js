const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());
const categories = require("./data/Categories.json");

app.get("/", (req, res) => {
  res.send("courses api running");
});

app.get("/courses-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => console.log("courses server running on port ", port));
