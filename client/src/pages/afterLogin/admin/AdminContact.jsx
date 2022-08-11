import React from 'react';
import AdminHeader from '../../../components/header/AdminHeader';
import AdminSidebar from '../../../components/sidebar/AdminSidebar';
import MessageComponent from '../../../components/contactus/MessageComponent';

function AdminContact() {
    return (
        <div>
        <AdminHeader />
        <div className="flex">
          
          
          <AdminSidebar />
          <div className="md:ml-20 md:mt-14 w-screen">
            
            <MessageComponent />
          
          </div>
        </div>
        
      </div>
        
      )
}

export default AdminContact