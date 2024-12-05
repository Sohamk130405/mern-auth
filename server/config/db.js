const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => {
      console.error("MongoDB connection failed:", error.message);
      process.exit(1);
    });
};
module.exports = connectDB;
