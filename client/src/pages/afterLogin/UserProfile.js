import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import UserProfileImage from "../../components/profile/UserProfileImage";
import UserProfileActivity from "../../components/profile/UserProfileActivity";
import UserProfileForms from "../../components/profile/UserProfileForms";


function UserProfile() {
 return (
    <div>
        <Header />
        <div className="flex flex-col  lg:flex-row min-h-screen">
            {/*The image part with change and remove buttons */}
            <UserProfileImage />


            {/* start of the division with the forms*/}
            <UserProfileForms />
            {/*End of the forms part */}

            
        
            {/*The division to show activities of a profile */}
            <UserProfileActivity/>
        </div>

        <Footer/>

    </div>
    
  );
}

export default UserProfile;