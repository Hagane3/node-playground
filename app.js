const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes");
const aboutRoutes = require("./routes/aboutRoutes");

// express app
const app = express();

// connect to mongodb

const dbURI =
  "mongodb+srv://user:user123@nodetuts.qwl7sbq.mongodb.net/node-tuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => res.redirect("/blogs"));

app.use(aboutRoutes);

app.use("/blogs", blogRoutes);

// mongoose and mongo sandbox routes

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
