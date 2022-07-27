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
        <div className="md:ml-[17%] lg:ml-[13%] xl:ml-[11%] 2xl:ml-[9%] md:mt-14">
            
        <Chat />
          
          </div>
      </div>
      
    </div>
  )
}

export default CustomerChat