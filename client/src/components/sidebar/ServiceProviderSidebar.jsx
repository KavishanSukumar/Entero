import React, { useState } from "react";
import SnippetFolderIcon from "@mui/icons-material/SnippetFolder";
import BookIcon from "@mui/icons-material/Book";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ChatIcon from "@mui/icons-material/Chat";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PaymentsIcon from "@mui/icons-material/Payments";
import { NavLink } from "react-router-dom";

// import EventIcon from '@mui/icons-material/Event';

function ServiceProviderSidebar() {
  const [portfolioLabel, setPortfolioLabel] = useState(false);
  const [bookingLabel, setBookingLabel] = useState(false);
  const [appointmentLabel, setAppointmentLabel] = useState(false);
  const [chatLabel, setChatLabel] = useState(false);
  const [ratingsLabel, setRatingsLabel] = useState(false);
  const [chargeLabel, setChargeLabel] = useState(false);

  const handleLabel = (id) => {
    switch (id) {
      case 1:
        setPortfolioLabel(!portfolioLabel);
        break;
      case 2:
        setBookingLabel(!bookingLabel);
        break;
      case 3:
        setAppointmentLabel(!appointmentLabel);
        break;
      case 4:
        setChatLabel(!chatLabel);
        break;
      case 5:
        setRatingsLabel(!ratingsLabel);
        break;
      case 6:
        setChargeLabel(!chargeLabel);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative z-10">
      <div className="hidden md:block fixed bg-transparent min-h-screen left-0 top-14 flex-col w-20">
        <div className="md:mt-0 flex flex-col items-center border-2 w-full h-screen py-6">
          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/serviceportfolio"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(1)}
              onMouseLeave={() => handleLabel(1)}
            >
              <SnippetFolderIcon className="!w-12 !h-12 text-rose-800 bg-rose-100 hover:scale-110 rounded-full p-3" />
            </NavLink>

            <span
              className={
                portfolioLabel
                  ? "absolute ml-[55px] w-28 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Portfolio
            </span>
          </div>

          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/servicebookings"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(2)}
              onMouseLeave={() => handleLabel(2)}
            >
              <BookIcon className="!w-12 !h-12 text-fuchsia-800 bg-fuchsia-100 hover:scale-110 rounded-full p-3" />
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
              to="/serviceappointments"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(3)}
              onMouseLeave={() => handleLabel(3)}
            >
              <EventAvailableIcon className="!w-12 !h-12 text-amber-500 bg-amber-100 hover:scale-110 rounded-full p-3" />
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
              to="/servicechat"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(4)}
              onMouseLeave={() => handleLabel(4)}
            >
              <ChatIcon className="!w-12 !h-12 text-pink-800 bg-pink-100 hover:scale-110 rounded-full p-3" />
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
          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/serviceratings"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(5)}
              onMouseLeave={() => handleLabel(5)}
            >
              <ReviewsIcon className="!w-12 !h-12 text-green-800 bg-green-100 hover:scale-110 rounded-full p-3" />
            </NavLink>

            <span
              className={
                ratingsLabel
                  ? "absolute ml-[55px] w-48 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Ratings & Feedback
            </span>
          </div>
          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/servicecharges"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(6)}
              onMouseLeave={() => handleLabel(6)}
            >
              <PaymentsIcon className="!w-12 !h-12 text-sky-800 bg-sky-100 hover:scale-110 rounded-full p-3" />
            </NavLink>

            <span
              className={
                chargeLabel
                  ? "absolute ml-[55px] w-28 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Charges
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviderSidebar;
