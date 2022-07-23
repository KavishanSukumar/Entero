import React from 'react';
import AdminHeader from '../../../components/header/AdminHeader';
import Footer from '../../../components/footer/Footer';
import AdminSidebar from '../../../components/sidebar/AdminSidebar';
import ViewEvent from '../../../components/events/ViewEvent';

{/*For after login admin pages use admin Hedaer and admin sidebar */}

function AdminPage() {
    return (
        <div>
        <AdminHeader />
        <div className="flex">
          
          <AdminSidebar />
          
          <ViewEvent />
            
          
          
        </div>
        <Footer />
      </div>
      
    )
  }
  
  export default AdminPage