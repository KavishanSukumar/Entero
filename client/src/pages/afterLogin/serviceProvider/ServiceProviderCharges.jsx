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

<<<<<<< HEAD
export default ServiceProviderCharges;
=======
export default ServiceProviderCharges;
>>>>>>> 5f7865d0bf295969586ea62e387df4a817a546dc
