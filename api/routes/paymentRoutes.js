import express from "express";
import pool from "../db.js";


const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getallpackages= await pool.query("SELECT * FROM adminpackages ORDER BY id ASC;");

        res.json(getallpackages.rows);
    }
    catch(err){
        console.log(err.message);
    }
})


router.put('/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        const {name,price,des} = req.body;
        const updatepayment = await pool.query("update adminpackages set name=$1, price=$2, des=$3 where id=$4 RETURNING *" , [name,price,des,id]);
        res.json(updatepayment.rows[0]);
        
    } catch (error) {
      console.log(error.message)
    }
})

export default router;