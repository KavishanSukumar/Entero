import React from 'react';
import AdminHeader from "../../../components/header/AdminHeader";
import AdminSidebar from '../../../components/sidebar/AdminSidebar';
import AdminCustomers from '../../../components/manageUsers/AdminCustomers';

function AdminUserCustomer() {
  return (
    <div>
    <AdminHeader />
    <div className="flex">
      
      
      <AdminSidebar />
      <div className="md:ml-20 md:mt-14 w-screen">
        
      <AdminCustomers />
      
      </div>
    </div>
    
  </div>
    
  )
}

export default AdminUserCustomer