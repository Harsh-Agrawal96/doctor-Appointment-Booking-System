import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try{
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI)
    .then(() => console.log("Connected to MongoDB Atlas successfully."))
    .catch(err =>{
       console.error("Connection error:", err);
      } );

  }catch(err){
    console.error('Error connecting to MongoDB:', err.message);
  }
}


export default connectDB;
