import React from 'react';
import AdminHeader from '../../../components/header/AdminHeader';
import AdminSidebar from '../../../components/sidebar/AdminSidebar';
import EventsAdmin from '../../../components/events/EventsAdmin';


function AdminEvents() {
    return (
      <div>
      <AdminHeader />
      <div className="flex">
        
        
        <AdminSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">
          
          <EventsAdmin />
        
        </div>
      </div>
      
    </div>
      
    )
  }
  
  export default AdminEvents