import React,{ useState,useEffect } from "react"
import axios from "axios"
const API_URL="http://localhost:4000/api/profile/"

//The component which has the forms in UserProfile page 
function CustomerProfileForms(props) {

    const [message,setMessage]=useState()
    const [details,setDetails]=useState("")
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [contactNum,setContactNum]=useState('')
    const [address,setAddress]=useState('')
    const [currentPassword,setCurrentPassword]=useState('')
    const [newPassword,setNewPassword]=useState("")
    const [conf_password,setConf_Password]=useState("")
    const [nameError, setNameError] = useState("");
  const [contactNumError, setContactNumError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [passwordError,setPasswordError]=useState("")
  
      


    async function getDetails() {
        try {
            
          let x=API_URL+props.userid
          
          
          const res = await axios.get(x);
          setDetails(res.data)
          setName(res.data.name)
          setEmail(res.data.email)
          setContactNum(res.data.contact_number)
          setAddress(res.data.address)
          
          
        } catch (error) {
          console.error(error.message);
        }
      }
      
    
      useEffect(() => {
        getDetails();
      }, []);
    


  

   // used states to make the update profile form and password form visible in responsive
    const [passwordDiv,setPasswordDiv]=useState(false);

    const [profileDiv,setProfileDiv]=useState(false);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        let checkErrors = 0;
        
        try {
          if (!name.trim()) {
            setNameError("Name is required");
            checkErrors = 1;
          }
          
          if (!contactNum.trim()) {
            setContactNumError("Contact number is required");
            checkErrors = 1;
          }
          if (!address.trim()) {
            setAddressError("Address is required");
            checkErrors = 1;
          }
          
    
          if (checkErrors == 0) {
            let x=API_URL+props.userid
            const res = await axios.put(x, {
              name,
              contactNum,
              address
            });
            console.log({name,contactNum,address})
            
    
             setMessage(res.data.message)
             getDetails();
            
          }
        } catch (err) {
          console.log(err);
        }
      };

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
    const handlePasswordDiv=()=>{
        setPasswordDiv(!passwordDiv);
    }

    const handleProfileDiv=()=>{
        setProfileDiv(!profileDiv);
    }
  return (
    <div className="flex flex-col items-center py-8">

            {/*The button to make profile update form visible on responsive */}
            <div className={!profileDiv?"md:hidden w-[50%]":"hidden"}>
                    <button type="button" className="border w-full  mb-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white" onClick={handleProfileDiv}>
                    Edit profile
                    </button>
            </div>

            {/* <form className="flex-col bg-red-300 mx-4 p-4 w-[100%] lg:w-96"> */}
            {details && <form className={profileDiv? "w-[100%] p-4 rounded-lg border-2 mb-8 text-xs lg:text-md shadow-inner md:block md:mx-[20px] md:mb-8 md:mt-0 md:bg-white md:p-4 md:rounded-lg md:border-2 md:shadow-inner lg:w-[500px] md:w-[350px]":"hidden md:block md:mx-[20px] md:mb-8 md:mt-0 md:bg-white md:p-4 md:rounded-lg md:border-2 md:shadow-inner lg:w-[500px] md:w-[350px] text-xs lg:text-base"} onSubmit={onSubmitForm}>

                <h1 className="text-xl font-bold text-center py-2">Edit profile</h1>

                 <div className="flex flex-col py-2 ">
                    <label className="font-medium">Name</label>
                    <input
                        className="border p-2 "
                        name="name"
                        value={name}
                        type="text"
                        onChange={(e) => {
                            setName(e.target.value);
                            setNameError("");
                          }}
                    />
                    <p>{nameError}</p>
                </div>
                <div className="flex flex-col py-2 ">
                <label className="font-medium">Email</label>
                    <input
                        className="border p-2 "
                        name="email"
                        value={email}
                        type="text"
                        readOnly
                    />
                </div>

                <div className="flex flex-col py-2">
                <label className="font-medium">Contact</label>
                    <input
                        className="border p-2 "
                        name="contactNum"
                        value={contactNum}
                        type="text"
                        onChange={(e) => {
                            setContactNum(e.target.value);
                            setContactNumError("");
                          }}
                    />
                    <p>{contactNumError}</p>
                </div>

                <div className="flex flex-col py-2">
                <label className="font-medium">Address</label>
                    <input
                        className="border p-2 "
                        name="address"
                        value={address}
                        type="text"
                        onChange={(e) => {
                            setAddress(e.target.value);
                            setAddressError("");
                          }}
                    />
                    <p>{addressError}</p>
                </div> 

                {/* Buttons to save or cancel,the cancel  button won,t be shown on large screens*/}
                <div className="flex justify-end">
                    <button className="p-1 px-2 mt-2 mx-2 bg-cyan-500 border-2   hover:bg-cyan-400 rounded text-white" >
                        Update
                    </button>
                    <button type="button" className="p-1 px-2 mt-2 mx-2 bg-cyan-500 border-2   hover:bg-cyan-400 rounded md:hidden text-white" onClick={handleProfileDiv}>
                        Cancel
                    </button>
            
                </div>
                {message && <p>{message}</p>}
            
            </form>}

            {/*The button to make password update form visible on responsive */}
            <div className={!profileDiv?"md:hidden w-[50%]":"hidden"}>
                    <button type="button" className="border w-full  mb-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white" onClick={handlePasswordDiv}>
                    Update password
                    </button>
            </div>

            {details && <form className={passwordDiv? "w-[100%] p-4 rounded-lg border-2 mb-8 text-xs lg:text-md shadow-inner md:block md:mx-[20px] md:mb-8 md:mt-0 md:bg-white md:p-4 md:rounded-lg md:border-2 md:shadow-inner lg:w-[500px] md:w-[350px]":"hidden md:block md:mx-[20px] md:mb-8 md:mt-0 md:bg-white md:p-4 md:rounded-lg md:border-2 md:shadow-inner lg:w-[500px] md:w-[350px] text-xs lg:text-base"} onSubmit={passwordSubmit}>

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
                    <button className="p-1 px-2 mt-2 mx-2 bg-cyan-500 border-2  hover:bg-cyan-400 rounded text-white" >
                        Update
                    </button>
                    <button type="button" className="p-1 px-2 mt-2 mx-2 bg-cyan-500 border-2 hover:bg-transparent rounded text-white md:hidden" onClick={handlePasswordDiv}>
                        Cancel
                    </button>
            
                </div>
            
            </form>}
        </div>
  )
}

export default CustomerProfileForms