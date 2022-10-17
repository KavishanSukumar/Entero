import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";


const API_URL="http://localhost:4000/api/profile/"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  m: 3,
  p: 4,
};


function UserProfileImage(props) {
  const [openForm,setOpenForm]=useState(false)
  const [a,setA]=useState(1)
  const [image,setImage]=useState()

  async function getDetails() {
    try {
        
      let x=API_URL+props.userid
      console.log(API_URL)
      
      const res = await axios.get(x);
      setImage(res.data.image)
      setA(2)
      
      
    } catch (error) {
      console.error(error.message);
    }
  }
  

  useEffect(() => {
    getDetails();
  }, []);
  
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  return (
    <>
    <div>
      <Modal
        open={openForm}
        onClose={handleCloseForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="overflow-auto h-screen">
        <div className="flex flex-col justify-center place-items-center ">
              <form
        className=" m-3  bg-white p-4  rounded-lg border-2 w-128 "
        // onSubmit={handleRegister}
        encType="multipart/form-data"
      >
        <div className="flex flex-col py-4 px-2 text-slate-500">
          <label className="mb-3">Business Registration Document</label>
          <input
            type="file"
            name="file"
            // onChange={fileChange}
            className="block w-full text-sm text-slate-500
            file:mr-4 file:py-1 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-cyan-500 file:text-white
            hover:file:bg-cyan-400"
          />
          {/* <p className="text-red-500 text-sm">{fileError}</p> */}
        </div>
      </form>
          </div>
        </Box>
      </Modal>
    </div>
    
    {a===2? 
      <div className="flex justify-center items-center mt-20 md:mt-8 md:flex-col md:justify-start md:pt-32 lg:pt-0 shadow-2xl border-2 lg:min-h-screen w-screen md:w-full">
            {/*The image */}
            
            
            {image===null?<div className="p-1 flex justify-center items-center mb-4">
                <img src="/assets/images/userAvatar.png" alt="whatever" className="w-36 h-36 md:w-24 md:h-24 lg:w-36 lg:h-36 xl:w-48 xl:h-48 rounded-full shadow-2xl hover:transform hover:scale-110 transition duration-200"/>
                
                {/* <p>Hello</p> */}
            </div>:<div className="p-1 flex justify-center items-center mb-4">
                {/* <img src="/assets/images/sindu.jpg" alt="whatever" className="w-36 h-36 md:w-24 md:h-24 lg:w-36 lg:h-36 xl:w-48 xl:h-48 rounded-full shadow-2xl hover:transform hover:scale-110 transition duration-200"/> */}
                <p>Ciao</p>
            </div>}
            
            

            {/*The buttons */}
            
            <div className="flex flex-col items-center justify-center lg:w-44 xl:w-56 ">
            
                <button className="p-2 w-24 lg:w-36 bg-cyan-500 border-2 text-xs lg:text-base mb-1 rounded hover:bg-cyan-400 text-white lg:mt-0 "onClick={handleOpenForm}>
                {image===null? "Add photo":"Update photo"}
                </button>
                {image!==null?<button className="p-2 w-24 lg:w-36 bg-cyan-500 border-2 text-xs  lg:text-base rounded hover:bg-cyan-400 text-white lg:mt-0 ">
                    Remove
                </button>:""}
            
                
                
            </div>
    </div>:""}
    </>
    
    
  )
}

export default UserProfileImage