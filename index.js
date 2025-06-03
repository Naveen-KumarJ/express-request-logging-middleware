const express = require("express");
const requestLogger = require("./requestLogger");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.get("/", (req, res) => res.send("Welcome to HomePage!"));
app.get("/about", (req, res) => res.send("About Us Page"));
app.post("/submit", (req, res) =>
  res.json({ message: "Data Recieved", data: req.body })
);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
