import React from 'react';
import ServiceProviderHeader from '../../../components/header/ServiceProviderHeader';
import ServiceProviderSidebar from '../../../components/sidebar/ServiceProviderSidebar';
import ServiceProviderEditPortfolio from '../../../components/editPortfolio/EditPortfolio';



function ServiceProviderPortfolio(props) {
  
  const userid = props.userid;
  console.log("this is from service provider portfolio 1====== "+userid);
  return (
    <div>
      <ServiceProviderHeader />
      <div className="flex">
        
        <ServiceProviderSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">
            <ServiceProviderEditPortfolio id={userid}/>
          
          
        </div>
      </div>
      
    </div>
  )
}

export default ServiceProviderPortfolio