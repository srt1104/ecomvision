import dotenv from "dotenv";
import mongoose from "mongoose";

import User from "../models/User.js";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Transaction from "../models/Transaction.js";
import OverallStat from "../models/OverallStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
} from "./data.js";

dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URL, {
    dbName: "ecomvision",
  });

  /**
   * ADD THE FOLLOWING DATA ONLY ONCE
   */
  // await User.insertMany(dataUser);
  // await Product.insertMany(dataProduct);
  // await ProductStat.insertMany(dataProductStat);
  // await Transaction.insertMany(dataTransaction);
  // await OverallStat.insertMany(dataOverallStat);
} catch (err) {
  console.log(err);
} finally {
  mongoose.disconnect();
}
