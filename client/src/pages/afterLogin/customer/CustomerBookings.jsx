import React from 'react'
import CustomerHeader from '../../../components/header/CustomerHeader';
import CustomerSidebar from '../../../components/sidebar/CustomerSidebar';
import BookingsCustomer from '../../../components/events/BookingsCustomer';

function CustomerBookings() {
  return (
    <div>
      <CustomerHeader />
      <div className="flex">
        
        <CustomerSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">
          
          <BookingsCustomer />
        
        </div>
      </div>
      
    </div>
  )
}

export default CustomerBookings