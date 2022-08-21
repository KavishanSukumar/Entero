const express=require('express');
const router=express.Router();
const pool=require("../db");

router.get('/',async (req,res)=>{
    try{
        
        const getContact= await pool.query("SELECT * FROM contact")

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
        const newContact= await pool.query("INSERT INTO contact (name,email,message,date,time) VALUES ($1,$2,$3,CURRENT_DATE,CURRENT_TIME) RETURNING *",[name,email,message])

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
        const updateContact= await pool.query("UPDATE contact SET name=$1,email=$2,message=$3 WHERE contact_id=$4",[name,email,message,id])

        res.json("Done updating");
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

module.exports= router