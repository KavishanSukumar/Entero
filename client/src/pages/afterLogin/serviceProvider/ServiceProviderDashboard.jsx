import React from "react";
import ServiceProviderHeader from "../../../components/header/ServiceProviderHeader";
import ServiceProviderSidebar from "../../../components/sidebar/ServiceProviderSidebar";
import ServiceProviderDashboard1 from "../../../components/spdashboard/serviceproviderdashboard";

function ServiceProviderDashboard(props) {
  return (
    <div>
      <ServiceProviderHeader />
      <div className="flex">
        <ServiceProviderSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">
        <ServiceProviderDashboard1 id={props.id}/>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviderDashboard;