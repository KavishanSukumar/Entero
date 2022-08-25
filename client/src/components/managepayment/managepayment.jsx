import React from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SellIcon from "@mui/icons-material/Sell";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlineClose } from "react-icons/ai";

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

function ManagePayments() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [showpopup, setshowpopup] = React.useState(false);
  const handleOnClose = () => setshowpopup(false);
  const [popup, setPopup] = React.useState(false);

  const handlePopup = () => {
    setPopup(!popup);
  };

  return (
    <div className="m-10  flex flex-col">
      <div className="flex justify-start mb-7">
        <h2 className="text-2xl font-bold leading-7 font-serif text-gray-900 sm:text-3xl">
          Service Charges
        </h2>
      </div>

      <div
        className={
          popup
            ? "fixed overflow-y-auto flex flex-col backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  left-0 mb-5 "
            : "hidden"
        }
      >
        <div className="  rounded-3xl shadow-2xl top-[0%] flex flex-col mt-3 w-full h-full p-2 bg-white ">
          <div className="flex flex-row order-1">
            <div className="flex "></div>
            <div className="w-full inline-flex justify-end items-end">
              <AiOutlineClose
                className="w-6 h-6 cursor-pointer hover:text-red-500"
                onClick={handlePopup}
              />
            </div>
          </div>
          <div className="flex order-2 flex-row  gap-10 justify-evenly ">
            <div className="flex flex-col ">
              <div className="py-3">
                <p className="font-bold text-lg">Package 01</p>
              </div>

              <div className="flex flex-col bg-slate-500 p-5 rounded-lg ">
                <div class="mb-6">
                  <label
                    for="default-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Package Name
                  </label>
                  <input
                    type="text"
                    placeholder="Free Trail"
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="default-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Package Price
                  </label>
                  <input
                    type="text"
                    placeholder="Free"
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="default-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    placeholder="This Free trail package will give you one month free trial subscription"
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="py-3">
                <p className="font-bold text-lg">Package 02</p>
              </div>

              <div className="flex flex-col bg-slate-500 p-5 rounded-lg ">
                <div class="mb-6">
                  <label
                    for="default-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Package Name
                  </label>
                  <input
                    placeholder="Starndard"
                    type="text"
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="default-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Package Price
                  </label>
                  <input
                    placeholder="LKR 3,000"
                    type="text"
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="default-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Description
                  </label>
                  <textarea
                    placeholder="This Starndard package will give you 6 months  subscription"
                    type="text"
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="py-3">
                <p className="font-bold text-lg">Package 03</p>
              </div>

              <div className="flex flex-col bg-slate-500 p-5 rounded-lg ">
                <div class="mb-6">
                  <label
                    for="default-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Package Name
                  </label>
                  <input
                    type="text"
                    placeholder="Premium"
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="default-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Package Price
                  </label>
                  <input
                    type="text"
                    placeholder="LKR 5,000"
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="default-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    placeholder="This Premium package will give you 1 year subscription "
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex order-3 mt-10 justify-center rounded-lg p-[10px]  bg-[#e6f8fe]  ml-2">
            <div className="rounded-md shadow ">
              <button
                type="button"
                onClick={handlePopup}
                className="py-2 px-4  bg-cyan-500 hover:bg-blue-400 focus:ring-cyan-900 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-center rounded-lg p-[10px]  bg-[#e6f8fe] lg:mt-0 md:mt-0 sm:mt-8 mt-8">
        <div className="rounded-md shadow ">
          <button
            type="button"
            onClick={handlePopup}
            className="py-2 px-4  bg-cyan-500 hover:bg-blue-400 focus:ring-cyan-900 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Edit Packages
          </button>
        </div>
      </div>

      <div className="flex flex-col relative gap-4 mt-5">
        <div className="flex lg:flex-row flex-col order-1 lg:justify-between">
          <div className=" relative max-w-screen-xl my-3 px-4 sm:px-6 lg:px-8">
            <div className="h-auto lg:h-60 pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:w-[270px] lg:p-6">
                <h3 className="text-xl uppercase leading-8 font-extrabold text-gray-900 sm:text-xl sm:leading-9 dark:text-white">
                  <WorkspacePremiumIcon className="text-yellow-500 !h-10 !w-10" />
                  Free Trail
                </h3>
                <p className="mt-4 text-base  leading-6 text-gray-500 lg:w-[150px] dark:text-gray-200 mb-">
                  This Free Trail give you one month free trial subscription
                </p>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:pt-16 ">
                <div className="mt-7 flex items-center justify-center text-3xl leading-none font-extrabold text-gray-900 dark:text-white">
                  <span>It's Free</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative max-w-screen-xl my-3 px-4 sm:px-6 lg:px-8">
            <div className="h-auto lg:h-60 pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:w-[250px]  lg:p-6">
                <h3 className="text-2xl uppercase leading-8 font-extrabold text-gray-900 sm:text-xl sm:leading-9 dark:text-white">
                  <WorkspacePremiumIcon className="text-yellow-500 !h-10 !w-10" />
                  Starndard
                </h3>
                <p className="mt-4 text-base  leading-6 text-gray-500 lg:w-[150px] dark:text-gray-200 mb-">
                  This Starndard package will give you 6 month subscription
                </p>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 pt-16 ">
                <div className="mt-4 flex items-center justify-center text-3xl leading-none font-extrabold text-gray-900 dark:text-white">
                  <span>LKR 3,000</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative max-w-screen-xl my-3 px-4 sm:px-6 lg:px-8">
            <div className="h-auto lg:h-60 pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-6">
                <h3 className="text-2xl uppercase leading-8 font-extrabold text-gray-900 sm:text-xl sm:leading-9 dark:text-white">
                  <WorkspacePremiumIcon className="text-yellow-500 !h-10 !w-10" />
                  Premium
                </h3>
                <p className="mt-4 text-base  leading-6 text-gray-500 lg:w-[150px] dark:text-gray-200 mb-">
                  This premier package will give you 1 year subscription
                </p>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 pt-16">
                <div className="mt-4 flex items-center justify-center text-3xl leading-none font-extrabold text-gray-900 dark:text-white  ">
                  <span className="">LKR 5,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Past Service Charges" {...a11yProps(0)} />
              <Tab label="Pending Service Charges" {...a11yProps(1)} />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <div className="flex p-1 md:px-4 py-2 ">
              <div className="relative w-[500px]">
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
                    placeholder="Search "
                    type="text"
                    name="search"
                  />
                </label>
              </div>
            </div>
            <div className="overflow-auto justify-center w-full h-auto mt-5">
              <table class="min-w-full z-0">
                <thead class="bg-white border-b sticky top-0">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Payment_ID
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
                      Date
                    </th>

                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Package Name
                    </th>

                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Payment Method
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      P001
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      12:00:56
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      25:04:2022
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Premium Monthly
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      LKR 2000
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Visa
                    </td>
                  </tr>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      P002
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      14:00:00
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      23:04:2022
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Premium Monthly
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      LKR 2000
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Visa
                    </td>
                  </tr>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      P003
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      13:00:56
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      25:03:2022
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Premium 6 Months
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      LKR 11000
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Master Card
                    </td>
                  </tr>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      P004
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      10:00:56
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      05:02:2022
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Premium Monthly
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      LKR 2000
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Visa
                    </td>
                  </tr>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      P005
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      15:00:56
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      19:02:2022
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Premium 6 Months
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      LKR 11000
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Master Card
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* =======================================================================================================================================
                                                 pending service charges
 ======================================================================================================================================= */}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="flex p-1 md:px-4 py-2 ">
              <div className="relative w-[500px]">
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
                    placeholder="Search "
                    type="text"
                    name="search"
                  />
                </label>
              </div>
            </div>
            <div className="overflow-auto justify-center w-full h-auto mt-5">
              <table class="min-w-full z-0">
                <thead class="bg-white border-b sticky top-0">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Payment_ID
                    </th>

                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Due Date
                    </th>

                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Package Name
                    </th>

                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      P001
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      2:04:2022
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Premium Monthly
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      LKR 2000
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Pending
                    </td>
                  </tr>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      P002
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      23:05:2022
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Premium Monthly
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      LKR 2000
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Pending
                    </td>
                  </tr>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      P003
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      29:06:2022
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Premium Monthly
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      LKR 2000
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Pending
                    </td>
                  </tr>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      P004
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      2:07:2022
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Premium Monthly
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      LKR 2000
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Pending
                    </td>
                  </tr>
                  <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      P005
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      3:08:2022
                    </td>

                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Premium Monthly
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      LKR 2000
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                      Pending
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

export default ManagePayments;

// import { stringify } from 'postcss';
// import {Component} from 'react';
// import { useState } from 'react';
// import MockData from './payments.json'
// import SearchIcon from "@mui/icons-material/Search";
// import * as React from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box sx={{ p: 3 }}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }

//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
//   };

//   function a11yProps(index) {
//     return {
//       id: `simple-tab-${index}`,
//       "aria-controls": `simple-tabpanel-${index}`,
//     };
//   }

// export default function SortTable(){
//     const [values, setValues] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValues(newValue);
//     };
//      const [data, setdata] = useState(MockData);
//      const [order,setorder] = useState("ASC");
//      const sorting = (col) =>{
//         if(order =="ASC"){
//             const sorted = [...data].sort((a,b)=>
//                 a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
//             );
//             setdata(sorted);
//             setorder("DSC");
//         }
//         if(order =="DSC"){
//             const sorted = [...data].sort((a,b)=>
//                 a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
//             );
//             setdata(sorted);
//             setorder("ASC");
//         }
//      }
//      const sortnum = (col) =>{
//         if(order =="ASC"){
//             const sorted = [...data].sort((a,b)=>
//             {if(a[col]>b[col]) return 1;
//             if(a[col]<b[col]) return -1;
//             return 0;
//             });
//             setdata(sorted);
//             setorder("DSC");
//         }
//         if(order =="DSC"){
//             const sorted = [...data].sort((a,b)=>
//             {if(a[col]<b[col]) return 1;
//             if(a[col]>b[col]) return -1;
//             return 0;
//             });
//             setdata(sorted);
//             setorder("ASC");
//         }
//         }
//      const [value, setValue] = useState('');
//      const[dataSource, setDataSource] = useState(MockData);
//      const [tableFilter, setTableFilter] = useState();
//      const filterData = (e) =>{
//         if(e.target.value !=""){
//           setValue(e.target.value);
//           const filterTable =dataSource.filter(o=>Object.keys(o).some(k=>
//             stringify(o[k]).toLowerCase().includes(e.target.value.toLowerCase()))) ;
//             setTableFilter([...filterTable]);
//             setDataSource([...dataSource]);
//         }else{
//             setValue(e.target.value)
//         }
//      }

//      return(

//         <div className=' flex  h-screen'>

//              <div className='mt-20 w-full flex flex-col order-1'>
//                     <div className='flex flex-row ml-9'>
//                     <div className="flex p-1 md:px-4 py-2 ">
//                                 <div className="relative w-64">
//                                                 <select id="years" class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
//                                                 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
//                                                 <option selected>Year</option>
//                                                 <option value="2022">2022</option>
//                                                 <option value="2021">2021</option>
//                                                 <option value="2020">2020</option>
//                                                 <option value="2019">2019</option>
//                                                 <option value="2018">2018</option>
//                                                 <option value="2017">2017</option>

//                                                 </select>
//                                         </div>
//                             </div>

//                             <div className="flex p-1 md:px-4 py-2 ">
//                                 <div className="relative w-64">
//                                                             <select id="months" class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
//                                                             dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
//                                                             <option selected> Month</option>
//                                                             <option value="1">January</option>
//                                                             <option value="2">February</option>
//                                                             <option value="3">March</option>
//                                                             <option value="4">April</option>
//                                                             <option value="5">May</option>
//                                                             <option value="6">June</option>
//                                                             <option value="7">July</option>
//                                                             <option value="8">August</option>
//                                                             <option value="9">September</option>
//                                                             <option value="10">October</option>
//                                                             <option value="11">November</option>
//                                                             <option value="12">December</option>

//                                                             </select>
//                                         </div>
//                             </div>

//                             {/* <div className='flex order-3'>
//                                         <div className='m-6 justify-center'>
//                                         <form>
//                                         <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
//                                             <div className="relative w-[1100px]">
//                                             <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//                                                 <svg aria-hidden="true" className="w-5 h-5 text-black dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
//                                             </div>
//                                             <input type="search" value={value} id="default-search" className="block p-4 pl-10   w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-black  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required
//                                             onChange={filterData}/>

//                                             <button type="submit" className="text-white absolute right-2.5 bottom-2.5  bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-500 dark:hover:bg-black ">Search</button>
//                                             </div>
//                                         </form>

//                                         </div >

//                             </div > */}
//                             <div className="flex p-1 md:px-4 py-2 ">
//                                 <div className="relative w-64">

//                                 <label className="relative block">
//                                     <span className="sr-only">Search</span>
//                                     <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//                                     <SearchIcon
//                                         className="!h-5 !w-5 fill-slate-300"
//                                         viewBox="0 0 20 20"
//                                     />
//                                     </span>
//                                     <input
//                                     className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
//                                     placeholder="Search "
//                                     type="text"
//                                     name="search"
//                                     />
//                                 </label>
//                                 </div>
//                             </div>

//                     </div>

//                     <div className="overflow-auto justify-center w-full h-screen">
//         <table class="min-w-full z-0">
//           <thead class="bg-white border-b sticky top-0">
//             <tr>
//               <th
//                 scope="col"
//                 class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//               >
//                 User ID
//               </th>
//               <th
//                 scope="col"
//                 class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//               >
//                 Service Provider
//               </th>
//               <th
//                 scope="col"
//                 class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//               >
//                 Date of Payment
//               </th>
//               <th
//                 scope="col"
//                 class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
//               >
//                 Payment Status
//               </th>
//             </tr>

//                                 </thead>
//                                 <tbody className="">

//                                     {dataSource.map((d)=>{

//                                         return (

//                                             <tr key={d.userid} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
//                                                 <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.userid}</td>
//                                                 <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.service_provider}</td>
//                                                 <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.started_date}</td>
//                                                 <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.status}</td>

//                                             </tr>

//                                         )

//                                         }
//                                         )
//                                     }

//                                 </tbody>

//                                 </table>
//                 </div>

//              </div>
//         </div>

//      )

// }

// import { stringify } from 'postcss';
// import React,{Component} from 'react';
// import { useState } from 'react';
// import MockData from './payments.json'

// export default function SortTable(){
//      const [data, setdata] = useState(MockData);
//      const [order,setorder] = useState("ASC");
//      const sorting = (col) =>{
//         if(order =="ASC"){
//             const sorted = [...data].sort((a,b)=>
//                 a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
//             );
//             setdata(sorted);
//             setorder("DSC");
//         }
//         if(order =="DSC"){
//             const sorted = [...data].sort((a,b)=>
//                 a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
//             );
//             setdata(sorted);
//             setorder("ASC");
//         }
//      }
//      const sortnum = (col) =>{
//         if(order =="ASC"){
//             const sorted = [...data].sort((a,b)=>
//             {if(a[col]>b[col]) return 1;
//             if(a[col]<b[col]) return -1;
//             return 0;
//             });
//             setdata(sorted);
//             setorder("DSC");
//         }
//         if(order =="DSC"){
//             const sorted = [...data].sort((a,b)=>
//             {if(a[col]<b[col]) return 1;
//             if(a[col]>b[col]) return -1;
//             return 0;
//             });
//             setdata(sorted);
//             setorder("ASC");
//         }
//         }
//      const [value, setValue] = useState('');
//      const[dataSource, setDataSource] = useState(MockData);
//      const [tableFilter, setTableFilter] = useState();
//      const filterData = (e) =>{
//         if(e.target.value !=""){
//           setValue(e.target.value);
//           const filterTable =dataSource.filter(o=>Object.keys(o).some(k=>
//             stringify(o[k]).toLowerCase().includes(e.target.value.toLowerCase()))) ;
//             setTableFilter([...filterTable]);
//             setDataSource([...dataSource]);
//         }else{
//             setValue(e.target.value)
//         }
//      }

//      return(

//         <div className=' flex  h-screen'>

//              <div className='mt-20'>

//                 <div className='m-6'>
//                 <form>
//                   <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
//                     <div className="relative">
//                       <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//                         <svg aria-hidden="true" className="w-5 h-5 text-black dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
//                       </div>
//                       <input type="search" value={value} id="default-search" className="block p-4 pl-10   w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-black  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required
//                       onChange={filterData}/>

//                      <button type="submit" className="text-white absolute right-2.5 bottom-2.5  bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-500 dark:hover:bg-black ">Search</button>
//                     </div>
//                 </form>

//                 </div >
//                 <table className="shadow-2xl border-2 w-screen">
//                    <thead className='bg-slate-400 cursor-pointer'>
//                      <th onClick={()=>sortnum("event_id")}>Event id</th>
//                      <th onClick={()=>sorting("service_provider")}>Service provider</th>
//                      <th onClick={()=>sorting("customer_name")}>Customer name</th>
//                      <th onClick={()=>sortnum("started_date")}>Started date</th>
//                      <th onClick={()=>sortnum("ended_date")}>Ended date</th>
//                      <th onClick={()=>sorting("ispaid")}>Ispaid</th>

//                    </thead>
//                    <tbody className='text-center'>
//                     {value.length > 0 ? dataSource.map((d)=>{

//                     return (

//                         <tr key={d.event_id} className='cursor-pointer duration-300 hover:bg-cyan-500 hover:scale-105 h-auto even:bg-slate-200 hover:text-white'>
//                             <td>{d.event_id}</td>
//                             <td>{d.service_provider}</td>
//                             <td>{d.customer_name}</td>
//                             <td>{d.started_date}</td>
//                             <td>{d.ended_date}</td>
//                             <td>{d.ispaid}</td>
//                         </tr>

//                      )

//                     }
//                     )
//                     :
//                     dataSource.map((d)=>{

//                         return (

//                             <tr key={d.event_id} className='cursor-pointer duration-300 hover:bg-cyan-500 hover:scale-105 h-auto even:bg-slate-200 hover:text-white'>
//                                 <td>{d.event_id}</td>
//                                 <td>{d.service_provider}</td>
//                                 <td>{d.customer_name}</td>
//                                 <td>{d.started_date}</td>
//                                 <td>{d.ended_date}</td>
//                                 <td>{d.ispaid}</td>
//                             </tr>

//                          )

//                         }
//                         )

//                 }
//                    </tbody>

//                 </table>

//              </div>
//         </div>

//      )

// }

// <div className="basis-1/2 relative max-w-screen-xl my-3 px-4 sm:px-6 lg:px-8">
//           <div className="h-auto lg:h-72 pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
//             <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
//               <h3 className="text-2xl uppercase leading-8 font-extrabold text-gray-900 sm:text-xl sm:leading-9 dark:text-white">
//                 <WorkspacePremiumIcon className="text-yellow-500 !h-10 !w-10" />
//                 Premium
//               </h3>
//               <p className="mt-4 text-base leading-6 text-gray-500 dark:text-gray-200 lg:w-[150px] mb-">
//                 This premier package will give you one month free trial subscription
//                 and 6 months subscription
//               </p>
//             </div>
//             <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
//               <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-white">
//                 <span>LKR ll,000</span>
//               </div>
//               <div className="mt-6">
//                 <div className="rounded-md ">
//                   {/* <p className="py-2 px-4  text-white w-full  text-center text-base font-semibold  rounded-lg ">
//                     Activated
//                   </p> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

// <div className="basis-1/2 relative max-w-screen-xl my-3 px-4 sm:px-6 lg:px-8 lg:mr-6">
//           <div className="h-auto lg:h-72 pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
//             <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
//               <h3 className="text-2xl uppercase leading-8 font-extrabold text-gray-900 sm:text-xl sm:leading-9 dark:text-white">
//                 <WorkspacePremiumIcon className="text-yellow-500 !h-10 !w-10" />
//                 Premium
//               </h3>
//               <p className="mt-4 text-base leading-6 text-gray-500 dark:text-gray-200 lg:w-[150px] mb-">
//                 This premier package will give you one month free trial subscription
//                 and 6 months subscription
//               </p>
//             </div>
//             <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
//               <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-white">
//                 <span>LKR ll,000</span>
//               </div>
//               <div className="mt-6">
//                 <div className="rounded-md ">
//                   {/* <p className="py-2 px-4  text-white w-full  text-center text-base font-semibold  rounded-lg ">
//                     Activated
//                   </p> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
