const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT | 3000;

app.use(express.static(path.join(__dirname, "pages")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "about.html"));
});
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "contact-me.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "page", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
