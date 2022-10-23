import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Shakir from "../../Shakir.jpg";
import SearchIcon from "@mui/icons-material/Search";

// import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";

import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

// import PageHeader from "../../../components/PagesHeader/PageHeader";
import Button from "../button/Button";
// import avatar from "../../documents/avatar.jpg";
// import avatar2 from "../../documents/avatar2.png";
import avatar3 from "../../documents/avatar3.png";
import avatar4 from "../../documents/avatar4.jpg";
import avatar5 from "../../documents/avatar5.jpg";

import Rate from "../rate/Rate";


import pho2 from "../../documents/pho2.jpg";

import { Link } from "react-router-dom";

const API_URL = "http://localhost:4000/api/customerevent";
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

function EventsCustomer(props) {
  const [popup, setPopup] = useState(false);
  const [popupS, setPopupS] = useState(false);
  //const [service, setService] = useState(false);

  const [serviceRegister, setServiceRegister] = useState(true);
  const [value, setValue] = React.useState(0);
  const [cevent, setCevent] = React.useState([]);
  const [id, setId] = useState();

  const [servicesError, setServicesError] = useState("");
  const [eventsError, setEventsError] = useState("");
  const [services, setServices] = useState([]);


  const [events, setEvents] = useState([]);
  const [events2, setEvents2] = useState([]);
  const [eventDetail, setEventDetails] = useState();
  // let hall = true ;
  // let decoration = true ;
  // let refreshment = true ;
  // let photography = true ;
  let hall = false;
  let decoration = false;
  let refreshment = false;
  let photography = false;
 
  if (services.includes("hall")) {
    hall = true;
   //  console.log(hall);
   }
   if (services.includes("decoration")) {
    decoration = true;
   }
   if (services.includes("refreshment")) {
    refreshment = true;
   }
   if (services.includes("photography")) {
    photography = true;
   }
  async function fetchCevent() {
    try {
      const res = await axios.get(API_URL);
      setEvents(res.data);
    

    } catch (error) {
      console.error(error.message);
    }

    // const res = await axios.post(API_URL, {
    //   id: id,
    // });
    // setCevent(res.data);
  }

  const serviceList = (e) => {
    if (services.includes(e.target.value)) {
       setServices(services.filter((g) => g !== e.target.value));


    } 
    else if (!services.includes(e.target.value)) {
      setServices([...services, e.target.value]);
    }
  };


  useEffect(() => {
    fetchCevent();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePopup = () => {
    setPopup(!popup);
  };
  const handlePopupS = () => {
    setPopupS(!popupS);
  };
  // const handleService = () => {
  //   if (!service) {
  //     setService(!service);
  //   }
  //   if (serviceRegister) {
  //     setServiceRegister(!serviceRegister);
  //   }
  // };

  // const handleServiceRegister = () => {
  //   if (!serviceRegister) {
  //     setServiceRegister(!serviceRegister);
  //   }
  //   if (service) {
  //     setService(!service);
  //   }
  // };

 



  return (
    <div className=" relative p-5 w-full mt-14 md:mt-0 mb-2 h-full">
      {/* <div className={serviceRegister ? "hidden" : "flex p-1 md:px-4 py-2 "}> */}
      <div className="relative w-64 mt-6 mb-6">
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
            placeholder="Search for Services..."
            type="text"
            name="search"
          />
        </label>
      </div>
      {/* </div> */}
      {/* tabs at the top of table
      <div className="w-full mt-2 md:w-[80%] md:mx-[10%] lg:w-[60%] lg:mx-[20%] text-[10px] md:text-xs">
        <ul class="flex ">
          <li
            className={
              service
                ? "mr-4 inline-block border-b-2 border-cyan-500 p-1 cursor-pointer text-cyan-500 uppercase text-lg "
                : "mr-4 inline-block p-1 border-b-2 hover:text-cyan-500 hover:border-cyan-500 cursor-pointer uppercase text-lg"
            }
            onClick={handleService}
          >
            Service
          </li>
          <li
            className={
              serviceRegister
                ? "mr-2 inline-block border-b-2 border-cyan-500 p-1 cursor-pointer text-cyan-500 uppercase text-lg "
                : "mr-2 inline-block p-1 border-b-2 hover:text-cyan-500 hover:border-cyan-500 cursor-pointer uppercase text-lg"
            }
            onClick={handleServiceRegister}
          >
            Service registrations
          </li>
        </ul>
      </div>
      end of tabs
      {service ? serviceData : serviceRegisterData} */}

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="BIRTHDAY" {...a11yProps(0)} />
            <Tab label="WEDDING" {...a11yProps(1)} />
            <Tab label="RECEPTION" {...a11yProps(2)} />
            <Tab label="ENGAGEMENT" {...a11yProps(3)} />
            <Tab label="OTHER OCCASION" {...a11yProps(4)} />
            {/* <Tab label="RECEPTION Testing" {...a11yProps(5)} /> */}

          
          </Tabs>
        </Box>

        <div className="flex flex-wrap lg:flex-nowrap justify-center">
          {/* <div
          className="flex flex-wrap
         gap-1"
        > */}
          <div>
            <br />
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
              Services
            </h3>
            {/* <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li class="w-full rounded-t-lg border-b border-gray-200 ">
                <div class="flex items-center pl-3">
                  <input
                    id="Caterings-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    checked
                  />
                  <label
                    for="Caterings-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    
                    Refreshment
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg border-b border-gray-200 ">
                <div class="flex items-center pl-3">
                  <input
                    id="Halls-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="Halls-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Halls
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg border-b border-gray-200 ">
                <div class="flex items-center pl-3">
                  <input
                    id="Decoration-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="Decoration-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Decoration
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg border-b border-gray-200 ">
                <div class="flex items-center pl-3">
                  <input
                    id="Photography-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="Photography-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Photography
                  </label>
                </div>
              </li>
            </ul> */}


{/* <div className="flex flex-col py-5 px-2 text-slate-500">
            <label>Service Category</label>
            <FormGroup className="px-3">
              <FormControlLabel
                control={
                  <Checkbox
                    value="refreshment"
                    onClick={(e) => {
                      serviceList(e);
                      setServicesError("");
                    }}
                  />
                }
                label="Refreshment"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="decoration"
                    onClick={(e) => {
                      serviceList(e);
                      setServicesError("");
                    }}
                  />
                }
                label="Decoration"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="photography"
                    onClick={(e) => {
                      serviceList(e);
                      setServicesError("");
                    }}
                  />
                }
                label="Photography"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="hall"
                    onClick={(e) => {
                      serviceList(e);
                      setServicesError("");
                    }}
                    checked
                  />
                }
                label="Hall Services"
              />
            </FormGroup>
            <p className="text-red-500 text-sm">{servicesError}</p>
          </div> */}


            <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li class="w-full rounded-t-lg border-b border-gray-200 ">
                <div class="flex items-center pl-3">
                  <input
                    id="refreshment-checkbox"
                    type="checkbox"
                    value="refreshment"
                    onClick={(e) => {
                      serviceList(e);
                      setServicesError("");
                    }}
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    checked="true"
                  />
                  <label
                    for="refreshment-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                   
                    Refreshment
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg border-b border-gray-200 ">
                <div class="flex items-center pl-3">
                  <input
                    id="Halls-checkbox"
                    type="checkbox"
                    value="hall"
                    onClick={(e) => {
                      serviceList(e);
                      setServicesError("");
                    }}
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="Halls-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Halls
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg border-b border-gray-200 ">
                <div class="flex items-center pl-3">
                  <input
                    id="Decoration-checkbox"
                    type="checkbox"
                    value="decoration"
                    onClick={(e) => {
                      serviceList(e);
                      setServicesError("");
                    }}
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="Decoration-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Decoration
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg border-b border-gray-200 ">
                <div class="flex items-center pl-3">
                  <input
                    id="Photography-checkbox"
                    type="checkbox"
                    value="photography"
                    onClick={(e) => {
                      serviceList(e);
                      setServicesError("");
                    }}
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="Photography-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Photography
                  </label>
                </div>
              </li>
            </ul>

            {/* <br />
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
              Status
            </h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li class="w-full rounded-t-lg border-b border-gray-200">
                <div class="flex items-center pl-3">
                  <input
                    id="premium-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="premium-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Premium
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg border-b border-gray-200">
                <div class="flex items-center pl-3">
                  <input
                    id="trial-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="trial-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Standard
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg border-b border-gray-200">
                <div class="flex items-center pl-3">
                  <input
                    id="trial-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="trial-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Trial
                  </label>
                </div>
              </li>
            </ul> */}
          </div>
          <div>
            <TabPanel value={value} index={0}>
            <div
                className="flex m-5 flex-wrap 
              gap-1"
              >




       <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
           <a href="#">
             <img
              class="rounded-t-lg"
              src="/assets/images/fabcake.jpg"
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                The Fab
              </h5>
            </a>
            {/* <p class="mb-3 font-normal text-gray-700 ">7</p> */}
            <Rate />
            <Link
              to="/customerserviceportfolio"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              See Portfolio
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>




                {events.map((event) => (
                //  console.log(refreshment,decoration,photography,hall),
                    (event.birthday  === true) && (( (event.refreshment === true) && (refreshment === true) ) || ((event.decoration === true) && (decoration === true)) || ((event.hallservices === true) && (hall === true)) || ((event.photography === true) && (photography === true)))  &&
              //    event.birthday  === true &&
                 <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md">
                    <a href="#">
                      <img
                        class="rounded-t-lg"
                        src={pho2}
                        alt=""
                        className=" w-72 h-60"
                      />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                          {/* CHE Studio */}
                          {event.name}
                        </h5>
                      </a>
                      {/* <p class="mb-3 font-normal text-gray-700 ">{event.userid}</p> */}
                      <Rate />
                      <Link
              to="/customerserviceportfolio"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
                        See Portfolio
                        <svg
                          aria-hidden="true"
                          class="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel value={value} index={1}>
                 <div
                className="flex m-5 flex-wrap 
              gap-1"
              >
                {events.map((event) => (
                  (event.wedding  === true) && (( (event.refreshment === true) && (refreshment === true) ) || ((event.decoration === true) && (decoration === true)) || ((event.hallservices === true) && (hall === true)) || ((event.photography === true) && (photography === true)))  &&
                  <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md">
                    <a href="#">
                      <img
                        class="rounded-t-lg"
                        src={pho2}
                        alt=""
                        className=" w-72 h-60"
                      />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                          {/* CHE Studio */}
                          {event.name}
                        </h5>
                      </a>
                      {/* <p class="mb-3 font-normal text-gray-700 ">{event.userid}</p> */}
                      <Rate />
                      <Link
              to="/customerserviceportfolio"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
                        See Portfolio
                        <svg
                          aria-hidden="true"
                          class="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel value={value} index={2}>
            <div
                className="flex m-5 flex-wrap 
              gap-1"
              >
                {events.map((event) => (
                  (event.reception  === true) && (( (event.refreshment === true) && (refreshment === true) ) || ((event.decoration === true) && (decoration === true)) || ((event.hallservices === true) && (hall === true)) || ((event.photography === true) && (photography === true)))  &&
                  <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md">
                    <a href="#">
                      <img
                        class="rounded-t-lg"
                        src={pho2}
                        alt=""
                        className=" w-72 h-60"
                      />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                          {/* CHE Studio */}
                          {event.name}
                        </h5>
                      </a>
                      {/* <p class="mb-3 font-normal text-gray-700 ">{event.userid}</p> */}
                      <Rate />
                      <Link
              to="/customerserviceportfolio"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
                        See Portfolio
                        <svg
                          aria-hidden="true"
                          class="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel value={value} index={3}>
            <div
                className="flex m-5 flex-wrap 
              gap-1"
              >
                {events.map((event) => (
                  (event.engagement === true) && (( (event.refreshment === true) && (refreshment === true) ) || ((event.decoration === true) && (decoration === true)) || ((event.hallservices === true) && (hall === true)) || ((event.photography === true) && (photography === true)))  &&
                  <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md">
                    <a href="#">
                      <img
                        class="rounded-t-lg"
                        src={pho2}
                        alt=""
                        className=" w-72 h-60"
                      />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                          {/* CHE Studio */}
                          {event.name}
                        </h5>
                      </a>
                      {/* <p class="mb-3 font-normal text-gray-700 ">{event.userid}</p> */}
                      <Rate />
                      <Link
              to="/customerserviceportfolio"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
                        See Portfolio
                        <svg
                          aria-hidden="true"
                          class="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel value={value} index={4}>
            <div
                className="flex m-5 flex-wrap 
              gap-1"
              >
                {events.map((event) => (
                  (event.other === true) && (( (event.refreshment === true) && (refreshment === true) ) || ((event.decoration === true) && (decoration === true)) || ((event.hallservices === true) && (hall === true)) || ((event.photography === true) && (photography === true)))  &&
                  <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md">
                    <a href="#">
                      <img
                        class="rounded-t-lg"
                        src={pho2}
                        alt=""
                        className=" w-72 h-60"
                      />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                          {/* CHE Studio */}
                          {event.name}
                        </h5>
                      </a>
                      {/* <p class="mb-3 font-normal text-gray-700 ">Premium</p> */}
                      <Rate />
                      <Link
              to="/customerserviceportfolio"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
                        See Portfolio
                        <svg
                          aria-hidden="true"
                          class="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
           
          </div>

          {/* </div> */}
        </div>
      </Box>

     
    
    </div>
  );
}

export default EventsCustomer;
