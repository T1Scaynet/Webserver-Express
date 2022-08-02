const express = require("express");
const hbs = require("hbs");

const app = express();
const port = 3000;

// middleware Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// middleware servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Coffee Shop",
    message: "Welcome to my website",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    title: "Coffee Shop",
    message: "Welcome to my website",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    title: "Coffee Shop",
    message: "Welcome to my website",
  });
});

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html');
// });

app.get("*", (req, res) => {
  res.send("404 | Page not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
