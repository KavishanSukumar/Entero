import React from "react";
import ServiceProviderHeader from "../../../components/header/ServiceProviderHeader";
import ServiceProviderSidebar from "../../../components/sidebar/ServiceProviderSidebar";
import ReviewServiceProvider from "../../../components/feedback/ReviewServiceProvider";

function ServiceproviderRatings({ userid }) {
  return (
    <div>
      <ServiceProviderHeader />
      <div className="flex">
        <ServiceProviderSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">
          <ReviewServiceProvider userid={userid} />
        </div>
      </div>
    </div>
  );
}

export default ServiceproviderRatings;
