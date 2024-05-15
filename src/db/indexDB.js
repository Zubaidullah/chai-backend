import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDatabase = async () => {
  try {
    const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(
      `\n Connected to MongoDB SUCCESSFULLY !! DataBaseName: ${connectInstance.connection.name} \n`
    );
  } catch (error) {
    console.error("Error connecting to MongoDB FAILDED!!!!:", error.message);
    process.exit(1);
  }
};

export default connectToDatabase;
console.log(process.env.MONGODB_URI)
