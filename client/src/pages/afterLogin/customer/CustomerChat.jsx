import React from 'react';
import CustomerHeader from '../../../components/header/CustomerHeader';
import CustomerSidebar from '../../../components/sidebar/CustomerSidebar';
import Chat from "../../../components/chat/Chat";

function CustomerChat() {
  return (
    <div>
      <CustomerHeader />
      <div className="flex">
        
        <CustomerSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">
            
        <Chat />
          
          </div>
      </div>
      
    </div>
  )
}

export default CustomerChat