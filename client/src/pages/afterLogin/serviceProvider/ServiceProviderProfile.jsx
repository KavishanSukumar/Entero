import React from 'react'
import ServiceProviderHeader from '../../../components/header/ServiceProviderHeader';
import ServiceProviderSidebar from '../../../components/sidebar/ServiceProviderSidebar';
import ServiceProfileImage from '../../../components/profile/UserProfileImage';
import ServiceProfileForms from '../../../components/profile/UserProfileForms';

function ServiceProviderProfile() {
  return (
    <div>
      <ServiceProviderHeader />
      <div className="flex">
        
        
        <ServiceProviderSidebar />
        <div className="md:ml-[15%] lg:ml-[25%]  md:mt-8 px-8 ">
          <div className="flex flex-col  md:flex-row min-h-screen">
          {/*The image part with change and remove buttons */}
            <ServiceProfileImage />


          {/* start of the division with the forms*/}
            <ServiceProfileForms />
           {/*End of the forms part */}

            
        
          </div>
          
        
        </div>
      </div>
      
    </div>
  )
}

export default ServiceProviderProfile