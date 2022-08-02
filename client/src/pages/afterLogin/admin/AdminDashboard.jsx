import React from 'react'
import AdminHeader from '../../../components/header/AdminHeader';
import AdminSidebar from '../../../components/sidebar/AdminSidebar';

function AdminDashboard() {

    return (
        <div>
        <AdminHeader />
        <div className="flex">
          
          
          <AdminSidebar />
          <div className="md:ml-20 md:mt-14 w-screen">
            
            <p>This is admin dashboard</p>
          
          </div>
        </div>
        
      </div>
        
      )
  
}

export default AdminDashboard