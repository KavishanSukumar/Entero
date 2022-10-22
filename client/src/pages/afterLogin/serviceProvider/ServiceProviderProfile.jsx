import React from "react";
import ServiceProviderHeader from "../../../components/header/ServiceProviderHeader";
import ServiceProviderSidebar from "../../../components/sidebar/ServiceProviderSidebar";
import UserProfileImage from "../../../components/profile/UserProfileImage";
import ServiceProfileForms from "../../../components/profile/ServiceProfileForms";

function ServiceProviderProfile(props) {
  const id=props.userid
  console.log(id)
  return (
    <div>
      <ServiceProviderHeader />
      <div className="flex">
        <ServiceProviderSidebar />
        <div className="md:ml-[15%] lg:ml-[25%]  md:mt-8 px-8 ">
          <div className="flex flex-col  md:flex-row min-h-screen">
            {/*The image part with change and remove buttons */}
            <UserProfileImage userId={id}/>

            {/* start of the division with the forms*/}
            <ServiceProfileForms />
            {/*End of the forms part */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviderProfile;
