// routes/cart.js
const express = require('express');
const router = express.Router();

// View shopping cart
router.get('/cart', (req, res) => {
  // Fetch cart data and render the cart view
  res.render('cart', { cart: req.session.cart });
});

// Add item to cart
router.post('/add-to-cart/:id', (req, res) => {
  const productId = req.params.id;
  // Logic to add the selected product to the cart
  // Update the cart data stored in the session
  res.redirect('/products');
});

// Update item quantity in cart
router.post('/update-cart/:id', (req, res) => {
  const productId = req.params.id;
  const newQuantity = req.body.quantity;
  // Logic to update the quantity of a product in the cart
  // Update the cart data stored in the session
  res.redirect('/cart');
});

// Remove item from cart
router.post('/remove-from-cart/:id', (req, res) => {
  const productId = req.params.id;
  // Logic to remove a product from the cart
  // Update the cart data stored in the session
  res.redirect('/cart');
});

module.exports = router;
