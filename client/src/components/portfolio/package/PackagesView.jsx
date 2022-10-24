import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const package_URL = "http://localhost:4000/api/serviceprovider/sp_packages";
const booking_URL= "http://localhost:4000/api/booking"
const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  bgcolor: "background.paper",
  borderRadius: 3,
  borderColor: "primary.main",
  transform: "translate(-50%, -50%)",
  height: 630,
  boxShadow: 24,
  p: 4,
};

export default function PackagesView() {
  
  
  const [popup, setPopup] = useState(false);
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [time, setTime] = useState("");
  const [timeError, setTimeError] = useState("");
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");
  const [eventName,setEventName]=useState("birthday");
  const [bookingDetails,setBookingDetails]=useState()

  const handlePopup = (a) => {
    setBookingDetails(a);
    console.log(a)
    console.log(bookingDetails)
    setPopup(!popup);
  };

  //get packages
  const [packages, setpackages] = useState([]);
   
  async function getpackages() {
    
    try {
      let y=package_URL+"/7"//have to send sp id here
      const res = await axios.get(y);
      setpackages(res.data);
      console.log("packages are got");
    } catch (error) {
      console.error(error.message);
      console.log("error in pkagecards getting packages");
    }
  }
  useEffect(() => {
    getpackages();
  }, []); 

  

  const onSubmitForm = async (e) => {
    e.preventDefault();
    let checkErrors = 0;

    const res = await axios.get("http://localhost:4000/api/auth/isverify", {
        headers: { token: localStorage.token },
      });
      
      let userid_c=res.data.payload;
      let userid_s=7;
      let package_id=e.target.package_id.value
      let price=e.target.price.value

    try {
      if (!date.trim()) {
        setDateError("Date is required");
        checkErrors = 1;
      }
      if (!time.trim()) {
        setTimeError("Time is required");
        checkErrors = 1;
      }
      if (!location.trim()) {
        setLocationError("Location is required");
        checkErrors = 1;
      }

      if(checkErrors==0){
        console.log(eventName,date,time,location,userid_c,userid_s,package_id,price)
        
      }
      
      const body = { date, time,location, eventName, userid_c,userid_s,package_id,price };
      const res = await axios.post(booking_URL, body);
      setDate("");
      setTime("");
      setLocation("");
      

      console.log(res.data);
      alert("Booking Request sent");
    } catch (error) {
      console.error(error.message);
    }
  };

  // set padding to description

  function setpadding(val) {
    if (val.length < 113) {
      //   // for (let i = 0; i < 113-val.length; i++) {
      //   //   val = val + '0'
      //   // }
      //   console.log('val lenght -> ',val.length );
      //   var val2 = val + '\0'.repeat(113-val.length)
      //  console.log('new val lenght',val2.length);
      return (
        <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200 ">
          {val}{" "}
        </p>
      );
    } else {
      return (
        <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
          {val}
        </p>
      );
    }
  }

  return (
    <>
      <div className="flex flex-col mt-[-50px]">
        <div className="relative max-w-screen-xl mx-auto my-3 px-4 sm:px-6 lg:px-8 flex flex-col gap-2">
          
          {packages &&
            packages.map((a) => (
              <div className="flex flex-col gap-2 mt-2 mb-4" key={a.package_id}>
                <div className="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                  <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12 xl:w-[1000px] lg:w-[600px]">
                    <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                      {a.name}
                    </h3>

                    {setpadding(a.des)}

                    <div className="mt-8">
                      <div className="flex items-center">
                        <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                          What&#x27;s included
                        </h4>
                        <div className="flex-1 border-t-2 border-gray-200"></div>
                      </div>
                      <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5 h-20 overflow-y-auto ">
                        {a.items.map((b, index) => (
                          <li
                            className="flex items-start lg:col-span-1"
                            key={index}
                          >
                            <div className="flex-shrink-0">
                              <svg
                                className="h-6 w-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                stroke="currentColor"
                                fill="#10b981"
                                viewBox="0 0 1792 1792"
                              >
                                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                              </svg>
                            </div>
                            <p className=" text-sm leading-5 text-gray-700 dark:text-gray-200">
                              {b}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-white">
                      <span>LKR {a.price}</span>
                    </div>
                    <div className="mt-6">
                      <div className="rounded-md shadow m-3">
                        <button
                          type="button"
                          onClick={()=>handlePopup(a)}
                          className="py-2 px-4  bg-cyan-500 hover:bg-blue-400 focus:ring-cyan-900 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <Modal
            open={popup}
            onClose={handlePopup}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={style}
              className="overflow-auto w-[70%] md:w-[40%] lg:w-[30%] h-screen"
            >
              <div className="flex flex-col gap-2">
                <div className="flex justify-center">
                  <p className="font-bold text-lg"> Book the package</p>
                </div>

                <form
                  onSubmit={onSubmitForm}
                  className="flex flex-col space-y-4 "
                >
                  <div className="mt-6 mb-4">
                    <label
                      for="package_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Package name
                    </label>
                    <input
                      type="text"
                      name="package_name"
                      placeholder="Date"
                      value={bookingDetails && bookingDetails.name}
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                    ></input>
                    
                  </div>
                  <div className="mt-6 mb-4">
                    <label
                      for="Price"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      placeholder="Date"
                      name="price"
                      value={bookingDetails && bookingDetails.price}
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                    ></input>
                    
                  </div>
                  
                  

                  <input type="hidden" name="package_id" value={bookingDetails && bookingDetails.package_id} />
                  
                  <div className="mt-6 mb-4">
                    <label
                      for="date"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      placeholder="Date"
                      name="date"
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        setDateError("");
                      }}
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                    ></input>
                    <p>{dateError}</p>
                  </div>

                  <div className="mb-4">
                    <label
                      for="time"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      placeholder="Time"
                      name="time"
                      value={time}
                      onChange={(e) => {
                        setTime(e.target.value);
                        setTimeError("");
                      }}
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                    ></input>
                    <p>{timeError}</p>
                  </div>

                  <div className="mb-4">
                    <label
                      for="location"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="Location"
                      name="time"
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                        setLocationError("");
                      }}
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                    ></input>
                    <p>{locationError}</p>
                  </div>

                  <div className="mb-4">
                    <label
                      for="eventName"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Choose Event Type
                    </label>

                    <select name="eventName"
                      value={eventName}
                      onChange={(e) => {
                        setEventName(e.target.value);
                        
                      }} className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black">
                      <option value="birthday">Birthday</option>
                      <option value="wedding">Wedding</option>
                      <option value="reception">Reception</option>
                      <option value="engagement">Engagement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    className="  w-full  px-6  py-2.5  bg-cyan-500  text-white  font-medium 
                 text-base  leading-tight  rounded-lg  shadow-md  hover:bg-cyan-700 hover:shadow-lg
                    focus:shadow-lg focus:outline-none focus:ring-0  active:bg-cyan-800 
                   active:shadow-lg  transition  duration-150  ease-in-out"
                  >
                    Book
                  </button>
                </form>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
}
