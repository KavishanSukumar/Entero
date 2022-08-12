import React from 'react'
import CustomerHeader from '../../../components/header/CustomerHeader'

function CustomerHome() {
  return (
    <div>
      <CustomerHeader />
      <div className="mt-14 w-screen  md:h-full bg-red-600">
       <img className="w-full h-full" src="/assets/images/ch.png" />
      </div>
      
      
      
    </div>
  )
}

export default CustomerHome