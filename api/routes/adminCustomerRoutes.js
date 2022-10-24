import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getCustomer= await pool.query("SELECT users.userid,users.name,users.address,users.email,users.image,users.contact_number,customer.status FROM users INNER JOIN customer ON users.userid=customer.userid WHERE users.userrole='cs' ORDER BY users.name")

        res.json(getCustomer.rows);
    }
    catch(err){
        console.log(err.message);
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        
        const getCustomer=await pool.query("SELECT status FROM customer WHERE userid=$1",[id])
        if(getCustomer.rows[0].status==='a'){
            const updatecustomer= await pool.query("UPDATE customer SET status='d' WHERE userid=$1 RETURNING *",[id])
        }else{
            const updatecustomer= await pool.query("UPDATE customer SET status='a' WHERE userid=$1 RETURNING *",[id])
        }
        

        res.json({message:"Status updated"});
    }
    catch(err){
        console.log(err.message);
    }
})

export default router;