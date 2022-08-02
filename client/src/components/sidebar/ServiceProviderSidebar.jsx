import React,{useState} from 'react';
import { BsFillCalendar2CheckFill} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function ServiceProviderSidebar() {
    
        const [portfolioLabel,setPortfolioLabel]=useState(false);
        const [bookingLabel,setBookingLabel]=useState(false);
        const [appointmentLabel,setAppointmentLabel]=useState(false);
        const [chatLabel,setChatLabel]=useState(false);
        const [ratingsLabel,setRatingsLabel]=useState(false);
        const [chargeLabel,setChargeLabel]=useState(false);
    
        const handlePortfolioLabel=()=>{
            setPortfolioLabel(!portfolioLabel);
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
        const handleRatingsLabel=()=>{
          setRatingsLabel(!ratingsLabel);
      }
      const handleChargeLabel=()=>{
        setChargeLabel(!chargeLabel);
    }
        

  return (
    <div className="relative z-10">

        <div className="hidden md:block fixed bg-transparent shadow-2xl min-h-screen left-0 top-14 flex-col w-20 ">
            
            
            <div className="shadow-2xl md:mt-16 flex flex-col items-center border-2 w-full">   

                 <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/serviceportfolio" className="cursor-pointer" onMouseEnter={handlePortfolioLabel} onMouseLeave={handlePortfolioLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={portfolioLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Portfolio</span>
                </div> 

                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/servicebookings" className="cursor-pointer" onMouseEnter={handleBookingLabel} onMouseLeave={handleBookingLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={bookingLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Bookings</span>
                </div> 
                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/serviceappointments" className="cursor-pointer" onMouseEnter={handleAppointmentLabel} onMouseLeave={handleAppointmentLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={appointmentLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Appointments</span>
                </div> 
                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/servicechat" className="cursor-pointer" onMouseEnter={handleChatLabel} onMouseLeave={handleChatLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={chatLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Chat</span>
                </div>
                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/serviceratings" className="cursor-pointer" onMouseEnter={handleRatingsLabel} onMouseLeave={handleRatingsLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={ratingsLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Ratings</span>
                </div>
                <div className="relative inline-flex items-center mb-4">
                    <NavLink to="/servicecharges" className="cursor-pointer" onMouseEnter={handleChargeLabel} onMouseLeave={handleChargeLabel}>
                        <BsFillCalendar2CheckFill className="w-16 h-16 text-gray-400 hover:scale-110 hover:bg-gray-200"/>
                    </NavLink>

                    <span className={chargeLabel? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white":"hidden"}>Charges</span>
                </div> 
            </div>

        </div>
        
    </div>
  )
}

export default ServiceProviderSidebar