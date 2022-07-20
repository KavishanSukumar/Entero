import React from 'react';
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer"; 
import AdminSidebar from "../components/AdminSidebar"; 
import ReviewComponent from "../components/ReviewComponent"; 

{/*For after login customer pages use Customer Hedaer and customer sidebar */}

function AdminPage() {
  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <ReviewComponent />
        
        {/* Body content comes here */}
      
      </div>
      <Footer />
    </div>
    
  )
}

export default AdminPage