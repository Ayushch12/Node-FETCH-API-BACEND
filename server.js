const connectDB = require('./mongoDB/db');
const Product = require('./models/productModel');
const productRoutes = require('./routes/productModel');
const express = require('express');

const app = express();
app.use(express.json());

// Define routes and other middlewaer
connectDB().then(() => {
  app.listen(3000, () => {
    console.log('Node API is running on port 3000');
  });
});

app.use('/products', productRoutes);






