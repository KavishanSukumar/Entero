import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const booking_URL = "http://localhost:4000/api/booking";

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
  const [bookings, setBookings] = useState([]);
  const [customerDetail,setCustomerDetail]=useState();
  const [serviceDetail,setServiceDetail]=useState();
  const [packageDetail,setPackageDetail]=useState();
  const [bookingDetail,setBookingDetail]=useState()
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function fetchBookings() {
    try {
      const res1 = await axios.get(booking_URL);
      console.log(res1.data)
      setBookings(res1.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  const handlePopup = async (booking) => {
    let y = booking_URL + "/bookingdetail/" + booking.booking_id;
    const res = await axios.get(y);
    setBookingDetail(res.data.bookingDetail)
    setCustomerDetail(res.data.customerDetail)
    setPackageDetail(res.data.packageDetail)
    setServiceDetail(res.data.serviceDetail)
    setPopup(!popup);
  };

  return (
    <div className=" relative  p-5 w-full mt-14 md:mt-0 mb-2 h-full">
      <div className="flex justify-start mb-7">
        <h2 className="text-2xl font-bold leading-7 font-serif text-gray-900 sm:text-3xl">
          Bookings
        </h2>
      </div>
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
              onClick={handlePopup(1)}
            />
          </div>
          <div className="w-full mb-4">
                <p className="text-lg text-center font-medium border-b-2 border-gray-900">
                  Booking ID:{bookingDetail && bookingDetail.booking_id}
                </p>
              </div>

              <div className="w-full h-full p-2 shadow-xl mb-10 grid grid-cols-1 lg:grid-cols-3">
                <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                  <p className="text-center font-medium border-b-2 border-white lg:mb-10">
                    Event Info
                  </p>
                  <p className="text-left">
                    <b>Date:</b> {bookingDetail && bookingDetail.date.substring(0, 10)}
                  </p>
                  <p className="text-left">
                    <b>Type:</b> {bookingDetail && bookingDetail.type}
                  </p>
                  <p className="text-left">
                    <b>Venue:</b> {bookingDetail && bookingDetail.location}
                  </p>
                </div>
                <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                  <p className="text-center font-medium border-b-2 border-white lg:mb-10">
                    Customer
                  </p>
                  
                  <p className="text-left">
                    <b>Name:</b> {customerDetail && customerDetail.name}
                  </p>
                  <p className="text-left">
                    <b>Address:</b> {customerDetail && customerDetail.address}
                  </p>
                </div>
                <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                  <p className="text-center font-medium border-b-2 border-white lg:mb-10">
                    Service
                  </p>

                  <p className="text-left">
                    <b>Name:</b> {serviceDetail && serviceDetail.name}
                  </p>
                  <p className="text-left">
                    <b>Name:</b> {serviceDetail && serviceDetail.address}
                  </p>
                  <p className="text-left">
                    <b>Package:</b> {packageDetail && packageDetail.name}
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
            <Tab label="CONFIRMED BOOKINGS" {...a11yProps(0)} />
            <Tab label="PAST BOOKINGS" {...a11yProps(1)} />
            <Tab label="CANCELLED BOOKINGS" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
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
                    Category
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Time
                  </th>

                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {bookings.map(
                  (booking) =>
                    booking.status == "2" && (
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {booking.booking_id}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {booking.type}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {booking.date.substring(0, 10)}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {booking.time.substring(0, 10)}
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={()=>{handlePopup(booking)}}
                            className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          >
                            View
                          </button>
                          
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
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
                    Category
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Time
                  </th>

                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {bookings.map(
                  (booking) =>
                    booking.status == "3" && (
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {booking.booking_id}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {booking.type}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {booking.date.substring(0, 10)}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {booking.time.substring(0, 10)}
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={()=>{handlePopup(booking)}}
                            className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          >
                            View
                          </button>
                          
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
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
                    Category
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Time
                  </th>

                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {bookings.map(
                  (booking) =>
                    booking.status == "4" && (
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {booking.booking_id}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {booking.type}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {booking.date.substring(0, 10)}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {booking.time.substring(0, 10)}
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={()=>{handlePopup(booking)}}
                            className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          >
                            View
                          </button>
                          
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}

export default EventsAdmin;
