import { useState, useEffect } from "react";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";

const booking_URL = "http://localhost:4000/api/booking/";
const USER_URL = "http://localhost:4000/api/auth/isverify";

const viewstyle = {
  position: "absolute",
  top: "30%",
  left: "50%",
  height: "50%",
  width: "70%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

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

function BookingsServiceProvider() {
  const [value, setValue] = React.useState(0);
  const [viewForm, setViewForm] = useState(false);
  const [bookings, setBookings] = React.useState([]);
  const [customerDetail,setCustomerDetail]=useState();
  const [serviceDetail,setServiceDetail]=useState();
  const [packageDetail,setPackageDetail]=useState();
  const [bookingDetail,setBookingDetail]=useState();
  const [userid_s, setUserid_S] = useState();
  const [userid_c, setUserid_C] = useState();
  const [booking_id, setBooking_id] = useState();
  const [bookingsSp,setBookingsSp]=useState([])
  const [rawBookings, setRawBookings] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function fetchBookings() {
    try {
      const res = await axios.get(USER_URL, {
        headers: { token: localStorage.token },
      });

      let y = booking_URL +"serviceprovider/"+ res.data.payload;
      const res1 = await axios.get(y);
      
      setBookingsSp(res1.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleOpenForm1 =async (booking) => {
    setUserid_C(booking.userid_c);
    setUserid_S(booking.userid_s);
    setBooking_id(booking.booking_id);

    let y = booking_URL + "/bookingdetail/" + booking.booking_id;
    const res = await axios.get(y);
    setBookingDetail(res.data.bookingDetail)
    setCustomerDetail(res.data.customerDetail)
    setPackageDetail(res.data.packageDetail)
    setServiceDetail(res.data.serviceDetail)
    setViewForm(true);
  };
  const handleCloseForm1 = () => setViewForm(false);

  const handleCancel=async (id)=>{
    try {
      let y = booking_URL + "/cancelbookingsp/" + id;
      const res = await axios.put(y);
      
      if(res.data){
        fetchBookings();
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleAccept=async (id)=>{
    try {
      let y = booking_URL + "/acceptbooking/" + id;
      const res = await axios.put(y);
      
      if(res.data){
        fetchBookings();
      }
    } catch (error) {
      console.log(error)
    }
  }

  const searchbyName = (e) => {
    if (e.target.value === "") {
      setBookings(rawBookings);
    } else {
      const searchValue = e.target.value;
      const filteredBookings = rawBookings.filter((booking) => {
        return booking.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setBookings(filteredBookings);
    }
  };

  return (
    <div className="flex flex-col w-auto  justify-around mx-6 my-3">
      <div className="flex justify-start mb-7">
        <h2 className="text-2xl font-bold leading-7 font-serif text-gray-900 sm:text-3xl">
          Booking
        </h2>
      </div>
      <div className="my-3">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="NEW BOOKINGS" {...a11yProps(0)} />
            <Tab label="PENDING BOOKINGS" {...a11yProps(1)} />
            <Tab label="CONFIRMED BOOKINGS" {...a11yProps(2)} />
            <Tab label="PAST BOOKINGS" {...a11yProps(3)} />
            <Tab label="CANCELLED BOOKINGS" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="shadow-md p-3 w-auto rounded-md ">
              <div className="flex flex-col lg:flex-row ">
                <div className="basis-6/12 mx-3 my-3">
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
                      placeholder="Search by name..."
                      type="text"
                      name="search"
                      onChange={(e) => {
                        searchbyName(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="basis-6/12 flex flex-row justify-end">
                  <div className="flex  mx-3 my-3 justify-start lg:justify-end">
                    <button className="py-2 px-4 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      <DateRangeIcon /> Date Range
                    </button>
                  </div>
                  <div className="flex  mx-3 my-3 justify-start lg:justify-end">
                    <button className="py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      <AccessTimeIcon /> Time Range
                    </button>
                  </div>
                </div>
              </div>
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
                {bookingsSp.map(
                  (booking) =>
                    booking.status == "0" && (
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
                        <td>
                          <button
                            onClick={() => handleOpenForm1(booking)}
                            className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          >
                            View
                          </button>
                          <button onClick={() => handleAccept(booking.booking_id)} className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Accept
                          </button>
                          <button onClick={() => handleCancel(booking.booking_id)} className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Reject
                          </button>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="shadow-md p-3 w-auto rounded-md ">
              <div className="flex flex-col lg:flex-row ">
                <div className="basis-6/12 mx-3 my-3">
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
                      placeholder="Search by name..."
                      type="text"
                      name="search"
                    />
                  </label>
                </div>
                <div className="basis-6/12 flex flex-row justify-end">
                  <div className="flex mx-3 my-3 justify-start lg:justify-end">
                    <button className="py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      <AccessTimeIcon /> Time Range
                    </button>
                  </div>
                  <div className="flex mx-3 my-3 justify-start lg:justify-end">
                    <button className="py-2 px-4 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      <DateRangeIcon /> Date Range
                    </button>
                  </div>
                </div>
              </div>
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
                {bookingsSp.map(
                  (booking) =>
                    booking.status == "1" && (
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
                        <td>
                          <button
                            onClick={() => handleOpenForm1(booking)}
                            className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          >
                            View
                          </button>
                          <button onClick={() => handleCancel(booking.booking_id)} className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Cancel
                          </button>
                          
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="shadow-md p-3 w-auto rounded-md ">
              <div className="flex flex-col lg:flex-row ">
                <div className="basis-6/12 mx-3 my-3">
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
                      placeholder="Search by name..."
                      type="text"
                      name="search"
                    />
                  </label>
                </div>
                <div className="basis-6/12 flex flex-row justify-end">
                  <div className="flex basis-3/12 mx-3 my-3 justify-start lg:justify-end">
                    <button className="py-2 px-4 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      <DateRangeIcon /> Date Range
                    </button>
                  </div>
                  <div className="flex basis-3/12 mx-3 my-3 justify-start lg:justify-end">
                    <button className="py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      <AccessTimeIcon /> Time Range
                    </button>
                  </div>
                </div>
              </div>
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
                {bookingsSp.map(
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
                        <td>
                          <button
                            onClick={() => handleOpenForm1(booking)}
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
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="shadow-md p-3 w-auto rounded-md ">
              <div className="flex flex-col lg:flex-row ">
                <div className="basis-6/12 mx-3 my-3">
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
                      placeholder="Search by name..."
                      type="text"
                      name="search"
                    />
                  </label>
                </div>
                <div className="basis-6/12 flex flex-row justify-end">
                  <div className="flex basis-3/12 mx-3 my-3 justify-start lg:justify-end">
                    <button className="py-2 px-4 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      <DateRangeIcon /> Date Range
                    </button>
                  </div>
                  <div className="flex basis-3/12 mx-3 my-3 justify-start lg:justify-end">
                    <button className="py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      <AccessTimeIcon /> Time Range
                    </button>
                  </div>
                </div>
              </div>
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
                {bookingsSp.map(
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
                        <td>
                          <button
                            onClick={() => handleOpenForm1(booking)}
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
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className="shadow-md p-3 w-auto rounded-md ">
              <div className="flex flex-col lg:flex-row ">
                <div className="basis-6/12 mx-3 my-3">
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
                      placeholder="Search by name..."
                      type="text"
                      name="search"
                    />
                  </label>
                </div>
                <div className="basis-6/12 flex flex-row justify-end">
                  <div className="flex basis-3/12 mx-3 my-3 justify-start lg:justify-end">
                    <button className="py-2 px-4 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      <DateRangeIcon /> Date Range
                    </button>
                  </div>
                  <div className="flex basis-3/12 mx-3 my-3 justify-start lg:justify-end">
                    <button className="py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      <AccessTimeIcon /> Time Range
                    </button>
                  </div>
                </div>
              </div>
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
                {bookingsSp.map(
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
                        <td>
                          <button
                            onClick={() => handleOpenForm1(booking)}
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
            </div>
          </TabPanel>
        </Box>
        <Modal
          open={viewForm}
          onClose={handleCloseForm1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={viewstyle} className="overflow-auto h-screen">
            <div className="bg-white fixed  flex flex-col  w-full  h-[100%]">
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
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default BookingsServiceProvider;
