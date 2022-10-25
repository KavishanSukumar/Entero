import express from "express";
import pool from "../db.js";
import bad_words_filter from "../utils/bad_words_filter.js";
import mailSender from "../utils/mail-helpers.js";

const router = express.Router();

router.get("/serviceprovider/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const getReview = await pool.query(
      "select review.review_id as review_id, review.date as date, review.time as time, review.rating as rating, review.content as content, review.userid_c as userid_c, review.userid_s as userid_s, review.booking_id as booking_id, users.name as name, users.image as image   from review LEFT JOIN users ON review.userid_c =users.userid  where userid_s=$1",
      [id]
    );

    res.json(getReview.rows);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/serviceprovider/reviewcount/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const getReview = await pool.query(
      "select ROUND(AVG(rating),1) as average FROM review where userid_s=$1",
      [id]
    );

    res.json(getReview.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { rateValue, message, userid_c, userid_s, booking_id } = req.body;

    let checkMessage = await bad_words_filter(message);

    if (checkMessage) {
      const x = new Date();
      const date =
        x.getFullYear() + "-" + (x.getMonth() + 1) + "-" + x.getDate();
      const time = x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
      let rating = parseInt(rateValue);
      console.log(rating);
      const newReview = await pool.query(
        "INSERT INTO review (date,time,rating,content,userid_c,userid_s,booking_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
        [date, time, rating, message, userid_c, userid_s, booking_id]
      );

      console.log(newReview.rows[0]);
      const customerEmail = await pool.query(
        "SELECT email FROM users WHERE userid=$1",
        [newReview.rows[0].userid_c]
      );
      console.log(customerEmail.rows[0]);

      const subject = "Review sent";
      const html = "<p>We will let you know when your booking is accepted.</p>";
      const mail = await mailSender(customerEmail.rows[0].email, subject, html);

      res.status(200).send({ message: "Review sent" });
    } else {
      return res.status(200).send({
        message:
          "Warning! This review contains word that has been blocked by the system. Please change your review.",
      });
    }
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const getReview = await pool.query(
      "SELECT * FROM review WHERE booking_id=$1",
      [id]
    );

    //review exist or not
    if (getReview.rows.length !== 0) {
      return res.json({ status: true, reviewData: getReview.rows[0] });
    }
    return res.json({ status: false });
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { rateValue, message, userid_c, userid_s, booking_id } = req.body;
    console.log(req.body);
    let checkMessage = await bad_words_filter(message);

    console.log(checkMessage);

    if (checkMessage) {
      const x = new Date();
      const date =
        x.getFullYear() + "-" + (x.getMonth() + 1) + "-" + x.getDate();
      const time = x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
      let rating = parseInt(rateValue);
      console.log(rating);
      const updateReview = await pool.query(
        "UPDATE review SET date=$1,time=$2,rating=$3,content=$4 where booking_id=$5 RETURNING *",
        [date, time, rating, message, booking_id]
      );

      const customerEmail = await pool.query(
        "SELECT email FROM users WHERE userid=$1",
        [updateReview.rows[0].userid_c]
      );

      const subject = "Review updated";
      const html = `<p>We will let you know when your booking is accepted.</p><br><p>${updateReview.rows[0].content}</p>`;
      const mail = await mailSender(customerEmail.rows[0].email, subject, html);

      res.status(200).send({ message: "Review updated" });
      res.status(200).send({ message: "Review updated" });
    } else {
      res.status(200).send({
        message:
          "Warning! This review contains word that has been blocked by the system. Please change your review.",
      });
    }
  } catch (err) {
    console.log(err.message);
  }
});

export default router;
