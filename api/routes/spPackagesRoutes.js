import express from "express";
import pool from "../db.js";
const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        
        const getallpackages = await pool.query("SELECT * FROM sp_packages ORDER BY package_id ASC;");

        res.json(getallpackages.rows);
    }
    catch(err){
        console.log(err.message);
        console.log('this is aerror message');
    }
})



router.get('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
        const getallpackages = await pool.query("SELECT * FROM sp_packages WHERE uid=$1 ORDER BY package_id ASC;",[id]);

        res.json(getallpackages.rows);
    }
    catch(err){
        console.log(err.message);
        console.log('this is aerror message');
    }
})


router.put('/', async(req,res)=>{
    try {
        
        const {packname1, packdes1, packprice1, itemList1, userid ,thepackageid} = req.body;
        const updatepackage = await pool.query("update sp_packages set    name=$1,  des=$2,  price=$3 , items=$4  where package_id=$5 RETURNING *" , [packname1, packdes1, packprice1, itemList1,thepackageid]);
        res.json(updatepackage.rows[0]);
        console.log('successfully updated the package (from sp packs)');
        
    } catch (error) {
      console.log(error.message)
      console.log('error in updating package (from sp packs)');
    }
})

router.post('/',async (req,res)=>{
    try{
        const {packname,packdes,packprice,itemList,userid}=req.body;
        // console.log(packname+' '+packdes+' '+packprice+' '+itemList+' '+userid);
        const newpackage= await pool.query("INSERT INTO sp_packages (name,des,price,items,userid) VALUES ($1,$2,$3,$4,$5) RETURNING *",[packname,packdes,packprice,itemList,userid])
        console.log('successfully insert the package (from sp packs)');
        res.json(newpackage.rows[0]);
    }
    catch(err){
        console.log('error in inserting package (from sp packs)');
        console.log(err.message);
    }
})


router.delete("/:packid", async (req, res) => {
    try {
      const { packid } = req.params;
      const deleteAppointment = await pool.query(
        "DELETE FROM sp_packages WHERE package_id=$1",
        [packid]
      );
  
          res.json("Done deleting the package");
      }
      catch(err){
        console.log('error in deleting the package (from sp packs)');
          console.log(err.message);
      }
  })

export default router;