import { useState,useEffect } from "react";

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

const API_URL = "http://localhost:4000/api/review";
const booking_URL= "http://localhost:4000/api/booking/57"

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  height: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  m: 3,
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
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [rateValue, setRateValue] = useState(1);
  const [bookings, setBookings]=useState([]);

  const [value, setValue] = React.useState(0);

  async function fetchBookings() {
    try {
      const res = await axios.get(booking_URL);
      setBookings(res.data);
    } catch (error) {
      console.error(error.message);
    }
  }
  

  useEffect(() => {
    fetchBookings();
  },[]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  const handleReview = async (e) => {
    e.preventDefault();

    let checkErrors = 0;
    try {
      if (!message.trim()) {
        setMessageError("Message is required");
        checkErrors = 1;
      }

      if (checkErrors == 0) {
        const res = await axios.post(API_URL, {
          rateValue,
          message,
        });

        setSuccessMessage(res.data.message);
        console.log(res.data.message);
      }
    } catch (error) {
      console.error(error.message);
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
            <Tab label="PRESENT BOOKINGS" {...a11yProps(2)} />
            <Tab label="PAST BOOKINGS" {...a11yProps(3)} />
            <Tab label="CANCELLED BOOKINGS" {...a11yProps(4)} />
          </Tabs>
        </Box>

        {/**This is the present bookings */}
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
                    Service provider
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
                {bookings.map((booking)=>(
                  booking.status==0&&(
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      B002
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Hall Services
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      13.06.2023
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      SK Hall Service
                    </td>
  
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <button className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        View
                      </button>
                      <button className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Cancel
                      </button>
                    </td>
                  </tr>
                  )
                ))}
                
              </tbody>
            </table>
          </div>
        </TabPanel>
        {/**This is the past bookings */}
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
                    Service provider
                  </th>

                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >Action</th>
                </tr>
              </thead>
              <tbody className="">
                {bookings.map((booking)=>(
                  booking.status==1 && (
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    B001
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Photography
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    12.03.2028
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Kalindu Studio
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Past
                  </td>

                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      View
                    </button>
                    <button
                      
                      className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                      >
                      Cancel
                    </button>
                    <button
                      
                      className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                      >
                      Pay
                    </button>
                  </td>
                </tr>
              )
              ))}
              </tbody>
            </table>
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
                            precision={0.5}
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
          </div>
        </TabPanel>
        
        {/**This is the cancelled bookings */}
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
                    Service provider
                  </th>

                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >Action</th>
                </tr>
              </thead>
              <tbody className="">
                {bookings.map((booking)=>(
                  booking.status==2&&(

                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    B003
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Photography
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    12.03.2022
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Melaka Studio
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Cancelled
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <button className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    View
                  </button>
                  <button className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Cancel
                  </button>
                  </td>
                  
                </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
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
                    Service provider
                  </th>

                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >Action</th>
                </tr>
              </thead>
              <tbody className="">
                {bookings.map((booking)=>{
                  booking.status==3 &&(

                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    B003
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Photography
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    12.03.2022
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Melaka Studio
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Cancelled
                  </td>
                  <td>
                  <button className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    View
                  </button>
                  <button className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Rating
                  </button>
                  </td>
                  
                </tr>
                  )
                })}
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
                    Service provider
                  </th>

                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >Action</th>
                </tr>
              </thead>
              <tbody className="">
                {bookings.map((booking)=>(
                  booking.status==4(

                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    B003
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Photography
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    12.03.2022
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Melaka Studio
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Cancelled
                  </td>
                  <td>
                  <button className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    View
                  </button>
                  </td>
                </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}

export default BookingsCustomer;
