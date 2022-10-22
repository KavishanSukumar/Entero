import express from "express";
import pool from "../db.js";
import multer from "multer";
import fs from "fs-extra"

const router = express.Router();



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let { id } = req.params;
        let path = `./sp_portfolio_images/${id}`;
        fs.mkdirsSync(path);
        cb(null,path);
        console.log('image in storage');
    },
    filename: (req, file, cb) => {
        const { id } = req.params;
        cb(null, id + '--' + Date.now() + "--" + file.originalname);
    }
})





const upload = multer({ storage });

router.post('/:id', upload.single("image"), async (req, res) => {
    try {
        const { id } = req.params;
        console.log('user id -' + id);
        console.log(req.file);
        res.send(req.file);

    } catch (error) {
        console.log('error in uploading image');
    }
});

router.get('/', async (req, res) => {
    try {
        // const { id } = req.params;
        // console.log('user id -' + id);
        // console.log(req.file);
        res.send("got images");

    } catch (error) {
        console.log('error in getting image');
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
  
    try {
        const filenames = fs.readdirSync('sp_portfolio_images/'+id);
          
        res.send(filenames);

    } catch (error) {
        console.log('error in getting image');
        console.log(error);
    }
});



router.delete('/:id/:filename', async (req, res) => {
    const { id,filename } = req.params;
  
    try {
       fs.removeSync('sp_portfolio_images/'+id+'/'+filename, err => {
            if (err) return console.error(err)
            console.log('success!')
          })
       
        res.send("success");

    } catch (error) {
        console.log('error in deleting image');
    }
});


export default router;