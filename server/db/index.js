import dotenv from "dotenv";
import mongoose from "mongoose";

import User from "../models/User.js";
import { dataUser } from "./data.js";

dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URL, {
    dbName: "ecomvision",
  });

  // ADD DATA ONLY ONCE
  await User.insertMany(dataUser);
} catch (err) {
  console.log(err);
} finally {
  mongoose.disconnect();
}
