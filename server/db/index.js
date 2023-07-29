import dotenv from "dotenv";
import mongoose from "mongoose";

import User from "../models/User.js";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import { dataUser, dataProduct, dataProductStat } from "./data.js";

dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URL, {
    dbName: "ecomvision",
  });

  // ADD DATA ONLY ONCE
  // await User.insertMany(dataUser);
  // await Product.insertMany(dataProduct);
  // await ProductStat.insertMany(dataProductStat);
} catch (err) {
  console.log(err);
} finally {
  mongoose.disconnect();
}
