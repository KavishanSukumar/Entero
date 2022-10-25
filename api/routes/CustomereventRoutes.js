import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/",async (req,res)=>{
    try{
        
       // const getCustomerEvent= await pool.query("SELECT * FROM users INNER JOIN service_provider ON service_provider.userid=users.userid");
         //const getCustomerEvent= await pool.query("select sp.userid, name, refreshment, decoration, hallservices,photography,birthday,reception,wedding,engagement,other,status,rating from users u, service_provider sp, review r where u.userid = sp.userid and sp.userid = r.userid_s ORDER BY rating;");
          // const getCustomerEvent= await pool.query("select sp.userid, name, refreshment, decoration, hallservices,photography,birthday,reception,wedding,engagement,other,status,AVG(rating) as avgrating from users u, service_provider sp, review r where u.userid = sp.userid and sp.userid = r.userid_s GROUP BY userid_s ORDER BY avgrating ASC;");
       
       // const getCustomerEvent= await pool.query("SELECT * FROM users INNER JOIN service_provider ON service_provider.userid=users.userid");
       
       
     //  const getCustomerEvent= await pool.query("SELECT * FROM users INNER JOIN service_provider ON service_provider.userid=users.userid");  
     const getCustomerEvent= await pool.query("select sp.userid as userid, u.name as name, refreshment, decoration,hallservices,photography,birthday,reception,wedding,engagement,other,status,AVG(rating) from users u, service_provider sp, review r where u.userid = sp.userid and sp.userid = r.userid_s GROUP BY sp.userid, u.name ORDER BY AVG(rating) DESC;"); 
       res.json(getCustomerEvent.rows);
    }
    catch(err){
        console.log(err.message);
    };
});


























export default router;