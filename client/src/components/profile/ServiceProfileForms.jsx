import React from "react";

//The component which has the forms in UserProfile page
function ServiceProfileForms() {
  // used states to make the update profile form and password form visible in responsive



  return (
    <div className="flex flex-col items-center py-8">  

      <form
        className="w-[100%] p-4 rounded-lg border-2 mb-8 text-xs lg:text-md shadow-inner md:block md:mx-[20px] md:mb-8 md:mt-0 md:bg-white md:p-4 md:rounded-lg md:border-2 md:shadow-inner lg:w-[500px] md:w-[350px]"
            
      >
        <h1 className="text-xl font-bold text-center py-2">Update password</h1>

        <div className="flex flex-col py-2">
          <label className="font-medium">Current Password</label>
          <input
            className="border p-2 "
            placeholder="Enter current password"
            type="password"
          />
        </div>
        <div className="flex flex-col py-2 ">
          <label className="font-medium">New Password</label>

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
          <button className="p-1 px-2 mt-2 mx-2 bg-cyan-500 border-2  hover:bg-cyan-400 rounded text-white">
            Update
          </button>
          
        </div>
      </form>
    </div>
  );
}

export default ServiceProfileForms;
