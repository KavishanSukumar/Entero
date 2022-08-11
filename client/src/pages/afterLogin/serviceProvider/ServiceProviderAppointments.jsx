import React from 'react';
import ServiceProviderHeader from '../../../components/header/ServiceProviderHeader';
import ServiceProviderSidebar from '../../../components/sidebar/ServiceProviderSidebar';

function ServiceProviderAppointments() {
  return (
    <div>
      <ServiceProviderHeader />
      <div className="flex">
        
        <ServiceProviderSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">
            
          <p>This is service appointment</p>
          
          </div>
      </div>
      
    </div>
  )
}

export default ServiceProviderAppointments