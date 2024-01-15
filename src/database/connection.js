const mongoose = require("mongoose");
require("dotenv").config();

const connectToDatabase = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    await mongoose.connect(uri);
    console.log("MongoDB connection stablished");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
