import React, { useState } from "react";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ChatIcon from "@mui/icons-material/Chat";

function CustomerSidebar() {
  const [profileLabel, setprofileLabel] = useState(false);
  const [bookingLabel, setBookingLabel] = useState(false);
  const [appointmentLabel, setAppointmentLabel] = useState(false);
  const [chatLabel, setChatLabel] = useState(false);

  const handleLabel = (id) => {
    switch (id) {
      case 2:
        setprofileLabel(!profileLabel);
        break;
      case 3:
        setBookingLabel(!bookingLabel);
        break;
      case 4:
        setAppointmentLabel(!appointmentLabel);
        break;
      case 5:
        setChatLabel(!chatLabel);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative z-10">
      <div className="hidden md:block fixed bg-transparent min-h-screen left-0 top-14 flex-col w-20">
        <div className=" md:mt-0 flex flex-col items-center border-2 w-full h-screen py-6">
          <div className="relative inline-flex items-center mb-4 ">
            <NavLink
              to="/customerprofile"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(2)}
              onMouseLeave={() => handleLabel(2)}
            >
              <PersonIcon className="!w-12 !h-12 text-emerald-900 bg-emerald-100 hover:scale-110 !rounded-full p-3" />
            </NavLink>

            <span
              className={
                profileLabel
                  ? "absolute ml-[55px] w-28 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Profile
            </span>
          </div>

          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/customerbookings"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(3)}
              onMouseLeave={() => handleLabel(3)}
            >
              <BookIcon className="!w-12 !h-12 text-fuchsia-900 bg-fuchsia-100 hover:scale-110 !rounded-full p-3" />
            </NavLink>

            <span
              className={
                bookingLabel
                  ? "absolute ml-[55px] w-28 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Bookings
            </span>
          </div>
          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/customerappointments"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(4)}
              onMouseLeave={() => handleLabel(4)}
            >
              <EventAvailableIcon className="!w-12 !h-12 text-amber-500 bg-amber-100 hover:scale-110  !rounded-full p-3" />
            </NavLink>

            <span
              className={
                appointmentLabel
                  ? "absolute ml-[55px] w-28 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Appointments
            </span>
          </div>
          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/customerchat"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(5)}
              onMouseLeave={() => handleLabel(5)}
            >
              <ChatIcon className="!w-12 !h-12 text-pink-800 bg-pink-100 hover:scale-110 !rounded-full p-3" />
            </NavLink>

            <span
              className={
                chatLabel
                  ? "absolute ml-[55px] w-28 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Chat
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerSidebar;
