import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";

const router = express.Router();


router.get('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        
        const getUserProfile= await pool.query("SELECT name,email,contact_number,address,image FROM users WHERE userid=$1",[id])

        res.json(getUserProfile.rows[0])
    }
    catch(err){
        console.log(err.message);
    }
})

router.get('/image/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        console.log(req.params);
        const getUserProfileImage= await pool.query("SELECT image FROM users WHERE userid=$1",[id])

        res.json(getUserProfileImage.rows[0]);
    }
    catch(err){
        console.log(err.message);
    }
})


router.put('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const {name,contactNum,address}=req.body;
        const updateProfile= await pool.query("UPDATE users SET name=$1,contact_number=$2,address=$3 WHERE userid=$4 RETURNING *",[name,contactNum,address,id])

        res.json({message:"Update succesful"});
    }
    catch(err){
        console.log(err.message);
    }
})

router.put('/password/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const {currentPassword,newPassword}=req.body;
        
    
        console.log(currentPassword,newPassword)
        const getpassword=await pool.query("SELECT password FROM users WHERE userid=$1",[id])
        const validPassword = await bcrypt.compare(currentPassword, getpassword.rows[0].password);
        if(validPassword){
            const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(newPassword, salt);
    const updateProfile= await pool.query("UPDATE users SET password=$1 WHERE userid=$2",[bcryptPassword,id])
            return res.json({message:"Password updated"});
        }
        

        res.json({message:"Password not updated"});
    }
    catch(err){
        console.log(err.message);
    }
})



export default router;