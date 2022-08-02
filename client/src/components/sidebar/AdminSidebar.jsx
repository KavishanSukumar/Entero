import React,{useState} from 'react';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function AdminSidebar() {

        const [dashboardLabel,setDashboardLabel]=useState(false);
        const [customerLabel,setCustomerLabel]=useState(false);
        const [serviceLabel,setServiceLabel]=useState(false) 
        const [eventLabel,setEventLabel]=useState(false);
        const [paymentLabel,setPaymentLabel]=useState(false);
        const [contactLabel,setContactLabel]=useState(false);

        const handleDasboardLabel=()=>{
            setDashboardLabel(!dashboardLabel);
        }
        const handleCustomerLabel=()=>{
            setCustomerLabel(!customerLabel);
        }
        const handleServicelabel=()=>{
            setServiceLabel(!serviceLabel);
        }
        const handleEventLabel=()=>{
            setEventLabel(!eventLabel);
        }
        
        const handlePaymentLabel=()=>{
            setPaymentLabel(!paymentLabel);
        }
        
        const handleContactLabel=()=>{
            setContactLabel(!contactLabel);
        }
       

  return (
    <div className="relative z-10">

        <div className="hidden md:block fixed bg-transparent shadow-2xl min-h-screen left-0 top-14 flex-col w-20 ">
            
            
            <div className="shadow-2xl md:mt-16 flex flex-col items-center border-2 w-full">
            
            <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/adminusercustomer" className="cursor-pointer" onMouseEnter={handleCustomerLabel} onMouseLeave={handleCustomerLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={customerLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Customers</span>
                </div>
                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/adminuserservice" className="cursor-pointer" onMouseEnter={handleServicelabel} onMouseLeave={handleServicelabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={serviceLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Services</span>
                </div>
                    
                    <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/admindashboard" className="cursor-pointer" onMouseEnter={handleDasboardLabel} onMouseLeave={handleDasboardLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={dashboardLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Dashboard</span>
                </div>   

                 <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/adminevents" className="cursor-pointer" onMouseEnter={handleEventLabel} onMouseLeave={handleEventLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={eventLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Events</span>
                </div>
                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/adminpayment" className="cursor-pointer" onMouseEnter={handlePaymentLabel} onMouseLeave={handlePaymentLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={paymentLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Payment</span>
                </div> 

                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/admincontact" className="cursor-pointer" onMouseEnter={handleContactLabel} onMouseLeave={handleContactLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={contactLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Contact</span>
                </div> 
            </div>

        </div>
        
    
    
    
    </div>
  )
}

export default AdminSidebar