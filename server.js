//Importing mongoDB :
//Importing express :

const connectDB = require('./mongoDB/db');
const productRoutes = require('./routes/productRoutes');
const express = require('express');

const app = express();
app.use(express.json());

// Définir les routes et autres middleware :
connectDB().then(() => {
  app.listen(3000, () => {
    console.log('Node API is running on port 3000');
  });
});

app.use('/products', productRoutes);






