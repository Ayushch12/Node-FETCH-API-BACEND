// //Importing mongoDB :
// //Importing express :

// const connectDB = require('./mongoDB/db');
// const productRoutes = require('./routes/productRoutes');
// const express = require('express');

// const app = express();
// app.use(express.json());

// // Définir les routes et autres middleware :
// connectDB().then(() => {
//   app.listen(3000, () => {
//     console.log('Node API is running on port 3000');
//   });
// });

// app.use('/products', productRoutes);



// Importing MongoDB and other required packages:
const connectDB = require('./mongoDB/db');
const productRoutes = require('./routes/productRoutes');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const jwt = require('jsonwebtoken');
const { applyMiddleware, createStore } = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const { authenticateToken } = require('./middleware/auth');

const app = express();
app.use(express.json());

// Create a server with http for socket.io:
const server = http.createServer(app);
const io = socketIO(server);

// Define the routes and other middleware:
connectDB().then(() => {
  server.listen(3000, () => {
    console.log('Node API is running on port 3000');
  });
});

// Apply Redux middleware:
const store = createStore(() => {}, applyMiddleware(thunkMiddleware));

// Socket.io configuration:
io.use((socket, next) => {
  if (socket.handshake.query && socket.handshake.query.token) {
    jwt.verify(socket.handshake.query.token, ' secretKey', (err, decoded) => {
      if (err) return next(new Error('Authentication error'));
      socket.decoded = decoded;
      next();
    });
  } else {
    next(new Error('Authentication error'));
  }
}).on('connection', (socket) => {
  console.log('New socket connection:', socket.id);
  // Handle socket events here
});

// Middleware to include authentication token in request headers
app.use((req, res, next) => {
  const token = req.header('Authorization');
  if (token) {
    req.headers.authorization = token;
  }
  next();
});

app.use('/products', authenticateToken, productRoutes);

module.exports = app;
