const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect("mongodb://localhost:27017/web-dev");
    const conn = await mongoose.connect("mongodb+srv://stadinkoulu_db_user:Ukl8r2urWCWSsusI@cluster0.pkjcd48.mongodb.net/web-dev");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
 