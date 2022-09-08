import React from "react";
import Appointment from "../../../components/appointment/Appointment";
import ServiceProviderHeader from "../../../components/header/ServiceProviderHeader";
import ServiceProviderSidebar from "../../../components/sidebar/ServiceProviderSidebar";

function ServiceProviderAppointments(props) {
  const id = props.data;
  console.log(id);
  return (
    <div>
      <ServiceProviderHeader />
      <div className="flex">
        <ServiceProviderSidebar />
        <div className="md:ml-[17%] lg:ml-[13%] xl:ml-[11%] 2xl:ml-[9%] md:mt-14 w-screen">
          <Appointment data={id} />
        </div>
      </div>
    </div>
  );
}

export default ServiceProviderAppointments;
