import React from "react";
import AdminHeader from "../../components/header/AdminHeader";
import AdminSidebar from "../../components/sidebar/AdminSidebar"
import UserProfileImage from "../../components/profile/UserProfileImage";
import UserProfileForms from "../../components/profile/UserProfileForms";


function UserProfile(props) {
  const id=props.userid
  console.log(id)
 return (
  <div>
      <AdminHeader />
      <div className="flex">
      
        
        
        <AdminSidebar />
        
        <div className="md:ml-[15%] lg:ml-[25%]  md:mt-8 px-8 ">
          <div className="flex flex-col  md:flex-row min-h-screen">
          {/*The image part with change and remove buttons */}
            <UserProfileImage userId={id}/>
            


          {/* start of the division with the forms*/}
            <UserProfileForms adminId={id}/>
            
           {/*End of the forms part */}

            
        
          </div>
          
        
        </div>
      </div>
      
    </div>    
  );
}

export default UserProfile;