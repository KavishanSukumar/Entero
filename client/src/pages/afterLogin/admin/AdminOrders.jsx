import React from 'react';
import AdminHeader from '../../../components/header/AdminHeader';
import AdminSidebar from '../../../components/sidebar/AdminSidebar';

function AdminOrders() {
    return (
        <div>
        <AdminHeader />
        <div className="flex">
          
          
          <AdminSidebar />
          <div className="md:ml-[17%] lg:ml-[13%] xl:ml-[11%] 2xl:ml-[9%] md:mt-14">
            
            <p>This is Admin orders</p>
          
          </div>
        </div>
        
      </div>
        
      )
}

export default AdminOrders