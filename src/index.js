// this will work but it is not consistent with the rest of the code
// require("dotenv").config({ path: "./env" });
//  -r dotenv/config --experimental-json-modules (--experimental-specifier-resolution=node)
import dotenv from "dotenv";
import connectToDatabase from "./db/indexDB.js";
import app from "./app.js";

dotenv.config({ path: "./env" });

connectToDatabase()
// this will give us a promise
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Express is running on port ${process.env.PORT || 8000}`);
  });
})
.catch((err) => {
  console.log("Error connecting to MongoDB");
  console.error(err);
  process.exit(1);
});

// everything in this file is just for testing purposes
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// // express app
// import express from "express";
// const app = express();

// // Connect to MongoDB
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     app.on("error", (error) => {
//       console.error("Express is encouter Error connecting to MongoDB", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Express is running on port ${process.env.PORT}`);
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Mongoose encounter Error connecting to MongoDB", error);
//     throw error;
//   }
// })();

/* =======================================code by chatGPT
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants";

const app = express();

(async () => {
  try {
    // Check if required environment variables are provided
    if (!process.env.MONGODB_URI || !process.env.PORT) {
      throw new Error("Please provide MONGODB_URI and PORT in environment variables.");
    }

    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
    });

    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    app.listen(process.env.PORT, () => {
      console.log(`Express is running on port ${process.env.PORT}`);
    });

    app.on("error", (error) => {
      console.error("Express encountered an error:", error);
    });

  } catch (error) {
    console.error("Error:", error.message);
    // You might want to handle this error more gracefully, perhaps by shutting down the server
    process.exit(1);
  }
})();
  ======================================= */
