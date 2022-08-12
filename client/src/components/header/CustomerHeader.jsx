import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillBell,
  AiFillHome,
} from "react-icons/ai";

import BookIcon from "@mui/icons-material/Book";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ChatIcon from "@mui/icons-material/Chat";
import CelebrationIcon from '@mui/icons-material/Celebration';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Shakir from "../../Shakir.jpg";

function CustomerHeader() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [dropdownPic, setDropdownPic] = useState(false);
  const [dropdownBell, setDropdownBell] = useState(false);

  const handleDropdownPic = () => {
    setDropdownPic(!dropdownPic);
    if (dropdownBell) {
      setDropdownBell(!dropdownBell);
    }
  };
  const handleDropdownBell = () => {
    setDropdownBell(!dropdownBell);
    if (dropdownPic) {
      setDropdownPic(!dropdownPic);
    }
  };

  const picDropdown = (
    <div
      className="hidden md:block absolute top-14 right-0 w-44 z-50 bg-gray-100 rounded divide-y divide-gray-100 shadow "
      onMouseLeave={handleDropdownPic}
    >
      <ul class="py-1 text-sm text-gray-700">
        <NavLink to="/customerprofile">
          <li className="block py-2 px-4 hover:bg-gray-200">My Profile</li>
        </NavLink>
        <NavLink to="/">
          <li className="block py-2 px-4 hover:bg-gray-200">Logout</li>
        </NavLink>
      </ul>
    </div>
  );
  const bellDropdown = (
    <div
      className="hidden md:block absolute top-14 right-14 md:w-44 lg:w-72 z-50 bg-gray-100 rounded divide-y divide-gray-100 shadow "
      onMouseLeave={handleDropdownBell}
    >
      <ul class="py-1 text-sm text-gray-700">
        <NavLink to="/userprofile">
          <li className="block py-4 px-4 hover:bg-gray-200">Notification 1</li>
        </NavLink>
        <NavLink to="/userprofile">
          <li className="block py-4 px-4 hover:bg-gray-200">Notification 2</li>
        </NavLink>
        <NavLink to="/userprofile">
          <li className="block py-4 px-4 hover:bg-gray-200">Notification 3</li>
        </NavLink>
      </ul>
    </div>
  );

  return (
    <div className="fixed w-full flex items-center top-0  h-14 text-black bg-white shadow-2xl justify-between z-10">
      {/* After login styles */}
      {/* header logo */}

      <img
        src="/assets/images/Ss.svg"
        alt="logo"
        className="w-20 h-14 object-cover mt-3"
      />
      {/*header links */}
      <ul className="hidden md:flex">
        <li className="px-6 lg:px-8 py-3 hover:text-cyan-500 hover:rounded">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-cyan-500 hover:text-black" : ""
            }
            to="/customerhome"
          >
            Home
          </NavLink>
        </li>
        <li className="px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-cyan-500 hover:text-black" : ""
            }
            to="/customerservices"
          >
            Services
          </NavLink>
        </li>
        <li className="px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-cyan-500 hover:text-black" : ""
            }
            to="/customerevents"
          >
            Events
          </NavLink>
        </li>
        
      </ul>

      {/* After login components*/}
      <div className="hidden md:inline-flex items-center ">
        <div className="p-3">
          <AiFillBell
            size={24}
            className="text-black hover:text-gray-300"
            onClick={handleDropdownBell}
          />
        </div>

        <img
          src={Shakir}
          className="w-8 h-8 rounded-full mx-2 cursor-pointer hover:scale-125"
          onClick={handleDropdownPic}
        />
      </div>

      {dropdownPic ? picDropdown : ""}
      {dropdownBell ? bellDropdown : ""}

      {/* Responsive component */}
      <div onClick={handleNav} className="flex mx-2 md:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* The links are changed to the admins sidebar and not to the home,about us,contact us links */}
      <div
        className={
          nav
            ? "fixed left-0 top-14 w-full p-2 min-h-full overflow-y-auto bg-gray-800 text-white  md:hidden"
            : " fixed left-[-100%]"
        }
      >
        <div className="flex flex-col items-center shadow-2xl mb-2">
          {/*The image */}
          <div className="p-2">
            <img src={Shakir} className="w-28 h-28 rounded-full shadow-2xl " />
          </div>

          {/*The buttons */}
          <div className="flex flex-col w-44 p-2">
            <button className="  border-2   p-1 mb-1 rounded hover:bg-transparent hover:border-black">
              <NavLink to="/customerprofile">Profile</NavLink>
            </button>
            <button className=" border-2   p-1 rounded hover:bg-transparent hover:border-black">
              Logout
            </button>
          </div>
        </div>
        <ul className=" text-sm">
          <li className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg">
              <NavLink
                to="/customerhome"
                className={({ isActive }) =>
                  isActive
                    ? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1"
                    : "inline-flex items-center "
                }
              >
                <AiFillHome className="w-6 h-6 text-gray-500" />
                <span className="ml-3">Home</span>
              </NavLink>
            </li>
          <li className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1"
                  : "inline-flex items-center "
              }
            >
              <AiFillBell className="w-6 h-6 text-gray-500" />
              <span className="ml-3">Notifications</span>
            </NavLink>
          </li>

          <li className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg">
            <NavLink
              to="/customerevents"
              className={({ isActive }) =>
                isActive
                  ? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1"
                  : "inline-flex items-center "
              }
            >
              <CelebrationIcon className="w-6 h-6 text-gray-500" />
              <span className="ml-3">Events</span>
            </NavLink>
          </li>
          <li className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg">
            <NavLink
              to="/customerservices"
              className={({ isActive }) =>
                isActive
                  ? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1"
                  : "inline-flex items-center "
              }
            >
              <MiscellaneousServicesIcon className="w-6 h-6 text-gray-500" />
              <span className="ml-3">Services</span>
            </NavLink>
          </li>
          <li className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg">
            <NavLink
              to="/customerbookings"
              className={({ isActive }) =>
                isActive
                  ? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1"
                  : "inline-flex items-center "
              }
            >
              <BookIcon className="w-6 h-6 text-gray-500" />
              <span className="ml-3">Bookings</span>
            </NavLink>
          </li>
          <li className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg">
            <NavLink
              to="/customerappointments"
              className={({ isActive }) =>
                isActive
                  ? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1"
                  : "inline-flex items-center "
              }
            >
              <EventAvailableIcon className="w-6 h-6 text-gray-500" />
              <span className="ml-3">Appointments</span>
            </NavLink>
          </li>

          <li className="py-2 mb-4 border-b border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg">
            <NavLink
              to="/customerchat"
              className={({ isActive }) =>
                isActive
                  ? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1"
                  : "inline-flex items-center"
              }
            >
              <ChatIcon className="w-6 h-6 text-gray-500" />
              <span className="ml-3">Chat</span>
              <span className="inline-flex p-3 items-center justify-center ml-1 w-3 h-3 text-white bg-blue-600 rounded-full">
                15
              </span>
            </NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default CustomerHeader;
