// fetch-and-store-products.js
const axios = require('axios');
const mongoose = require('mongoose');
const db = require('./db'); // Connect to the database
const Product = require('./models/Product'); // Adjust the path

async function fetchAndStoreProducts() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const productsData = response.data;

    const productsToInsert = productsData.map(product => ({
      name: product.title,
      description: product.description,
      price: product.price,
      imageUrl: product.image,
    }));

    await Product.insertMany(productsToInsert);

    console.log('Product data inserted successfully');
  } catch (error) {
    console.error('Error fetching and storing product data:', error);
  } finally {
    mongoose.disconnect();
  }
}

fetchAndStoreProducts();
