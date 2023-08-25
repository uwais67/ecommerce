// routes/products.js
const express = require('express');
const db = require('../db');
const router = express.Router();
const Product = require('../models/product');

// router.get('/products', (req, res) => {
//     res.render('product'); // Assuming your EJS template is named "product.ejs"
//   });
// Product listing route
router.get('/products', async (req, res) => {
  const product = await Product.find();
  res.render('product', { product });
});

// // Product detail route
// router.get('/product/:id', async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   res.render('product-detail', { product });
// });

// // Add product to cart
// router.post('/add-to-cart/:id', (req, res) => {
//   // Logic to add the selected product to the shopping cart
//   // You can store cart data in sessions or a database
// });

module.exports = router;
