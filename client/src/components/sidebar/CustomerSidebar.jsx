import React,{useState} from 'react';
import {AiFillCaretLeft, AiFillCaretRight, AiOutlineMenu} from 'react-icons/ai';
import { BsFillCalendar2CheckFill,BsFillChatFill } from 'react-icons/bs';
import { RiFunctionLine,RiArrowDropDownLine} from 'react-icons/ri';
import {BsFillCalendarEventFill,BsFillChatRightTextFill} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
{/*{namez? "hidden":" min-h-screen fixed top-12 z-10  left-0 py-4 px-3 bg-gray-800 md:min-w-[26%] lg:min-w-[22%] xl:min-w-[18%] hidden md:block "} */}
function CustomerSidebar() {
    
    const [adminEvent,setAdminEvent]=useState(false);

    const handleAdminEvent=()=>{
        setAdminEvent(!adminEvent);}

        const [namez,setNamez]=useState(false);
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
        const handleNamez=()=>{
            setNamez(!namez);
        }

  return (
    <div className="relative">

        <div className={!namez? "hidden md:block fixed bg-transparent shadow-2xl min-h-screen w-36 left-0 top-12 flex-col p-3":"hidden"}>
            <div className={!namez? "flex justify-center shadow-inner p-3 border-2":"hidden"} onClick={handleNamez}>
                <AiFillCaretRight size={30} className="cursor-pointer" />
                
            </div>
            
            <div className="shadow-2xl mt-16 flex flex-col items-center p-2 border-2">   

                 <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/customerevents" className="cursor-pointer" onMouseEnter={handleEventLabel} onMouseLeave={handleEventLabel}>
                        <BsFillCalendar2CheckFill size={40} className="text-gray-400 hover:scale-110"/>
                    </NavLink>

                    <span className={eventLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Events</span>
                </div> 

                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/customerservices" className="cursor-pointer" onMouseEnter={handleServiceProviderLabel} onMouseLeave={handleServiceProviderLabel}>
                        <BsFillCalendar2CheckFill size={40} className="text-gray-400 hover:scale-110"/>
                    </NavLink>

                    <span className={serviceProviderLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Services</span>
                </div> 

                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/customerbookings" className="cursor-pointer" onMouseEnter={handleBookingLabel} onMouseLeave={handleBookingLabel}>
                        <BsFillCalendar2CheckFill size={40} className="text-gray-400 hover:scale-110"/>
                    </NavLink>

                    <span className={bookingLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Bookings</span>
                </div> 
                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/customerappointments" className="cursor-pointer" onMouseEnter={handleAppointmentLabel} onMouseLeave={handleAppointmentLabel}>
                        <BsFillCalendar2CheckFill size={40} className="text-gray-400 hover:scale-110"/>
                    </NavLink>

                    <span className={appointmentLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Appointments</span>
                </div> 
                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/customerchat" className="cursor-pointer" onMouseEnter={handleChatLabel} onMouseLeave={handleChatLabel}>
                        <BsFillCalendar2CheckFill size={40} className="text-gray-400 hover:scale-110"/>
                    </NavLink>

                    <span className={chatLabel? "absolute ml-12 w-28 text-center rounded-md bg-black text-white":"hidden"}>Chat</span>
                </div> 
            </div>

        </div>
        <div className={namez? " min-h-screen fixed top-12 z-10  left-0 py-4 px-3 bg-gray-100 shadow-2xl md:min-w-[26%] lg:min-w-[22%] xl:min-w-[18%] hidden md:block ":"hidden"}>
    {/*The link to the pages  */}
    <div className="flex justify-center bg-white p-3 border-2" onClick={handleNamez}>
                <AiFillCaretLeft size={30} className="cursor-pointer" />
                
            </div>
    
    
     <ul className="text-lg">
        <li>
            <NavLink to="/customerevents" className={({isActive})=>isActive? "flex p-3 mb-2 rounded-lg bg-gray-200":"flex mb-2  p-3 rounded-lg hover:bg-gray-200"}>
                <BsFillCalendarEventFill className="w-6 h-6 text-gray-500" />
               <span className="ml-3">Events</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/customerservices" className={({isActive})=>isActive? "flex p-3 mb-2 rounded-lg bg-gray-200":"flex mb-2  p-3 rounded-lg hover:bg-gray-200"}>
                <BsFillCalendarEventFill className="w-6 h-6 text-gray-500" />
               <span className="ml-3">Services</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/customerbookings" className={({isActive})=>isActive? "flex p-3 mb-2 rounded-lg bg-gray-200":"flex mb-2  p-3 rounded-lg hover:bg-gray-200"}>
                <BsFillCalendarEventFill className="w-6 h-6 text-gray-500" />
               <span className="ml-3">Bookings</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/customerappointments" className={({isActive})=>isActive? "flex p-3 mb-2 rounded-lg bg-gray-200":"flex mb-2  p-3 rounded-lg hover:bg-gray-200"}>
                <BsFillCalendarEventFill className="w-6 h-6 text-gray-500" />
               <span className="ml-3">Appointments</span>
            </NavLink>
        </li>
       

         <li>
            <NavLink to="/customerchat" className={({isActive})=>isActive? "flex p-3 rounded-lg bg-gray-200":"flex  p-3 rounded-lg hover:bg-gray-200"}>
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
               <span className="ml-3">Chat</span>
               <span className="inline-flex p-3 items-center justify-center ml-1 w-3 h-3 text-white bg-blue-600 rounded-full">15</span>
            </NavLink>
        </li> 
        </ul> 
    </div>
    </div>
  )
}

export default CustomerSidebar