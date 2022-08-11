import React from 'react'

// import CustomerHeader from '../../../components/header/CustomerHeader';
import CustomerSidebar from '../../../components/sidebar/CustomerSidebar';


function CustomerAppointments() {
  return (
    <div>

      {/* <CustomerHeader /> */}
      <div className="flex">

        <CustomerSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">

            
          <p>This is customer appointments</p>
          
          </div>
      </div>
      
    </div>
  )
}

export default CustomerAppointments