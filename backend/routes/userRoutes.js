// const express = require("express");
// const router = express.Router();
// const {
//   authUser,
//   getUserProfile,
//   registerUser,
//   getUsers,
// } = require("../controllers/UserController");
// const { protect, admin } = require("../middleware/authMiddleware");

import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  getUsers,
} from "../controllers/UserController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
