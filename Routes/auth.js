import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("AUTH ENDPOINT");
});

export default router;
