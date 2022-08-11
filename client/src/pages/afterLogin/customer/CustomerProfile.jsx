import React from 'react';
import CustomerHeader from '../../../components/header/CustomerHeader';
import CustomerSidebar from '../../../components/sidebar/CustomerSidebar';
import UserProfileImage from '../../../components/profile/UserProfileImage';
import UserProfileForms from '../../../components/profile/UserProfileForms';

function CustomerProfile() {
  return (
    <div>
      <CustomerHeader />
      <div className="flex">
        
        
        <CustomerSidebar />
        <div className="md:ml-[15%] lg:ml-[25%]  md:mt-8 px-8 ">
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
  )
}

export default CustomerProfile