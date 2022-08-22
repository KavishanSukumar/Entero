import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getContact= await pool.query("SELECT * FROM contact ORDER BY received_time DESC")

        res.json(getContact.rows);
    }
    catch(err){
        console.log(err.message);
    }
})

// router.get('/:id',async (req,res)=>{
//     try{
//         const {id}=req.params;
//         console.log(req.params);
//         const getARecipe= await pool.query("SELECT * FROM contact WHERE contact_id=$1",[id])

//         res.json(getARecipe.rows[0]);
//     }
//     catch(err){
//         console.log(err.message);
//     }
// })

router.post('/',async (req,res)=>{
    try{
        const {name,email,message}=req.body;
        const newContact= await pool.query("INSERT INTO contact (name,email,message,received_time) VALUES ($1,$2,$3,LOCALTIMESTAMP) RETURNING *",[name,email,message])

        res.json(newContact.rows[0]);
    }
    catch(err){
        console.log(err.message);
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const {reply}=req.body;
        const updateContact= await pool.query("UPDATE contact SET reply=$1,reply_time=LOCALTIMESTAMP WHERE contact_id=$2 RETURNING *",[reply,id])

        res.json(updateContact.rows[0]);
    }
    catch(err){
        console.log(err.message);
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const deleteContact= await pool.query("DELETE FROM contact WHERE contact_id=$1",[id])

        res.json("Done deleting");
    }
    catch(err){
        console.log(err.message);
    }
})

export default router;