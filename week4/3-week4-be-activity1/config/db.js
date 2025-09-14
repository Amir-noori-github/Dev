const mongoose = require("mongoose");

const connectDB = async () => {
  // const conn = await mongoose.connect("mongodb://localhost:27017/week4-be");
   const conn = await mongoose.connect("mongodb+srv://stadinkoulu_db_user:Ukl8r2urWCWSsusI@cluster0.pkjcd48.mongodb.net/web-dev");
  console.log(`Connected to database`);
};
 
module.exports = connectDB;
 