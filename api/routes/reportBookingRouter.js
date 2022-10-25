import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getBooking= await pool.query("select booking_id , sname, cname,madedate,madetime,date,time ,type ,location ,userid_c,userid_s,package_id,amount,status from booking ,(select userid as suid, name as sname , booking_id as sbookid   from users, booking where users.userrole='sp' and users.userid = booking.userid_s) as sp, (select userid as cuid, name as cname ,booking_id as cbookid from users,booking where userrole='cs' and users.userid = booking.userid_c) as cus where cus.cbookid = booking.booking_id and sp.sbookid = booking.booking_id and ( booking.status = '2' or booking.status = '3') ;")

        res.json(getBooking.rows);
    }
    catch(err){
        console.log(err.message);
    }
})


router.get('/:id',async (req,res)=>{
    try{
        const { id } = req.params;
        const getBooking= await pool.query("select booking_id , sname, cname,madedate,madetime,date,time ,type ,location ,userid_c,userid_s,package_id,amount,status from booking ,(select userid as suid, name as sname , booking_id as sbookid   from users, booking where users.userrole='sp' and users.userid = booking.userid_s) as sp, (select userid as cuid, name as cname ,booking_id as cbookid from users,booking where userrole='cs' and users.userid = booking.userid_c) as cus where cus.cbookid = booking.booking_id and sp.sbookid = booking.booking_id and ( booking.status = '2' or booking.status = '3')and booking.userid_s = $1;",[id])

        res.json(getBooking.rows);
    }
    catch(err){
        console.log(err.message);
    }
})



export default router;