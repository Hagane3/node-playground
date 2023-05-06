const express = require("express");

// express app

const app = express();

app.get("/", (req, res) => {
  //   res.send("<p>home page</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./views/contact.html", { root: __dirname });
});

app.get("/contact-us", (req, res) => {
  res.redirect("/contact");
});

app.listen(3000);
