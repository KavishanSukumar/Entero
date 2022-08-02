import React from 'react';
import CustomerHeader from '../../../components/header/CustomerHeader';
import CustomerSidebar from '../../../components/sidebar/CustomerSidebar';

function CustomerServices() {
  return (
    <div>
      <CustomerHeader />
      <div className="flex">
        
        <CustomerSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">
            
          <p>This is customer services</p>
          
          </div>
      </div>
      
    </div>
  )
}

export default CustomerServices