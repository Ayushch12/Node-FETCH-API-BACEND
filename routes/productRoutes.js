//Importing Express :
const express = require('express');

//Appelez Express pour créer le routeur de chaque midellware :
const router = express.Router();

//Importing a productmodels de models :
const Product = require('../models/productModel');

//Routes CRUD

// Obtenir tous les produits
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Créer un nouveau produit
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mettre à jour un produit
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(400).json({ message: `Impossible de trouver un produit avec ID ${id}` });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Supprimer un produit
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: `Impossible de trouver un produit avec ID ${id}` });
    }

    res.status(200).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Exportation routes :
module.exports = router;
