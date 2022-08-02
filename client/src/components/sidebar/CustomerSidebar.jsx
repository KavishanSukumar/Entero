import React,{useState} from 'react';
import { BsFillCalendar2CheckFill} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function CustomerSidebar() {
    
        const [eventLabel,setEventLabel]=useState(false);
        const [serviceProviderLabel,setServiceProviderLabel]=useState(false);
        const [bookingLabel,setBookingLabel]=useState(false);
        const [appointmentLabel,setAppointmentLabel]=useState(false);
        const [chatLabel,setChatLabel]=useState(false);
    
        const handleEventLabel=()=>{
            setEventLabel(!eventLabel);
        }
        const handleServiceProviderLabel=()=>{
            setServiceProviderLabel(!serviceProviderLabel);
        }
        const handleBookingLabel=()=>{
            setBookingLabel(!bookingLabel);
        }
        const handleAppointmentLabel=()=>{
            setAppointmentLabel(!appointmentLabel);
        }
        const handleChatLabel=()=>{
            setChatLabel(!chatLabel);
        }
        

  return (
    <div className="relative z-10">

        <div className="hidden md:block fixed bg-transparent shadow-2xl min-h-screen left-0 top-14 flex-col w-20">
            
            
            <div className="shadow-2xl md:mt-16 flex flex-col items-center border-2 w-full">   

                 <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/customerevents" className="cursor-pointer" onMouseEnter={handleEventLabel} onMouseLeave={handleEventLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={eventLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Events</span>
                </div> 

                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/customerservices" className="cursor-pointer" onMouseEnter={handleServiceProviderLabel} onMouseLeave={handleServiceProviderLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={serviceProviderLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Services</span>
                </div> 

                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/customerbookings" className="cursor-pointer" onMouseEnter={handleBookingLabel} onMouseLeave={handleBookingLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={bookingLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Bookings</span>
                </div> 
                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/customerappointments" className="cursor-pointer" onMouseEnter={handleAppointmentLabel} onMouseLeave={handleAppointmentLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={appointmentLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Appointments</span>
                </div> 
                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/customerchat" className="cursor-pointer" onMouseEnter={handleChatLabel} onMouseLeave={handleChatLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={chatLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Chat</span>
                </div> 
            </div>

        </div>
        
    </div>
  )
}

export default CustomerSidebar