import express from "express";
import pool from "../db.js";
import bcrypt from "bcrypt";
import upload from "../middleware/files.js";
import fs from "fs"

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
        console.log(validPassword)
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

router.put('/image/:id',upload.single("file"),async (req,res)=>{
    try {
        const {id}=req.params;
        const profilePic=req.filename;

        const checkProfilePic=await pool.query("SELECT image FROM users WHERE userid=$1", [
            id
          ]);
          const path="./files/profilePics/"+checkProfilePic.rows[0].image
          if(checkProfilePic.rows[0].image===null){
                console.log("new pic")
              const updatePic=await pool.query("UPDATE users SET image=$1 WHERE userid=$2",[profilePic,id])
          }else{
            fs.unlink(path, (err => {
                if (err) console.log(err);
                else {
                  console.log(checkProfilePic.rows[0].image+"deleted successfully");
                }
              }))
            console.log("woow ")
            const updatePic=await pool.query("UPDATE users SET image=$1 WHERE userid=$2",[profilePic,id])
          }
    } catch (error) {
        console.log(error.message)
    }
})

router.put('/image/remove/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const checkProfilePic=await pool.query("SELECT image FROM users WHERE userid=$1", [
            id
          ]);
          const path="./files/profilePics/"+checkProfilePic.rows[0].image
          fs.unlink(path, (err => {
            if (err) console.log(err);
            else {
              console.log(checkProfilePic.rows[0].image+"deleted successfully");
            }
          }))

        const deleteProfilePic=await pool.query("UPDATE users SET image=null WHERE userid=$1", [
            id
          ]);

        
    } catch (error) {
        console.log(error.message)
    }
})



export default router;