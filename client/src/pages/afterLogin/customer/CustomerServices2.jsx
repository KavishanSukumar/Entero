import React from "react";
import Header from "../../../components/header/Header";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import ServicesCustomer from "../../../components/services/ServicesCustomer";

function CustomerServices2() {
  return (
    <div>
      <Header />
      <div className="flex">
        {/* <AdminSidebar /> */}
        <div className="md:ml-20 md:mt-14 w-screen">
          <ServicesCustomer />
        </div>
      </div>
    </div>
  );
}

export default CustomerServices2;
