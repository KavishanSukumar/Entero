import React from 'react';
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer"; 
import AdminSidebar from "../components/AdminSidebar"; 
import ViewEvent from "../components/ViewEvent"; 

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