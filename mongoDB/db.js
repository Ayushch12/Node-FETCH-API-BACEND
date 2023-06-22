//Importation de Mongoose:
const mongoose = require('mongoose');


//Conection de mongoDB à l'API grâce à mongoose :
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://ayushchalise93:Ayush321XXEEt@nodeapi.fp0d1ag.mongodb.net/Node-API?retryWrites=true&w=majority');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

//Exportation mangoose :
module.exports = connectDB;
