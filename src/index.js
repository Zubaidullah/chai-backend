import mongoose from "mongoose";
import { DB_NAME } from "./constants";

// express app
import express from "express";
const app = express();

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.on("error", (error) => {
      console.error("Express is encouter Error connecting to MongoDB", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Express is running on port ${process.env.PORT}`);
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Mongoose encounter Error connecting to MongoDB", error);
    throw error;
  }
})();
