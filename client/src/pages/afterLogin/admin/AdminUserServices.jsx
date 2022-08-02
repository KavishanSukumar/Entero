import React from 'react';
import AdminHeader from "../../../components/header/AdminHeader";
import AdminSidebar from '../../../components/sidebar/AdminSidebar';
import AdminServiceProviders from '../../../components/manageUsers/AdminServiceProviders';

function AdminUserServices() {
  return (
    <div>
      <AdminHeader />
      <div className="flex">
        
      <AdminSidebar />
      <div className="md:ml-20 md:mt-14 w-screen">
        
      <AdminServiceProviders />
      
      </div>
    </div>
      
    </div>
)
}

export default AdminUserServices