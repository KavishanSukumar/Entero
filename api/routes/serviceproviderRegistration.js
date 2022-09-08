import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";

const router = express.Router();
router.post("/");

export default router;
