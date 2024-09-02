const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/todo-list', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
   console.log('MongoDB database connection established successfully');
});

// Import the routes
const tasksRouter = require('./routes/tasks');

// Use the routes
app.use('/tasks', tasksRouter);

// Start the server
app.listen(port, () => {
   console.log(`Server is running on port: ${port}`);
});
