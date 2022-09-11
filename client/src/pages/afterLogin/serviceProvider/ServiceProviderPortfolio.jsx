import React from 'react';
import ServiceProviderHeader from '../../../components/header/ServiceProviderHeader';
import ServiceProviderSidebar from '../../../components/sidebar/ServiceProviderSidebar';
import ServiceProviderEditPortfolio from '../../../components/portfolio/EditPortfolio';



function ServiceProviderPortfolio(props) {
  const id = props.data;
  return (
    <div>
      <ServiceProviderHeader />
      <div className="flex">
        
        <ServiceProviderSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">
            <ServiceProviderEditPortfolio data={id}/>
          
          
        </div>
      </div>
      
    </div>
  )
}

export default ServiceProviderPortfolio