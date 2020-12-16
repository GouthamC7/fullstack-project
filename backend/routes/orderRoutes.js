// const express = require("express");
// const router = express.Router();
// const {
//   addOrderItems,
//   getOrderByID,
//   updateOrderToPaid,
// } = require("../controllers/orderController");
// const { protect } = require("../middleware/authMiddleware");

import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router;
