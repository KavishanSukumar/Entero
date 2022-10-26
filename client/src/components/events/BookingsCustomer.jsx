import { useState, useEffect } from "react";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import "payhere-embed-sdk/dist/react.css";
import Payhere from "payhere-embed-sdk/dist/react";

const API_URL = "http://localhost:4000/api/review";
const USER_URL = "http://localhost:4000/api/auth/isverify";
const booking_URL = "http://localhost:4000/api/booking/";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  height: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};
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

function BookingsCustomer() {
  const [openForm, setOpenForm] = useState(false);
  const [viewForm, setViewForm] = useState(false);
  const [userid_c, setUserid_C] = useState();
  const [customerDetail, setCustomerDetail] = useState();
  const [serviceDetail, setServiceDetail] = useState();
  const [packageDetail, setPackageDetail] = useState();
  const [bookingDetail, setBookingDetail] = useState();
  const [userid_s, setUserid_S] = useState();
  const [booking_id, setBooking_id] = useState();
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [rateValue, setRateValue] = useState(1);
  const [bookings, setBookings] = useState([]);
  const [editReview, SetEditReview] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPayhere, setShowPayhere] = useState(false);

  const [value, setValue] = React.useState(0);

  async function fetchBookings() {
    try {
      const res = await axios.get(USER_URL, {
        headers: { token: localStorage.token },
      });

      let y = booking_URL + res.data.payload;
      const res1 = await axios.get(y);

      setBookings(res1.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenForm = async (booking) => {
    setSuccessMessage("");

    setUserid_C(booking.userid_c);
    setUserid_S(booking.userid_s);
    setBooking_id(booking.booking_id);

    let y = API_URL + "/" + booking.booking_id;

    const res = await axios.get(y);
    if (res.data.status) {
      setRateValue(res.data.reviewData.rating);
      setMessage(res.data.reviewData.content);

      SetEditReview(true);
    } else {
      setRateValue();
      setMessage();

      SetEditReview(false);
    }
    setOpenForm(true);
  };
  const handleCloseForm = () => setOpenForm(false);

  const handleOpenForm1 = async (booking) => {
    setUserid_C(booking.userid_c);
    setUserid_S(booking.userid_s);
    setBooking_id(booking.booking_id);

    let y = booking_URL + "/bookingdetail/" + booking.booking_id;
    const res = await axios.get(y);
    setBookingDetail(res.data.bookingDetail);
    setCustomerDetail(res.data.customerDetail);
    setPackageDetail(res.data.packageDetail);
    setServiceDetail(res.data.serviceDetail);
    setViewForm(true);
  };
  const handleCloseForm1 = () => setViewForm(false);

  const handleReview = async (e) => {
    e.preventDefault();

    let checkErrors = 0;
    try {
      if (!message.trim()) {
        setMessageError("Message is required");
        checkErrors = 1;
      }

      if (checkErrors == 0) {
        if (!editReview) {
          let res1 = await axios.post(API_URL, {
            rateValue,
            message,
            userid_c,
            userid_s,
            booking_id,
          });

          setSuccessMessage(res1.data.message);
          console.log(res1.data.message);
        } else {
          let y = API_URL + "/" + booking_id;
          let res1 = await axios.put(y, {
            rateValue,
            message,
            userid_c,
            userid_s,
            booking_id,
          });

          setSuccessMessage(res1.data.message);
          setMessage("");
          setRateValue(0);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCancel = async (id) => {
    try {
      let y = booking_URL + "/cancelbooking/" + id;
      const res = await axios.put(y);

      if (res.data) {
        fetchBookings();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" relative p-5 w-full mt-14 md:mt-0 mb-2 h-full">
      <div className="flex justify-start mb-7">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
          Booking
        </h2>
      </div>
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

        {/**This is the new bookings */}
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

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleOpenForm1(booking)}
                            className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleCancel(booking.booking_id)}
                            className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </TabPanel>
        {/**This is the pending bookings */}
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

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleOpenForm1(booking)}
                            className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleCancel(booking.booking_id)}
                            className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          >
                            Cancel
                          </button>
                          <button className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            pay
                          </button>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </TabPanel>

        {/**This is the present bookings */}
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
                            onClick={() => handleOpenForm1(booking)}
                            className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleCancel(booking.booking_id)}
                            className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </TabPanel>
        {/**This is the past bookings */}
        <TabPanel value={value} index={3}>
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
                            onClick={() => handleOpenForm1(booking)}
                            className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          >
                            View
                          </button>

                          <button
                            onClick={() => handleOpenForm(booking)}
                            className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                          >
                            Rate
                          </button>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </TabPanel>

        <TabPanel value={value} index={4}>
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
        </TabPanel>
      </Box>
      {/**review modal below */}
      <div>
        <Modal
          open={openForm}
          onClose={handleCloseForm}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="overflow-auto h-screen">
            <div className="flex flex-col justify-center place-items-center ">
              <p>Rate the service</p>
              <form
                className=" m-3  bg-white p-4  rounded-lg border-2 w-128 "
                onSubmit={handleReview}
                encType="multipart/form-data"
              >
                <div className="flex justify-center">
                  <Box
                    sx={{
                      width: 200,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      name="text-feedback"
                      value={rateValue}
                      precision={1}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                      onChange={(e) => {
                        setRateValue(e.target.value);
                      }}
                    />
                  </Box>
                </div>

                <div className="mt-4">
                  <textarea
                    name="message"
                    placeholder="Write a review.."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setMessageError("");
                    }}
                    rows="5"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                  ></textarea>
                  <p className="text-red-500 text-sm">{messageError}</p>
                </div>

                <button
                  type="submit"
                  className="border w-full my-5 py-1 bg-cyan-500 hover:bg-cyan-400 text-white"
                >
                  Submit
                </button>
              </form>
              {successMessage && (
                <p className="text-green-700">{successMessage}</p>
              )}
            </div>
          </Box>
        </Modal>
      </div>
      <div>
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
                    <b>Date:</b>{" "}
                    {bookingDetail && bookingDetail.date.substring(0, 10)}
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

export default BookingsCustomer;
