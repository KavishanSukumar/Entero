import React from 'react';
import AdminHeader from '../../../components/header/AdminHeader';
import AdminSidebar from '../../../components/sidebar/AdminSidebar';

function AdminPayment() {
    return (
        <div>
        <AdminHeader />
        <div className="flex">
          
          
          <AdminSidebar />
          <div className="md:ml-20 md:mt-14 w-screen">
            
            <p>This is admin payment </p>
          
          </div>
        </div>
        
      </div>
        
      )
}

export default AdminPayment