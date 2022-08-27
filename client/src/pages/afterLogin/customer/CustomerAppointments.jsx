import React from "react";
import CustomerHeader from "../../../components/header/CustomerHeader";
import CustomerSidebar from "../../../components/sidebar/CustomerSidebar";
import AppointmentCustomer from "../../../components/appointment/AppointmentCustomer";

function CustomerAppointments(props) {
  const id = props.data;
  return (
    <div>
      <CustomerHeader />
      <div className="flex">
        <CustomerSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">
          <AppointmentCustomer data={id} />
        </div>
      </div>
    </div>
  );
}

export default CustomerAppointments;
