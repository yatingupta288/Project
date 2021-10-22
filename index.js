require("dotenv").config();
const notes = require("./data/notes");

const express = new require("express");
const mongoose = new require("mongoose");
// const bodyParser = new require("body-parser");
const app = express();
const note = new require("./data/notes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Displaying the first page");
});

app.get("/api/note", function (req, res) {
  res.send(note);
});

app.get("/api/note/:id", function (req, res) {
  const index = req.params.id;
  const arr = note.filter(function (Snote, idx) {
    return Snote._id === index;
  });

  res.send(arr);
});

let port = process.env.PORT;
console.log(process.env.PORT);
if (port === "" || port === null) {
  port = 3000;
}
app.listen(port, function () {
  console.log("Sever Started Sucessfully");
});
// app.set(, view Engine);
