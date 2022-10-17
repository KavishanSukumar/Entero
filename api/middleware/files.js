import multer from "multer";

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const fileType = req.headers.uploadtype;
    switch (fileType) {
      case "1":
        cb(null, "./files/serviceBRDocs");
        break;
      case "2":
        cb(null, "./files/profilePics");
        break;
      case "3":
        cb(null, "./files/portfolioPics");
        break;
      default:
        break;
    }
    
  },
  filename: (req, file, cb) => {
    
    const fileName=Date.now() +"_" +file.originalname
    
    
    req.filename=fileName;
    cb(null, fileName);
  },
});

const upload = multer({ storage: fileStorage });



export default upload;
