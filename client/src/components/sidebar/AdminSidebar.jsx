import React,{useState} from 'react';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function AdminSidebar() {

        const [dashboardLabel,setDashboardLabel]=useState(false);
        const [serviceProviderLabel,setServiceProviderLabel]=useState(false);
        const [customerLabel,setCustomerLabel]=useState(false); 
        const [eventLabel,setEventLabel]=useState(false);
        const [orderLabel,setOrderLabel]=useState(false);
        const [paymentLabel,setPaymentLabel]=useState(false);
        const [feedbackLabel,setFeedbackLabel]=useState(false);
        const [contactLabel,setContactLabel]=useState(false);

        const handleDasboardLabel=()=>{
            setDashboardLabel(!dashboardLabel);
        }
        const handleServiceProviderLabel=()=>{
            setServiceProviderLabel(!serviceProviderLabel);
        }
        const handleCustomerLabel=()=>{
            setCustomerLabel(!customerLabel);
        }
        const handleEventLabel=()=>{
            setEventLabel(!eventLabel);
        }
        const handleOrderLabel=()=>{
            setOrderLabel(!orderLabel);
        }
        const handlePaymentLabel=()=>{
            setPaymentLabel(!paymentLabel);
        }
        const handleFeedbackLabel=()=>{
            setFeedbackLabel(!feedbackLabel);
        }
        const handleContactLabel=()=>{
            setContactLabel(!contactLabel);
        }

        const [menux,setMenux]=useState(false);

        const handleMenux=()=>{
            setMenux(!menux);
        }

        

  return (
    <div className="relative ">

        <div className="hidden md:block fixed bg-transparent shadow-2xl min-h-screen w-36 left-0 top-12 flex-col p-3">
            
            
            <div className="shadow-2xl md:mt-4 lg:mt-16 flex flex-col items-center p-2 border-2">
            
                <div className="relative inline-flex items-center py-4">
                    <NavLink to="/adminusercustomer" className="cursor-pointer" onMouseEnter={handleMenux}>
                        <BsFillCalendar2CheckFill className="w-8 h-8 lg:w-10 lg:h-10 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>
                    
                   
                </div>
                    <div className="relative ml-3 flex flex-col" onMouseLeave={handleMenux}>
                        <div className={menux? "mb-2 relative inline-flex items-center ":"hidden"}>
                            <NavLink to="/adminusercustomer" className="cursor-pointer" onMouseEnter={handleCustomerLabel} onMouseLeave={handleCustomerLabel} >
                                <BsFillCalendar2CheckFill className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                            </NavLink>
                            <span className={customerLabel? "absolute ml-10 w-28 text-center rounded-md bg-black text-white z-50":"hidden"}>Customer</span>
                        </div>
                        <div className={menux? "mb-2 relative inline-flex items-center ":"hidden"}>
                            <NavLink to="/adminuserservices" className="cursor-pointer" onMouseEnter={handleServiceProviderLabel} onMouseLeave={handleServiceProviderLabel} >
                                <BsFillCalendar2CheckFill className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                            </NavLink>
                            <span className={serviceProviderLabel? "absolute ml-10 w-28 text-center rounded-md bg-black text-white z-50":"hidden"}>Service</span>
                        </div>

                    </div>
                    <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/admindashboard" className="cursor-pointer" onMouseEnter={handleDasboardLabel} onMouseLeave={handleDasboardLabel}>
                        <BsFillCalendar2CheckFill className="w-8 h-8 lg:w-10 lg:h-10 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={dashboardLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Dashboard</span>
                </div>   

                 <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/adminevents" className="cursor-pointer" onMouseEnter={handleEventLabel} onMouseLeave={handleEventLabel}>
                        <BsFillCalendar2CheckFill className="w-8 h-8 lg:w-10 lg:h-10 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={eventLabel? "absolute ml-12  w-28 text-center rounded-md bg-black text-white":"hidden"}>Events</span>
                </div> 

                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/adminorders" className="cursor-pointer" onMouseEnter={handleOrderLabel} onMouseLeave={handleOrderLabel}>
                        <BsFillCalendar2CheckFill className="w-8 h-8 lg:w-10 lg:h-10 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={orderLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Orders</span>
                </div> 

                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/adminpayment" className="cursor-pointer" onMouseEnter={handlePaymentLabel} onMouseLeave={handlePaymentLabel}>
                        <BsFillCalendar2CheckFill className="w-8 h-8 lg:w-10 lg:h-10 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={paymentLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Payment</span>
                </div> 
                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/adminfeedback" className="cursor-pointer" onMouseEnter={handleFeedbackLabel} onMouseLeave={handleFeedbackLabel}>
                        <BsFillCalendar2CheckFill className="w-8 h-8 lg:w-10 lg:h-10 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={feedbackLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Feedback</span>
                </div> 

                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/admincontact" className="cursor-pointer" onMouseEnter={handleContactLabel} onMouseLeave={handleContactLabel}>
                        <BsFillCalendar2CheckFill className="w-8 h-8 lg:w-10 lg:h-10 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={contactLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Contact</span>
                </div> 
            </div>

        </div>
        
    
    
    
    </div>
  )
}

export default AdminSidebar