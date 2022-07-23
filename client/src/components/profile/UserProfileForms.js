import React,{useState} from 'react';

{/*The component which has the forms in UserProfile page */}
function UserProfileForms() {

    {/* used states to make the update profile form and password form visible in responsive*/}
    const [passwordDiv,setPasswordDiv]=useState(false);

    const [profileDiv,setProfileDiv]=useState(false);

    const handlePasswordDiv=()=>{
        setPasswordDiv(!passwordDiv);
    }

    const handleProfileDiv=()=>{
        setProfileDiv(!profileDiv);
    }
  return (
    <div className="flex flex-col w-full items-center  lg:w-[50%] p-8">

            {/*The button to make profile update form visible on responsive */}
            <div className={!profileDiv?"lg:hidden w-[50%]":"hidden"}>
                    <button type="button" className="border w-full  mb-6 py-2 bg-black hover:bg-yellow-900 hover:text-black text-white" onClick={handleProfileDiv}>
                    Edit profile
                    </button>
            </div>
      
            {/* Start of the profile update form*/}
        
            <form className={profileDiv? "p-4 rounded-lg border-2 mb-8 shadow-inner":"hidden lg:block lg:mx-[10%] lg:mb-8 lg:mt-0 lg:bg-white lg:p-4 lg:rounded-lg lg:border-2 lg:shadow-inner"}>
        
                <h1 className="text-xl font-bold text-center py-2">Edit profile</h1>

                <div className="flex flex-col py-2 ">
                    <label>Fullname</label>
                </div>
        
                <div className="flex">
                    <div className="flex flex-col basis-5/12 mr-1">
                        <input
                        className="border  p-2"
                        placeholder="Kavin"
                        type="password"
                        required
                        />
                    </div>
                    <div className="flex flex-col basis-5/12 ml-1">
                        <input
                        className="border p-2"
                        placeholder="Fernando"
                        type="password"
                        required
                        />
                    </div>
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
                        placeholder="Enter Address"
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
            {/* End of the profile update form*/}

            {/* The button to make password form visible on responsive*/}
            <div className={!passwordDiv?"lg:hidden w-[50%]":"hidden"}>
                    <button type="button" className="border w-full  mb-4 py-2 bg-black hover:bg-yellow-900 hover:text-black text-white" onClick={handlePasswordDiv}>
                    Change Password
                    </button>
            </div>

            {/*Start of the password form */}
        
            <form className={passwordDiv? "bg-white p-4 rounded-lg border-2 mb-2 shadow-inner":"hidden lg:block lg:mx-[10%] lg:mb-8 lg:mt-0 lg:bg-white lg:p-4 lg:rounded-lg lg:border-2 lg:shadow-inner"}>
        
                <h1 className="text-xl font-bold text-center py-2">Change Password</h1>

                <div className="flex flex-col py-2">
                    <label>Current Password</label>
                    <input
                        className="border p-2 "
                        placeholder="Enter Address"
                        type="password"
                        required
                    />
                </div>

                <div className="flex flex-col py-2 ">
                    <label>New password</label>
                </div>
                <div className="flex">
                    <div className="flex flex-col basis-5/12 mr-1">
                        <input
                        className="border  p-2"
                        placeholder="Enter New password"
                        type="password"
                        required
                        />
                    </div>
                    <div className="flex flex-col basis-5/12 ml-1">
                        <input
                        className="border p-2"
                        placeholder="Confirm password"
                        type="password"
                        required
                        />
                    </div>
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
            {/*end of the password form */}
        </div>
  )
}

export default UserProfileForms