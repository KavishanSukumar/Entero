import express from "express";
import pool from "../db.js";


const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getallpackages= await pool.query("SELECT * FROM sub_package ORDER BY sub_packageid ASC;");

        res.json(getallpackages.rows);
    }
    catch(err){
        console.log(err.message);
        console.log('this is aerror message');
    }
})


router.put('/:sub_packageid', async(req,res)=>{
    try {
        const {sub_packageid}=req.params;
        const {name,price,des} = req.body;
        const updatepackage = await pool.query("update sub_package set name=$1, price=$2, des=$3 where sub_packageid=$4 RETURNING *" , [name,price,des,sub_packageid]);
        res.json(updatepackage.rows[0]);
        console.log('successfully updated the package (from paymentRoutes)');
        
    } catch (error) {
      console.log(error.message)
      console.log('error in updating package (from paymentRoutes)');
    }
})

export default router;