import React from 'react';
import ServiceProviderHeader from '../../../components/header/ServiceProviderHeader';
import ServiceProviderSidebar from '../../../components/sidebar/ServiceProviderSidebar';
import ServiceProviderEditPortfolio from '../../../components/editPortfolio/EditPortfolio';



function ServiceProviderPortfolio() {
  return (
    <div>
      <ServiceProviderHeader />
      <div className="flex">
        
        <ServiceProviderSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">
            <ServiceProviderEditPortfolio/>
          
          
        </div>
      </div>
      
    </div>
  )
}

export default ServiceProviderPortfolio