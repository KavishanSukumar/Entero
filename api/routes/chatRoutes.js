import express from "express";
import pool from "../db.js";

const router = express.Router();

//new conversation
router.post("/", async (req, res) => {
  const { senderId, receiverId } = req.body;
  try {
    const newConversation = await pool.query(
      "INSERT INTO conversation (sender_id, receiver_id) VALUES($1, $2) RETURNING *",
      [senderId, receiverId]
    );
    res.json(newConversation.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get conversation of a user

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const userConversation = await pool.query(
      "SELECT * FROM conversation WHERE sender_id = $1 OR receiver_id = $1",
      [userId]
    );
    res.json(userConversation.rows);
  } catch (err) {
    console.error(err.message);
  }
});

export default router;
