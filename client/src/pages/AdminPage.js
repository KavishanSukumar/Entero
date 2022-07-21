import React from 'react';
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer"; 
import AdminSidebar from "../components/AdminSidebar"; 
import MessageComponent from "../components/MessageComponent"; 

{/*For after login customer pages use Customer Hedaer and customer sidebar */}

function AdminPage() {
  return (
    <div>
      <AdminHeader />
      <div className="flex">
        
        <AdminSidebar />
        
        <MessageComponent />
          
        
        
      </div>
      <Footer />
    </div>
    
  )
}

export default AdminPage