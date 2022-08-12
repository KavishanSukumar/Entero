import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Shakir from "../../Shakir.jpg";
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

function AdminServiceProviders() {
  const [popup, setPopup] = useState(false);
  const [popupS, setPopupS] = useState(false);
  const [service, setService] = useState(false);
  const [serviceRegister, setServiceRegister] = useState(true);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePopup = () => {
    setPopup(!popup);
  };
  const handlePopupS = () => {
    setPopupS(!popupS);
  };
  const handleService = () => {
    if (!service) {
      setService(!service);
    }
    if (serviceRegister) {
      setServiceRegister(!serviceRegister);
    }
  };
  const handleServiceRegister = () => {
    if (!serviceRegister) {
      setServiceRegister(!serviceRegister);
    }
    if (service) {
      setService(!service);
    }
  };
  const serviceData = (
    <>
      <div className="overflow-auto justify-center w-full h-screen">
        <table class="min-w-full z-0">
          <thead class="bg-white border-b sticky top-0">
            <tr>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Service Provider_ID
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Name
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
                Status
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
                SP001
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Kalindu Studio
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Photography
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Active
              </td>

              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button
                  onClick={handlePopup}
                  className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  View
                </button>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button
                  onClick={handlePopup}
                  className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

  const serviceRegisterData = (
    <>
      <div className="overflow-auto justify-center w-full h-screen">
        <table class="min-w-full z-0">
          <thead class="bg-white border-b sticky top-0">
            <tr>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Service Provider_ID
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Name
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              ></th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              ></th>

              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              ></th>
            </tr>
          </thead>
          <tbody className="">
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                SP002
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Neol Catering
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button
                  onClick={handlePopupS}
                  className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  View
                </button>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                  Accept
                </button>
              </td>

              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
  return (
    <div className=" relative p-5 w-full mt-14 md:mt-0 mb-2 h-full">
      
      

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="SERVICES" {...a11yProps(0)} />
            <Tab label="SERVICE REGISTRATIONS" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
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
              placeholder="Search for services"
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>
          {serviceData}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {serviceRegisterData}
        </TabPanel>
      </Box>

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
              className="w-4 h-4 cursor-pointer"
              onClick={handlePopup}
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex flex-col  items-center shadow-2xl mb-2 ">
              {/*The image */}
              <div className="p-2">
                <img
                  src={Shakir}
                  alt=""
                  className="w-28 h-28 rounded-full shadow-2xl "
                />
              </div>

              {/*The buttons */}
              <div className="flex flex-col w-44 p-4">
                <button className=" border-2   p-1 mb-3 rounded bg-cyan-500 hover:bg-cyan-400">
                  Remove
                </button>
              </div>
            </div>
            <div className=" w-full">
              <p className="text-center text-base font-medium mb-2 border-b-2">
                Details
              </p>
              <p className="md:ml-8 px-1 text-left">
                <b>Name:</b> Perera and sons
              </p>
              <p className="md:ml-8 px-1 text-left">
                <b>BR:</b> 867564980
              </p>
              <p className="md:ml-8 px-1 text-left">
                <b>Address:</b> 45,Kings Cross,Colombo 02
              </p>
              <div className="mx-[20%]">
                <button className="mt-4 w-full md:ml-8 text-center p-1 text-white bg-cyan-500 hover:bg-cyan-400">
                  Visit Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div
        className={
          popupS
            ? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0"
            : "hidden"
        }
      >
        <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[70%] mx-[15%] p-2">
          <div className="w-full inline-flex justify-end items-end">
            <AiOutlineClose
              className="w-6 h-6 cursor-pointer"
              onClick={handlePopupS}
            />
          </div>

          <div className=" w-full">
            <p className="text-center text-base font-medium mb-2 border-b-2">
              Details
            </p>
            <p className="md:ml-8 px-1 text-left">
              <b>Name:</b> Kalindu Photography
            </p>
            <p className="md:ml-8 px-1 text-left">
              <b>BR:</b> 867564980
            </p>
            <p className="md:ml-8 px-1 text-left">
              <b>Address:</b> 32,Ruhuna Road, Colombo 02
            </p>
          </div>
          <div className="mx-[20%] bg-red-600">
            <p className="text-center">Document comes here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminServiceProviders;
