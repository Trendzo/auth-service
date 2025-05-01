const mongoose = require('mongoose');
require('dotenv').config();  // Ensures that .env is loaded

const connectDB = async () => {
  try {
    // Using Mongoose to connect to MongoDB using the URI from .env
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process with failure if the connection fails
  }
};

module.exports = connectDB;
