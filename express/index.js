const express = require('express');
const app = express();
const init = require("./init");
const { PORT } = require("./defaults");
const Product = require("./models/Product");
const cors = require("cors");

app.use(cors({
  origin: ["http://localhost:4200"],
  credentials: false,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));

app.get('/api', function (req, res) {
  res.send('Angular playground backend')
});

app.get('/api/products', async function (req, res) {
  try {
    const products = await Product.findAll();
    console.log(products);
    res.send(products);
  }catch (e) {
    throw new Error(e);
  }
});

app.listen(PORT, init);

module.exports = {
  app
};