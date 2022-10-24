import React,{useState} from "react";
import axios from 'axios'
const API_URL="http://localhost:4000/api/profile/"

//The component which has the forms in UserProfile page
function ServiceProfileForms(props) {
  
  const [currentPassword,setCurrentPassword]=useState('')
  const [newPassword,setNewPassword]=useState("")
  const [conf_password,setConf_Password]=useState("")
  const [passwordError,setPasswordError]=useState("")

  const passwordSubmit= async (e)=>{
        
    e.preventDefault();
    let checkErrors = 0;
    const validPasswordCheck=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])/
    try {
      if (!currentPassword.trim() || !newPassword.trim() || !conf_password.trim()) {
        setPasswordError("Password fields can't be empty");
        checkErrors = 1;
      } else if(currentPassword.trim() === newPassword.trim()){
        setPasswordError("Your new password can't be same as the current one");
        checkErrors = 1;

      }else if (newPassword.trim() !== conf_password.trim()) {
        setPasswordError("Passwords mismatch");
        checkErrors = 1;
      }else if (newPassword.length < 8 || newPassword.length > 16) {
        setPasswordError("Password should be more than 8 and less than 20 characters");
        checkErrors = 1;
      } else if (!validPasswordCheck.test(newPassword)){
        setPasswordError("Password must contain lower case,upper case letters, a number and a special character");
        checkErrors = 1;
      }
      if (checkErrors == 0) {
        let x=API_URL+"password/"+props.userid
        const res = await axios.put(x, {
          currentPassword,newPassword
        });
        

        setPasswordError(res.data.message)
        
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="flex flex-col items-center py-8">  

      <form onSubmit={passwordSubmit}
        className="w-[100%] p-4 rounded-lg border-2 mb-8 text-xs lg:text-md shadow-inner md:block md:mx-[20px] md:mb-8 md:mt-0 md:bg-white md:p-4 md:rounded-lg md:border-2 md:shadow-inner lg:w-[500px] md:w-[350px]"
            
      >
        <h1 className="text-xl font-bold text-center py-2">Update password</h1>

        <div className="flex flex-col py-2">
                <label className="font-medium">Current Password</label>
                    <input
                        className="border p-2 "
                        placeholder="Enter current password"
                        type="password"
                        name="currentPassword"
                        onChange={(e) => {
                            setCurrentPassword(e.target.value);
                            setPasswordError("");
                          }}
                    />
                </div>
                <div className="flex flex-col py-2 ">
                <label className="font-medium">New Password</label>
                    
                        <input
                            className="border  p-2 mb-2"
                            placeholder="New password"
                            type="password"
                            name="newPassword"
                        onChange={(e) => {
                            setNewPassword(e.target.value);
                            setPasswordError("");
                          }}
                            
                        />
                        <input
                            className="border  p-2 "
                            placeholder="Confirm new password"
                            type="password"
                            name="conf_password"
                        onChange={(e) => {
                            setConf_Password(e.target.value);
                            setPasswordError("");
                          }}
                            
                        />
                    
                </div>

                <p>{passwordError}</p>

        {/* The buttons to update password, the cancel button wont be shown on responsive*/}
        <div className="flex justify-end">
          <button className="p-1 px-2 mt-2 mx-2 bg-cyan-500 border-2  hover:bg-cyan-400 rounded text-white">
            Update
          </button>
          
        </div>
      </form>
    </div>
  );
}

export default ServiceProfileForms;
