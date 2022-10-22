import express from "express";
import pool from "../db.js";

const router = express.Router();

//new message
router.post("/", async (req, res) => {
  const { conversation_id, sender_id, message, date, time } = req.body;
  try {
    const newMessage = await pool.query(
      "INSERT INTO message (conversation_id, sender_id, message,date, time) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [conversation_id, sender_id, message, date, time]
    );
    res.json(newMessage.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get messages
router.get("/:conversationid", async (req, res) => {
  const { conversationid } = req.params;
  try {
    const messages = await pool.query(
      "SELECT * FROM message WHERE conversation_id = $1 ORDER BY date ASC, time ASC",
      [conversationid]
    );
    res.json(messages.rows);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/:conversationid", async (req, res) => {
  const { conversationid } = req.params;
  try {
    const updateMessage = await pool.query(
      "UPDATE message SET status = true WHERE conversation_id = $1",
      [conversationid]
    );
    res.json("Message was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

export default router;
