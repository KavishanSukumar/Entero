import React from "react";
import AdminHeader from "../../components/header/AdminHeader";
import AdminSidebar from "../../components/sidebar/AdminSidebar"
import UserProfileImage from "../../components/profile/UserProfileImage";
import UserProfileForms from "../../components/profile/UserProfileForms";


function UserProfile() {
 return (
  <div>
      <AdminHeader />
      <div className="flex">
        
        
        <AdminSidebar />
        <div className="md:ml-[22%] lg:ml-[25%]  md:mt-8 px-8 ">
          <div className="flex flex-col  md:flex-row min-h-screen">
          {/*The image part with change and remove buttons */}
            <UserProfileImage />


          {/* start of the division with the forms*/}
            <UserProfileForms />
           {/*End of the forms part */}

            
        
          </div>
          
        
        </div>
      </div>
      
    </div>
    // <div>
    //     <Header />
    //     <div className="flex flex-col  lg:flex-row min-h-screen">
    //         {/*The image part with change and remove buttons */}
    //         <UserProfileImage />


    //         {/* start of the division with the forms*/}
    //         <UserProfileForms />
    //         {/*End of the forms part */}

            
        
    //         {/*The division to show activities of a profile */}
    //         <UserProfileActivity/>
    //     </div>

    //     <Footer/>

    // </div>
    
  );
}

export default UserProfile;