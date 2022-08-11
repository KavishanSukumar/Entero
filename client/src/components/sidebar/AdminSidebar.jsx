import React, { useState } from "react";
import { BsCalendar2Check } from "react-icons/bs";
import { MdSpaceDashboard, MdContactPhone } from "react-icons/md";
import { FaUsers, FaUserCog } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { TbReportAnalytics } from "react-icons/tb";

import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const [dashboardLabel, setDashboardLabel] = useState(false);
  const [customerLabel, setCustomerLabel] = useState(false);
  const [serviceLabel, setServiceLabel] = useState(false);
  const [eventLabel, setEventLabel] = useState(false);
  const [paymentLabel, setPaymentLabel] = useState(false);
  const [contactLabel, setContactLabel] = useState(false);
  const [reportLabel, setReportLabel] = useState(false);
  const handleLabel = (id) => {
    switch (id) {
      case 1:
        setCustomerLabel(!customerLabel);
        break;
      case 2:
        setServiceLabel(!serviceLabel);
        break;
      case 3:
        setDashboardLabel(!dashboardLabel);
        break;
      case 4:
        setEventLabel(!eventLabel);
        break;
      case 5:
        setPaymentLabel(!paymentLabel);
        break;
      case 6:
        setContactLabel(!contactLabel);
        break;
      case 7:
        setReportLabel(!reportLabel);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative z-10">
      <div className="hidden md:block fixed bg-transparent shadow-2xl min-h-screen left-0 top-14 flex-col w-20 ">
        <div className="shadow-2xl md:mt-20 flex flex-col items-center border-2 w-full">
          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/admindashboard"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(3)}
              onMouseLeave={() => handleLabel(3)}
            >
              <MdSpaceDashboard className="w-12 h-12 text-cyan-500 hover:scale-110 hover:bg-gray-200" />
            </NavLink>

            <span
              className={
                dashboardLabel
                  ? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Dashboard
            </span>
          </div>

          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/adminusercustomer"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(1)}
              onMouseLeave={() => handleLabel(1)}
            >
              <FaUsers className="w-12 h-12 text-cyan-500 hover:scale-110 hover:bg-gray-200" />
            </NavLink>

            <span
              className={
                customerLabel
                  ? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Customers
            </span>
          </div>
          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/adminuserservice"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(2)}
              onMouseLeave={() => handleLabel(2)}
            >
              <FaUserCog className="w-12 h-12 text-cyan-500 hover:scale-110 hover:bg-gray-200" />
            </NavLink>

            <span
              className={
                serviceLabel
                  ? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Services
            </span>
          </div>

          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/adminevents"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(4)}
              onMouseLeave={() => handleLabel(4)}
            >
              <BsCalendar2Check className="w-12 h-12 text-cyan-500 hover:scale-110 hover:bg-gray-200" />
            </NavLink>

            <span
              className={
                eventLabel
                  ? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Events
            </span>
          </div>
          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/adminpayment"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(5)}
              onMouseLeave={() => handleLabel(5)}
            >
              <GiMoneyStack className="w-12 h-12 text-cyan-500 hover:scale-110 hover:bg-gray-200" />
            </NavLink>

            <span
              className={
                paymentLabel
                  ? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Payment
            </span>
          </div>

          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/adminreports"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(7)}
              onMouseLeave={() => handleLabel(7)}
            >
              <TbReportAnalytics className="w-12 h-12 text-cyan-500 hover:scale-110 hover:bg-gray-200" />
            </NavLink>

            <span
              className={
                reportLabel
                  ? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Reports
            </span>
          </div>

          <div className="relative inline-flex items-center mb-4">
            <NavLink
              to="/admincontact"
              className="cursor-pointer"
              onMouseEnter={() => handleLabel(6)}
              onMouseLeave={() => handleLabel(6)}
            >
              <MdContactPhone className="w-12 h-12 text-cyan-500 hover:scale-110 hover:bg-gray-200" />
            </NavLink>

            <span
              className={
                contactLabel
                  ? "absolute ml-[70px] w-28 text-center rounded-md bg-black text-white"
                  : "hidden"
              }
            >
              Contact
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
