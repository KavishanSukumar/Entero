import React from "react";
import ServiceProviderHeader from "../../../components/header/ServiceProviderHeader";
import PaymentPackagesService from "../../../components/payment/PaymentPackagesService";
import ServiceProviderSidebar from "../../../components/sidebar/ServiceProviderSidebar";

function ServiceProviderCharges() {
  return (
    <div>
      <ServiceProviderHeader />
      <div className="flex">
        <ServiceProviderSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">
          <PaymentPackagesService />
        </div>
      </div>
    </div>
  );
}

export default ServiceProviderCharges;