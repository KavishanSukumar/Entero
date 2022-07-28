import React from 'react';
import CustomerHeader from '../../../components/header/CustomerHeader';
import CustomerSidebar from '../../../components/sidebar/CustomerSidebar';

function CustomerServices() {
  return (
    <div>
      <CustomerHeader />
      <div className="flex">
        
        <CustomerSidebar />
        <div className="md:ml-[17%] lg:ml-[13%] xl:ml-[11%] 2xl:ml-[9%] md:mt-14 w-screen">
            
          <p>This is customer services</p>
          
          </div>
      </div>
      
    </div>
  )
}

export default CustomerServices