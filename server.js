const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel')
const app = express();

app.use(express.json());

//routes

app.get('/products', async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


app.post('/products', async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);

       } catch (error) {
        console.log(error.message);
         res.status(500).json({ message: error.message });
    }
  });

  // Update a product

  app.put('/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);

      // We cannot find any product in the database
      if (!product) {
        return res.status(400).json({ message: `Cannot find any product with ID ${id}` });
      }

      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

//Delect the product

app.delete('/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).json({ message: `Cannot find the product with ID ${id}` });
      }
      res.status(200).json();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });









mongoose
    .connect('mongodb+srv://ayushchalise93:Ayush321XXEEt@nodeapi.fp0d1ag.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3000, () => {
            console.log('Node API is running on port 3000');
        });

        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log(error);
    });
