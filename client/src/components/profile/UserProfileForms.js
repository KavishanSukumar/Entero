import React,{useState} from 'react';

//The component which has the forms in UserProfile page 
function UserProfileForms() {

   // used states to make the update profile form and password form visible in responsive
    const [passwordDiv,setPasswordDiv]=useState(false);

    const [profileDiv,setProfileDiv]=useState(false);

    const handlePasswordDiv=()=>{
        setPasswordDiv(!passwordDiv);
    }

    const handleProfileDiv=()=>{
        setProfileDiv(!profileDiv);
    }
  return (
    <div className="flex flex-col items-center py-8">

            {/*The button to make profile update form visible on responsive */}
            <div className={!profileDiv?"lg:hidden w-[50%]":"hidden"}>
                    <button type="button" className="border w-full  mb-6 py-2 bg-black hover:bg-yellow-900 hover:text-black text-white" onClick={handleProfileDiv}>
                    Edit profile
                    </button>
            </div>

            {/* <form className="flex-col bg-red-300 mx-4 p-4 w-[100%] lg:w-96"> */}
            <form className={profileDiv? "w-[100%] p-4 rounded-lg border-2 mb-8 shadow-inner lg:block lg:mx-[20px] lg:mb-8 lg:mt-0 lg:bg-white lg:p-4 lg:rounded-lg lg:border-2 lg:shadow-inner lg:w-[500px]":"hidden lg:block lg:mx-[20px] lg:mb-8 lg:mt-0 lg:bg-white lg:p-4 lg:rounded-lg lg:border-2 lg:shadow-inner lg:w-[500px] "}>

                <h1 className="text-xl font-bold text-center py-2">Edit profile</h1>

                <div className="flex flex-col py-2 ">
                    <label>Fullname</label>
                    
                        <input
                            className="border  p-2 mb-2"
                            placeholder="Kavin"
                            type="text"
                            required
                        />
                        <input
                            className="border  p-2 "
                            placeholder="Raksitha"
                            type="text"
                            required
                        />
                    
                </div>
                <div className="flex flex-col py-2 ">
                    <label>E-mail</label>
                    <input
                        className="border p-2 "
                        placeholder="kavin76@gmail.com"
                        type="email"
                    />
                </div>

                <div className="flex flex-col py-2">
                    <label>Contact Number</label>
                    <input
                        className="border p-2 "
                        placeholder="0776543762"
                        type="text"
                        required
                    />
                </div>

                <div className="flex flex-col py-2">
                    <label>Address</label>
                    <input
                        className="border p-2 "
                        placeholder="Kolonnawa Road,Kurunegala"
                        type="text"
                        required
                    />
                </div>

                {/* Buttons to save or cancel,the cancel  button won,t be shown on large screens*/}
                <div className="flex justify-end">
                    <button className="p-1 px-2 mt-2 mx-2 bg-gray-100 border-2 hover:border-black  hover:bg-transparent rounded" >
                        Update
                    </button>
                    <button type="button" className="p-1 px-2 mt-2 mx-2 bg-gray-100 border-2 hover:border-black  hover:bg-transparent rounded lg:hidden" onClick={handleProfileDiv}>
                        Cancel
                    </button>
            
                </div>
            
            </form>

            {/*The button to make password update form visible on responsive */}
            <div className={!profileDiv?"lg:hidden w-[50%]":"hidden"}>
                    <button type="button" className="border w-full  mb-6 py-2 bg-black hover:bg-yellow-900 hover:text-black text-white" onClick={handlePasswordDiv}>
                    Update password
                    </button>
            </div>

            <form className={passwordDiv? "w-[100%] p-4 rounded-lg border-2 mb-8 shadow-inner lg:block lg:mx-[20px] lg:mb-8 lg:mt-0 lg:bg-white lg:p-4 lg:rounded-lg lg:border-2 lg:shadow-inner lg:w-[500px]":"hidden lg:block lg:mx-[20px] lg:mb-8 lg:mt-0 lg:bg-white lg:p-4 lg:rounded-lg lg:border-2 lg:shadow-inner lg:w-[500px] "}>

                <h1 className="text-xl font-bold text-center py-2">Update password</h1>
                
                <div className="flex flex-col py-2 ">
                    <label>Current Password</label>
                    <input
                        className="border p-2 "
                        placeholder="Enter current password"
                        type="password"
                    />
                </div>
                <div className="flex flex-col py-2 ">
                    <label>New Password</label>
                    
                        <input
                            className="border  p-2 mb-2"
                            placeholder="New password"
                            type="password"
                            required
                        />
                        <input
                            className="border  p-2 "
                            placeholder="Confirm new password"
                            type="password"
                            required
                        />
                    
                </div>

                

                {/* The buttons to update password, the cancel button wont be shown on responsive*/}
                <div className="flex justify-end">
                    <button className="p-1 px-2 mt-2 mx-2 bg-gray-100 border-2 hover:border-black  hover:bg-transparent rounded" >
                        Update
                    </button>
                    <button type="button" className="p-1 px-2 mt-2 mx-2 bg-gray-100 border-2 hover:border-black  hover:bg-transparent rounded lg:hidden" onClick={handlePasswordDiv}>
                        Cancel
                    </button>
            
                </div>
            
            </form>
        </div>
  )
}

export default UserProfileForms