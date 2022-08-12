import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function EventsAdmin() {
  const [popup, setPopup] = useState(false);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePopup = () => {
    setPopup(!popup);
  };

  const pastEventData = (
    <div className="overflow-auto justify-center w-full h-screen">
      <table class="min-w-full z-0">
        <thead class="bg-white border-b sticky top-0">
          <tr>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Booking_ID
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Customer
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Type
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            ></th>
          </tr>
        </thead>
        <tbody className="">
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                B001
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Kavin Fernando
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Birthday
              </td>
              

              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button
                  onClick={handlePopup}
                  className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
  );
  const pendingEventData = (
    <div className="overflow-auto justify-center w-full h-screen">
      <table class="min-w-full z-0">
        <thead class="bg-white border-b sticky top-0">
          <tr>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Booking_ID
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Customer
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Type
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            ></th>
          </tr>
        </thead>
        <tbody className="">
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                B003
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Devin Fernando
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Birthday
              </td>
              

              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button
                  onClick={handlePopup}
                  className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
        
      </table>
    </div>
  );

  const cancelledEventData = (
    <div className="overflow-auto justify-center w-full h-screen">
      <table class="min-w-full z-0">
        <thead class="bg-white border-b sticky top-0">
          <tr>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Booking_ID
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Customer
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Type
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            ></th>
          </tr>
        </thead>
        <tbody className="">
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                B005
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Hasini Perera
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Reception
              </td>
              

              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button
                  onClick={handlePopup}
                  className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
  );

  return (
    <div className=" relative  p-5 w-full mt-14 md:mt-0 mb-2 h-full">
      

      <div className="flex p-1 md:px-4 py-2 ">
        <div className="relative w-64">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <SearchIcon
                className="!h-5 !w-5 fill-slate-300"
                viewBox="0 0 20 20"
              />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for events"
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>

      <div
        className={
          popup
            ? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0"
            : "hidden"
        }
      >
        <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[70%] mx-[15%] p-2">
          <div className="w-full inline-flex justify-end items-end">
            <AiOutlineClose
              className="w-6 h-6 cursor-pointer"
              onClick={handlePopup}
            />
          </div>
          <div className="w-full mb-4">
            <p className="text-lg text-center font-medium border-b-2 border-gray-900">
              #3456 (Pending)
            </p>
          </div>

          <div className="w-full p-2 shadow-xl mb-10 grid grid-cols-1 lg:grid-cols-3">
            <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
              <p className="text-center font-medium border-b-2 border-white">
                Event Info
              </p>
              <p className="text-left">
                <b>Date:</b> 02.09.22
              </p>
              <p className="text-left">
                <b>Type:</b> Birthday
              </p>
              <p className="text-left">
                <b>Venue:</b> Shangrila Hotel Colombo 02
              </p>
            </div>
            <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
              <p className="text-center font-medium border-b-2 border-white">
                Customer
              </p>
              <p className="text-left">
                <b>ID:</b> 0065
              </p>
              <p className="text-left">
                <b>Name:</b> Kavin Fernando
              </p>
            </div>
            <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
              <p className="text-center font-medium border-b-2 border-white">
                Services
              </p>
              <p className="text-center">
                <b>Catering</b>
              </p>
              <p className="text-left">
                <b>ID:</b> 0876
              </p>
              <p className="text-left">
                <b>Name:</b> Royal Food
              </p>
              <p className="text-center">
                <b>Photography</b>
              </p>
              <p className="text-left">
                <b>ID:</b> 9865
              </p>
              <p className="text-left">
                <b>Name:</b> Kalin Studio
              </p>
            </div>
          </div>
        </div>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="PENDING" {...a11yProps(0)} />
            <Tab label="PAST" {...a11yProps(1)} />
            <Tab label="CANCELLED" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {pendingEventData}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {pastEventData}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {cancelledEventData}
        </TabPanel>
      </Box>
    </div>
  );
}

export default EventsAdmin;
