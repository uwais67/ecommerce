const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('./passport'); // Import your passport.js configuration
const authRoutes = require('./routes/auth'); // Import auth routes
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart'); // Import cart routes
const app = express();

// Set the 'views' directory for EJS templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use express-session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Use auth routes
app.use('/', (req, res) => {
  res.render('home'); // Render home
 });
app.use('/', authRoutes);
// Other middleware and routes can be added here
app.use('/products', productRoutes); // Use product routes
app.use('/cart', cartRoutes); // Use cart routes
// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

