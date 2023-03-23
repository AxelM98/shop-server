import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllMenProducts,
  getAllProducts,
  getProduct,
  updateProduct,
} from "./../Controllers/productController.js";

const router = express.Router();

// CREATE
router.post("/", createProduct);
// UPDATE
router.put("/:id", updateProduct);
// DELETE
router.delete("/:id", deleteProduct);
// GET
router.get("/find/:id", getProduct);
// GET ALL
router.get("/", getAllProducts);
router.get("/men", getAllMenProducts);

export default router;
