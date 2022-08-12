import React from "react";
import Header from "../../../components/header/Header";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import EventsCustomer from "../../../components/events/EventsCustomer";

function CustomerEvents2() {
  return (
    <div>
      <Header />
      <div className="flex">
        {/* <AdminSidebar /> */}
        <div className="md:ml-20 md:mt-14 w-screen">
          <EventsCustomer />
        </div>
      </div>
    </div>
  );
}

export default CustomerEvents2;