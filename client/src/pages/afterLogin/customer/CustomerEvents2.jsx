import React from "react";
import Header from "../../../components/header/Header";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import EventsCustomer from "../../../components/events/EventsCustomer";
import CustomerHeader from "../../../components/header/CustomerHeader";

function CustomerEvents2(props) {
  const id = props.data;
  return (
    <div>
      <CustomerHeader />
      <div className="flex">
        {/* <AdminSidebar /> */}
        <div className="md:ml-20 md:mt-14 w-screen">
          <EventsCustomer data={id} />
        </div>
      </div>
    </div>
  );
}

export default CustomerEvents2;
