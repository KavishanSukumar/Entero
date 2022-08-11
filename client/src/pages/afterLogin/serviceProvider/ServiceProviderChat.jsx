import React from 'react';
import ServiceProviderHeader from '../../../components/header/ServiceProviderHeader';
import ServiceProviderSidebar from '../../../components/sidebar/ServiceProviderSidebar';
import Chat from "../../../components/chat/Chat";

function ServiceProviderChat() {
  return (
    <div>
      <ServiceProviderHeader />
      <div className="flex">
        
        <ServiceProviderSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">
            
          <Chat />
          
          </div>
      </div>
      
    </div>
  )
}

export default ServiceProviderChat