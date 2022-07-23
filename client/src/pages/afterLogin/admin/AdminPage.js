import React from 'react';
import AdminHeader from "../../../components/header/AdminHeader";
import Footer from "../../../components/footer/Footer"; 
import AdminSidebar from "../../../components/sidebar/AdminSidebar"; 
import MessageComponent from "../../../components/contactus/MessageComponent"; 

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