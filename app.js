const { response } = require("express");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

products = ["shirt", "pants", "shoes", "sweater", "scarf"];

// Logging Middleware
app.use(morgan("dev"));

// Static Middleware
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("hello again");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  console.log("this is req.params", req.params);
  const index = req.params.id - 1;
  const product = products[index];
  res.send(`${product} 
  <div>
  <img src="/${product}.jpeg">
  </div>`);
});

app.listen(1234);
