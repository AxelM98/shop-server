import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productsRoute from "./Routes/products.js";
import stripeRoute from "./Routes/stripe.js";
import cors from "cors";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.SECRET_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("CONNECTED TO MONGODB");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MONGODB DISCONNECTED");
});

app.get("/", (req, res) => {
  res.send("REQ");
});

// MIDDLEWARES
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRoute);
app.use("/api/checkout", stripeRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "SOMETHING WENT WRONG";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(1112, () => {
  connect();
  console.log("CONNECTED TO BACKEND");
});
