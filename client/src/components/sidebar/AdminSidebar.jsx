import React,{useState} from 'react';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { RiFunctionLine,RiArrowDropDownLine} from 'react-icons/ri';
import {BsFillCalendarEventFill} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function AdminSidebar() {
    const [adminEvent,setAdminEvent]=useState(false);

    const handleAdminEvent=()=>{
        setAdminEvent(!adminEvent);}

        const [namez,setNamez]=useState(false);
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

        const handleNamez=()=>{
            setNamez(!namez);
        }

  return (
    <div className="relative z-50">

        <div className={!namez? "hidden md:block fixed shadow-2xl min-h-screen w-36  left-0 top-14 flex-col p-3":"hidden"}>
            <div className={!namez? "flex justify-center shadow-inner p-3 border-2":"hidden"} onClick={handleNamez}>
                <AiFillCaretRight size={30} className="cursor-pointer" />
                
            </div>
            
            <div className="shadow-2xl mt-16 flex flex-col items-center p-2 border-2">
            
                <div className="relative inline-flex items-center py-4">
                    <NavLink to="/adminusercustomer" className="cursor-pointer" onMouseEnter={handleMenux}>
                        <BsFillCalendar2CheckFill size={40} className="text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>
                    
                   
                </div>
                    <div className="relative ml-3 flex flex-col" onMouseLeave={handleMenux}>
                        <div className={menux? "mb-2 relative inline-flex items-center ":"hidden"}>
                            <NavLink to="/adminusercustomer" className="cursor-pointer" onMouseEnter={handleCustomerLabel} onMouseLeave={handleCustomerLabel} >
                                <BsFillCalendar2CheckFill size={25}/>
                            </NavLink>
                            <span className={customerLabel? "absolute ml-8 w-28 text-center rounded-md bg-black text-white z-50":"hidden"}>Customer</span>
                        </div>
                        <div className={menux? "mb-2 relative inline-flex items-center ":"hidden"}>
                            <NavLink to="/adminuserservices" className="cursor-pointer" onMouseEnter={handleServiceProviderLabel} onMouseLeave={handleServiceProviderLabel} >
                                <BsFillCalendar2CheckFill size={25}/>
                            </NavLink>
                            <span className={serviceProviderLabel? "absolute ml-8 w-28 text-center rounded-md bg-black text-white z-50":"hidden"}>Service</span>
                        </div>

                    </div>
                    <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/admindashboard" className="cursor-pointer" onMouseEnter={handleDasboardLabel} onMouseLeave={handleDasboardLabel}>
                        <BsFillCalendar2CheckFill size={40} className="text-gray-400 hover:scale-110"/>
                    </NavLink>

                    <span className={dashboardLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Dashboard</span>
                </div>   

                 <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/adminevents" className="cursor-pointer" onMouseEnter={handleEventLabel} onMouseLeave={handleEventLabel}>
                        <BsFillCalendar2CheckFill size={40} className="text-gray-400 hover:scale-110"/>
                    </NavLink>

                    <span className={eventLabel? "absolute ml-12  w-28 text-center rounded-md bg-black text-white":"hidden"}>Events</span>
                </div> 

                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/adminorders" className="cursor-pointer" onMouseEnter={handleOrderLabel} onMouseLeave={handleOrderLabel}>
                        <BsFillCalendar2CheckFill size={40} className="text-gray-400 hover:scale-110"/>
                    </NavLink>

                    <span className={orderLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Orders</span>
                </div> 

                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/adminpayment" className="cursor-pointer" onMouseEnter={handlePaymentLabel} onMouseLeave={handlePaymentLabel}>
                        <BsFillCalendar2CheckFill size={40} className="text-gray-400 hover:scale-110"/>
                    </NavLink>

                    <span className={paymentLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Payment</span>
                </div> 
                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/adminfeedback" className="cursor-pointer" onMouseEnter={handleFeedbackLabel} onMouseLeave={handleFeedbackLabel}>
                        <BsFillCalendar2CheckFill size={40} className="text-gray-400 hover:scale-110"/>
                    </NavLink>

                    <span className={feedbackLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Feedback</span>
                </div> 

                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/admincontact" className="cursor-pointer" onMouseEnter={handleContactLabel} onMouseLeave={handleContactLabel}>
                        <BsFillCalendar2CheckFill size={40} className="text-gray-400 hover:scale-110"/>
                    </NavLink>

                    <span className={contactLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Contact</span>
                </div> 

                


                 

                
                
                
            </div>

        </div>
        <div className={namez? " min-h-screen fixed top-14 z-10  left-0 py-4 px-3 bg-gray-100 shadow-2xl md:min-w-[26%] lg:min-w-[22%] xl:min-w-[18%] hidden md:block ":"hidden"}>
    {/*The link to the pages  */}
    <div className="flex justify-center bg-white p-3 border-2" onClick={handleNamez}>
                <AiFillCaretLeft size={30} className="cursor-pointer" />
                
            </div>
    
    <ul className="text-lg">
         <li className="relative flex justify-start  p-3 mb-2 rounded-lg hover:bg-gray-200 " onClick={handleAdminEvent}>
                    <RiFunctionLine className="w-6 h-6 text-gray-500"/>
                    <span className="ml-3">Users</span>
                    <RiArrowDropDownLine className="w-6 h-6 text-gray-500 ml-8 absolute right-0"/>
               
                
                
            
        </li>
        <ul  className={adminEvent? "py-1 pl-4":"hidden"}>
                  <li className="mb-2"><NavLink to="/adminusercustomer" className={({isActive})=>isActive? "flex items-center p-2 pl-8 w-full text-base font-normal  rounded-lg transition duration-75 bg-gray-200":"flex items-center p-2 pl-8 w-full text-base font-normal  rounded-lg transition duration-75 hover:bg-gray-200"}>Customer</NavLink>
                  </li>
                  <li><NavLink to="/adminuserservices" className={({isActive})=>isActive? "flex items-center p-2 pl-8 w-full text-base font-normal  rounded-lg transition duration-75 bg-gray-200":"flex items-center p-2 pl-8 w-full text-base font-normal  rounded-lg transition duration-75 hover:bg-gray-200"}>Service</NavLink>
                  </li>
                 
                  
        </ul>
        
    </ul>
     <ul className="text-lg">
        <li>
            <NavLink to="/admindashboard" className={({isActive})=>isActive? "flex p-3 mb-2 rounded-lg bg-gray-200":"flex mb-2  p-3 rounded-lg hover:bg-gray-200"}>
                <BsFillCalendarEventFill className="w-6 h-6 text-gray-500" />
               <span className="ml-3">Dashboard</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/adminevents" className={({isActive})=>isActive? "flex p-3 mb-2 rounded-lg bg-gray-200":"flex mb-2  p-3 rounded-lg hover:bg-gray-200"}>
                <BsFillCalendarEventFill className="w-6 h-6 text-gray-500" />
               <span className="ml-3">Events</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/adminorders" className={({isActive})=>isActive? "flex p-3 mb-2 rounded-lg bg-gray-200":"flex mb-2  p-3 rounded-lg hover:bg-gray-200"}>
                <BsFillCalendarEventFill className="w-6 h-6 text-gray-500" />
               <span className="ml-3">Orders</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/adminpayment" className={({isActive})=>isActive? "flex p-3 mb-2 rounded-lg bg-gray-200":"flex mb-2  p-3 rounded-lg hover:bg-gray-200"}>
                <BsFillCalendarEventFill className="w-6 h-6 text-gray-500" />
               <span className="ml-3">Payment</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/adminfeedback" className={({isActive})=>isActive? "flex p-3 mb-2 rounded-lg bg-gray-200":"flex mb-2  p-3 rounded-lg hover:bg-gray-200"}>
                <BsFillCalendarEventFill className="w-6 h-6 text-gray-500" />
               <span className="ml-3">Feedback</span>
            </NavLink>
        </li>

        <li>
            <NavLink to="/admincontact" className={({isActive})=>isActive? "flex p-3 mb-2 rounded-lg bg-gray-200":"flex mb-2  p-3 rounded-lg hover:bg-gray-200"}>
                <BsFillCalendarEventFill className="w-6 h-6 text-gray-500" />
               <span className="ml-3">Contact</span>
            </NavLink>
        </li>
        </ul> 
    </div>
    </div>
  )
}

export default AdminSidebar