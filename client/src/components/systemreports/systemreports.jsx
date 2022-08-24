import React, { Component } from "react";
import { useState } from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { stringify } from "postcss";
import "tw-elements";
import event_data from "./eventdata.json";
import cus from "./cus.json";
import ser from "./ser.json";
import CustomerRate from "./cus_rate";
import MockData from "./monthlypay.json";
import SearchIcon from "@mui/icons-material/Search";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { AiOutlineClose } from "react-icons/ai";
import Shakir from "../../Shakir.jpg";
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

// ======================================================
function TabPanel1(props) {
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

TabPanel1.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps1(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
//========================================================
export default function SystemReports() {
  //donut chart

  const options = {
    labels: ["Service Providers", "Customers"],
    colors: ["#EF4444", "#0284C7"],
  };
  const series = [100, 400];

  // pie chart
  const options1 = {
    labels: ["Catering", "Hall", "Decoration", "Photography"],
  };
  const series1 = [100, 70, 20, 10];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value1, setValue1] = React.useState(0);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const [data, setdata] = useState(MockData);
  const [eventdata, setdata2] = useState(event_data);
  const [cusdata, setdata3] = useState(cus);
  const [serdata, setdata4] = useState(ser);
  const [showpopup, setshowpopup] = useState(false);
  const handleOnClose = () => setshowpopup(false);
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(!popup);
  };

  // show more in income

  const [showMore, setShowMore] = useState(false);
  const handlelessmore = () => {
    setShowMore(!showMore);
  };
  // show more in events
  const [showMore1, setShowMore1] = useState(false);
  const handlelessmore1 = () => {
    setShowMore1(!showMore1);
  };
  // show more in users
  const [showMore2, setShowMore2] = useState(false);
  const handlelessmore2 = () => {
    setShowMore2(!showMore2);
  };

  // bar chart props in income
  const optionsbar = {
    series: [
      {
        data: [20000, 24000, 4000, 8000],
        name: "Standard package",
      },
      {
        data: [21000, 14000, 7000, 14000],
        name: "Premium package",
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: true,
    },

    xaxis: {
      categories: ["Caterings", "Halls", "Decorations", "Photography"],
    },
    yaxis: {
      showAlways: true,
      title: {
        text: "Amount (LKR)",
      },
    },
  };

  return (
    <div className=" relative p-5 w-full  md:mt-0 mb-2 h-full ">
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
            <p className="text-lg text-center font-medium border-b-2 border-gray-900"></p>
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
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className=" lg:mt-0 md:mt-0 sm:mt-10 mt-10"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="INCOME" {...a11yProps(0)} />
            <Tab label="Bookings" {...a11yProps(1)} />
            <Tab label="USERS" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="flex flex-col gap-16 ">
            <div className="flex flex-col order-1">
              <div className="flex order-1 p-1 flex-col py-2 gap-4">
                <div className="flex order-1 flex-row justify-center  ">
                  <div className="flex order-1 gap-3 ">
                    <div className="order-1 flex mt-2">
                      <p className="text-lg font-bold"> Filter by </p>
                    </div>
                    <div className="relative w-40 order-2 ">
                      <select
                        id="years"
                        class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                      >
                        <option selected>Year</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex order-2 justify-center">
                  <div clasName="flex flex-col">
                    <div className="flex order-1 justify-center shadow-lg shadow-black bg-gray-300 rounded-lg">
                      <p className="font-bold  lg:text-[25px] md:text-[25px] sm:text-[25px]  p-2">
                        Total Income: LKR 112000 (2022 - up to now)
                      </p>
                    </div>
                    <div className=" flex order-2 justify-center flex-row gap-14 mt-6">
                      <p className="font-bold  lg:text-[21px] md:text-[21px] sm:text-[20px] shadow-lg bg-slate-200 rounded-lg p-2">
                        Catering: LKR 41000
                      </p>
                      <p className="font-bold  lg:text-[21px] md:text-[21px] sm:text-[20px] shadow-lg bg-slate-200 rounded-lg p-2">
                        Halls: LKR 38000
                      </p>
                      <p className="font-bold  lg:text-[21px] md:text-[21px] sm:text-[20px] shadow-lg bg-slate-200 rounded-lg p-2">
                        Decoration: LKR 11000
                      </p>
                      <p className="font-bold  lg:text-[21px] md:text-[21px] sm:text-[20px] shadow-lg bg-slate-200 rounded-lg p-2">
                        Photography: LKR 22000
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex order-2 mt-10 justify-center pl-30">
                <Chart
                  options={optionsbar}
                  series={optionsbar.series}
                  type="bar"
                  className="lineChartVerticleStyle  lg:w-[800px] lg:h-[500px] md:w-[700px] md:h-[400]  md:ml-1  sm:w-[505px] sm:h-[300px]  xs:w-[200px]     bg-cyan-100 rounded-lg"
                />
              </div>
            </div>

            <div className="flex order-2 justify-center">
              <div class="flex  space-x-2 justify-center">
                <button
                  onClick={handlelessmore}
                  type="button"
                  class="inline-block p-3 bg-blue-600 text-white font-medium text-sm leading-tight  hover:bg-cyan-500 rounded-lg shadow-md"
                >
                  {showMore ? "Less details" : "More details"}
                </button>
              </div>
            </div>

            <div className={showMore ? "flex flex-col order-3" : "hidden"}>
              <div className="flex flex-row order-1  mr-3 ml-3">
                <div className="relative w-36 mt-2">
                  <select
                    id="years"
                    class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                  >
                    <option selected>Year</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                  </select>
                </div>
                <div className="flex p-1 md:px-4 py-2 ">
                  <div className="relative lg:w-36 md:w-36 sm:w-28">
                    <select
                      id="cat"
                      class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 
                                                            dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                    >
                      <option selected> Catergoty</option>
                      <option value=""> Hall</option>
                      <option value=""> Catering</option>
                      <option value=""> Decoration</option>
                      <option value=""> Photography</option>
                    </select>
                  </div>
                </div>
                <div className="flex p-1 md:px-4 py-2 ">
                  <div className="relative lg:w-36 md:w-36 sm:w-28">
                    <select
                      id="cat"
                      class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 
                                                            dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                    >
                      <option selected> Package</option>
                      <option value=""> Standard</option>
                      <option value="">Premium</option>
                    </select>
                  </div>
                </div>

                <div className="mt-1 ml-auto flex ">
                  <p className="font-bold  text-xl ">Income (LKR): 200000</p>
                </div>
              </div>
              <div className="flex p-1 md:px-4 py-2 order-2">
                <div className="relative w-full ">
                  <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <SearchIcon
                        className="!h-5 !w-5 fill-slate-300"
                        viewBox="0 0 20 20"
                      />
                    </span>
                    <input
                      className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
                      placeholder="Search "
                      type="text"
                      name="search"
                    />
                  </label>
                </div>
              </div>

              <div class="flex flex-col order-3 mt-5">
                <div className="overflow-auto justify-center w-full h-screen   ">
                  <table class="min-w-full z-0  mr-10 ">
                    <thead class="bg-white border-b sticky top-0">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          User ID
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Service Provider
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Catergory
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Package
                        </th>

                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Amount(LKR)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {data.map((d) => {
                        return (
                          <tr
                            key={d.ID}
                            className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                          >
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {d.ID}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {d.ServiceProvider}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {d.cat}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {d.type}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {d.Amount}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div
            class="tab-pane fade flex flex-col gap-16   w-full"
            id="tabs-profile"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            <div className="flex flex-col">
              <div className="flex order-1 gap-3 mb-3 justify-center">
                <div className="order-1 flex mt-2">
                  <p className="text-lg font-bold"> Filter by </p>
                </div>
                <div className="relative w-40 order-2 ">
                  <select
                    id="years"
                    class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                  >
                    <option selected>Year</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                  </select>
                </div>
                <div className="flex  order-3">
                  <div className="relative w-36">
                    <select
                      id="months"
                      class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                            dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                    >
                      <option selected> Month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex order-2 justify-center">
                <div class="flex flex-row gap-2 bg-gray-300 rounded-lg  shadow-lg  shadow-black w-full   py-5 px-6 mb-4 text-2xl text-black  font-bold  justify-center">
                  <p className=" lg:text-[25px] md:text-[25px] sm:text-[25px] text-[15px]">
                    Total Bookings : 200 (2022 - up to now)
                  </p>
                </div>
              </div>

              <div className="flex order-3 mt-2 justify-center pl-36">
                <Chart
                  options={options1}
                  series={series1}
                  type="pie"
                  width="500"
                  height="900"
                  className=""
                />
              </div>

              <div class="flex mt-2 space-x-2 justify-center order-4">
                <button
                  onClick={handlelessmore1}
                  type="button"
                  class="inline-block p-3 bg-blue-600 text-white font-medium text-sm leading-tight  hover:bg-cyan-500 rounded-lg shadow-md"
                >
                  {showMore1 ? "Less details" : "More details"}
                </button>
              </div>

              <div
                className={
                  showMore1 ? "flex order-5 flex-row w-auto mt-5" : "hidden"
                }
              >
                <div className="flex p-1 md:px-4 py-2 ">
                  <div className="relative w-36">
                    <select
                      id="years"
                      class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                    >
                      <option selected>Year</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                    </select>
                  </div>
                </div>

                <div className="flex p-1 md:px-4 py-2 ">
                  <div className="relative w-36">
                    <select
                      id="months"
                      class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                            dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                    >
                      <option selected> Month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>
                </div>

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

                <div className={"mt-2  flex w-72 justify-end"}>
                  <p className="font-bold  text-lg ">Total Bookings : 200</p>
                </div>
              </div>

              <div className={showMore1 ? "flex order-6 mt-10" : "hidden"}>
                <div className="overflow-auto justify-center w-full h-screen">
                  <table class="min-w-full z-0  mr-10">
                    <thead class="bg-white border-b sticky top-0">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Booking Id
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Catergory
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
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {eventdata.map((d) => {
                        return (
                          <tr
                            key={d.id}
                            className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                          >
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {d.eventid}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {d.eventname}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {d.customer}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {d.startdate}
                            </td>

                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={handlePopup}
                                className="m-1 py-2 px-4 w-auto bg-blue-500 text-white font-semibold rounded-lg shadow-md
                               hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                              >
                                More Details
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div class="tab-pane fade flex flex-col gap-3  w-full ">
            <div className="flex order-1 gap-3 mb-3 justify-center">
              <div className="order-1 flex mt-2">
                <p className="text-lg font-bold"> Filter by </p>
              </div>
              <div className="relative w-40 order-2 ">
                <select
                  id="years"
                  class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                >
                  <option selected>Year</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                </select>
              </div>
              <div className="flex  order-3">
                <div className="relative w-36">
                  <select
                    id="months"
                    class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                            dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                  >
                    <option selected> Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col order-2 justify-center ">
              <div
                class="flex justify-center rounded-lg  mb-4 text-2xl text-black shadow-lg shadow-black  bg-gray-300  order-1 font-bold bold  w-full "
                role="alert"
              >
                <p className=" p-4 rounded-2xl ">
                  All Users : 500 (2022 - up to now)
                </p>
              </div>
              <div className=" order-2 flex flex-row justify-center  ml-[150px] mt-4">
                <Chart
                  options={options}
                  series={series}
                  type="donut"
                  width="500"
                  height="900"
                />
              </div>
            </div>

            <div className="flex order-3 justify-center">
              <div class="flex  space-x-2 justify-center">
                <button
                  onClick={handlelessmore2}
                  type="button"
                  class="inline-block p-3 bg-blue-600 text-white font-medium text-sm leading-tight  hover:bg-cyan-500 rounded-lg shadow-md"
                >
                  {showMore2 ? "Less details" : "More details"}
                </button>
              </div>
            </div>

            <Box
              sx={{ width: "100%" }}
              className={showMore2 ? "order-4" : "hidden"}
            >
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value1}
                  onChange={handleChange1}
                  aria-label="basic tabs example"
                >
                  <Tab label="SERVICE PROVIDERS" {...a11yProps1(0)} />
                  <Tab label="CUSTOMERS" {...a11yProps1(1)} />
                </Tabs>
              </Box>

              <TabPanel1 value={value1} index={0}>
                <div
                  class="tab-pane fade show active flex flex-col"
                  id="tabs-home3"
                  role="tabpanel"
                  aria-labelledby="tabs-home-tab3"
                >
                  <div className="flex order-1 flex-row w-full ml-[-31px]">
                    <div className="flex p-1 md:px-4 py-2 ">
                      <div className="relative w-36">
                        <select
                          id="years"
                          class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                        >
                          <option selected>Year</option>
                          <option value="2022">2022</option>
                          <option value="2021">2021</option>
                          <option value="2020">2020</option>
                          <option value="2019">2019</option>
                          <option value="2018">2018</option>
                          <option value="2017">2017</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex p-1 md:px-4 py-2 ">
                      <div className="relative w-36">
                        <select
                          id="months"
                          class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                            dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                        >
                          <option selected> Month</option>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                      </div>
                    </div>

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

                    <div className="mt-2 ml-[-46px] flex w-72 justify-end">
                      <p className="font-bold  text-xl ">Total Users : 100</p>
                    </div>
                  </div>

                  <div className="flex order-2  ml-[-30px]">
                    <div className="flex order-3 mt-10 w-full">
                      <div className="overflow-auto justify-center w-full h-screen">
                        <table class="min-w-full z-0  mr-10">
                          <thead class="bg-white border-b sticky top-0">
                            <tr>
                              <th
                                scope="col"
                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                User Id
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
                                Catergory
                              </th>
                              <th
                                scope="col"
                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                Joined date
                              </th>
                            </tr>
                          </thead>
                          <tbody className="">
                            {serdata.map((d) => {
                              return (
                                <tr
                                  key={d.id}
                                  className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                >
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {d.id}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {d.name}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {d.cat}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {d.jdate}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel1>

              <TabPanel1 value={value1} index={1}>
                <div
                  class="tab-pane fade rounded "
                  id="tabs-profile3"
                  role="tabpanel"
                  aria-labelledby="tabs-profile-tab3"
                >
                  <div className="flex order-1 flex-row w-full ml-[-31px]">
                    <div className="flex p-1 md:px-4 py-2 ">
                      <div className="relative w-36">
                        <select
                          id="years"
                          class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                        >
                          <option selected>Year</option>
                          <option value="2022">2022</option>
                          <option value="2021">2021</option>
                          <option value="2020">2020</option>
                          <option value="2019">2019</option>
                          <option value="2018">2018</option>
                          <option value="2017">2017</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex p-1 md:px-4 py-2 ">
                      <div className="relative w-36">
                        <select
                          id="months"
                          class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                            dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                        >
                          <option selected> Month</option>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                      </div>
                    </div>

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

                    <div className="mt-2 ml-[-46px] flex w-72 justify-end">
                      <p className="font-bold  text-xl ">Total Users : 400</p>
                    </div>
                  </div>

                  <div className="flex order-2 ml-[-30px]">
                    <div className="flex order-3 mt-10 w-full">
                      <div className="overflow-auto justify-center w-full h-screen">
                        <table class="min-w-full z-0  mr-10">
                          <thead class="bg-white border-b sticky top-0">
                            <tr>
                              <th
                                scope="col"
                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                User Id
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
                                Joined date
                              </th>
                            </tr>
                          </thead>
                          <tbody className="">
                            {cusdata.map((d) => {
                              return (
                                <tr
                                  key={d.id}
                                  className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                >
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {d.id}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {d.name}
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {d.jdate}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel1>
            </Box>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
