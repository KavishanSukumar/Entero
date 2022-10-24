import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import axios from "axios";
import PropTypes from "prop-types";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const API_URL = "http://localhost:4000/api/serviceprovider/appointment";
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

function Appointment(props) {
  const [value, setValue] = React.useState(0);
  const [appointment, setAppointment] = React.useState([]);
  const [rawappointment, setRawAppointment] = React.useState([]);
  const [id, setId] = React.useState(props.data);
  const [calendar, setCalendar] = React.useState(false);
  const [calenderDate, setCalenderDate] = React.useState();
  const [appointmentDates, setAppointmentDates] = React.useState([]);

  async function getAppointment() {
    const res = await axios.post(API_URL, {
      id: id,
    });
    setAppointment(res.data);
    setRawAppointment(res.data);
  }

  async function changestatus(appointment_id, status) {
    var confirmstatus = window.confirm(
      "Are you sure you want to change the status?"
    );
    if (confirmstatus) {
      try {
        const res = await axios.put(API_URL, {
          appointment_id,
          status,
        });
        window.location.href = "/serviceappointments";
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }

  React.useEffect(() => {
    getAppointment();
    getAppointmentDates();
  }, []);

  const getAppointmentDates = () => {
    rawappointment.map((item) => {
      let year = item.date.slice(6, 10);
      let month = item.date.slice(3, 5);
      let date = item.date.slice(0, 2);
      let newDate = date + "-" + month + "-" + year;
      setAppointmentDates((appointmentDates) => [...appointmentDates, newDate]);
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const openCalender = () => {
    setCalendar(!calendar);
  };
  const getCalenderDate = (e) => {
    setAppointment([]);
    var date = e.getDate();
    var month = e.getMonth() + 1;
    var year = e.getFullYear();
    var fulldate = year + "-" + month + "-" + date;
    rawappointment.map((item) => {
      if (item.date.slice(6, 10) == year) {
        if (item.date.slice(3, 5) == month) {
          if (item.date.slice(0, 2) == date) {
            setAppointment((appointment) => [...appointment, item]);
          }
        }
      }
    });
  };
  return (
    <div className="flex flex-col w-auto  justify-around mx-6 my-3">
      <div className="flex justify-start mb-7">
        <h2 className="text-2xl font-bold leading-7 font-serif text-gray-900 sm:text-3xl">
          Appointment
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
              <Tab label="New Appointments" {...a11yProps(0)}></Tab>
              <Tab label="Pending Appointments" {...a11yProps(1)}></Tab>
              <Tab label="Past Appointments" {...a11yProps(2)}></Tab>
              <Tab label="Cancelled Appointments" {...a11yProps(3)}></Tab>
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
                    />
                  </label>
                </div>
                <div className="relative basis-6/12 flex flex-row justify-end">
                  <div className="flex  mx-3 my-3 justify-start lg:justify-end">
                    <button
                      onClick={openCalender}
                      className="py-2 px-4 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                      <DateRangeIcon /> Date
                    </button>
                  </div>
                  {calendar && (
                    <div className="absolute w-80  z-50 rounded-xl p-2 top-20">
                      <Calendar
                        onChange={(e) => getCalenderDate(e)}
                        tileClassName={({ date, view }) => {
                          // var day = date.getDate().toString();
                          // var month = (
                          //   new Date(date).getMonth() + 1.0
                          // ).toString();
                          // var year = new Date(date).getFullYear().toString();
                          // if (date.getMonth() < 10) {
                          //   var month = "0" + month;
                          // }
                          // if (date.getDate() < 10) {
                          //   var date = "0" + date;
                          // }
                          // const realDate = day + "-" + month + "-" + year;
                          // appointmentDates.map((item) => {
                          //   if (item.slice(6, 10) === year) {
                          //     if (item.slice(3, 5) === month) {
                          //       if (item.slice(0, 2) === day) {
                          //       }
                          //     }
                          //   }
                          // });
                          // return "bg-green-500 weight-700";
                          // if (
                          //   appointmentDates.find(
                          //     (x) => x === moment(date).format("DD-MM-YYYY")
                          //   )
                          // ) {
                          //   return "bg-green-500 weight-700";
                          // }
                        }}
                      />
                    </div>
                  )}
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
                        Customer Name
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
                        Description
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
                    {appointment.map(
                      (item) =>
                        item.status === 0 && (
                          <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.name}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.time}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.date}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                              {item.description}
                            </td>

                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() =>
                                  changestatus(item.appointment_id, 1)
                                }
                                className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                              >
                                Accept
                              </button>
                              <button
                                onClick={() =>
                                  changestatus(item.appointment_id, 2)
                                }
                                className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                              >
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
                <div className="relative basis-6/12 flex flex-row justify-end">
                  <div className="flex mx-3 my-3 justify-start lg:justify-end">
                    <button
                      onClick={openCalender}
                      className="py-2 px-4 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                      <DateRangeIcon /> Date
                    </button>
                  </div>
                  {calendar && (
                    <div className="absolute w-80  z-50 rounded-xl p-2 top-20">
                      <Calendar onChange={(e) => getCalenderDate(e)} />
                    </div>
                  )}
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
                        Customer Name
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
                        Description
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
                    {appointment.map(
                      (item) =>
                        item.status === 1 && (
                          <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.name}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.time}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.date}
                            </td>

                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                              {item.description}
                            </td>

                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() =>
                                  changestatus(item.appointment_id, 4)
                                }
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
                <div className="relative basis-6/12 flex flex-row justify-end">
                  <div className="flex basis-3/12 mx-3 my-3 justify-start lg:justify-end">
                    <button
                      onClick={openCalender}
                      className="py-2 px-4 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                      <DateRangeIcon /> Date
                    </button>
                    {calendar && (
                      <div className="absolute w-80  z-50 rounded-xl p-2 top-20">
                        <Calendar onChange={(e) => getCalenderDate(e)} />
                      </div>
                    )}
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
                        Customer Name
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
                        Description
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
                    {appointment.map(
                      (item) =>
                        item.status === 3 && (
                          <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.name}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.time}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.date}
                            </td>

                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                              {item.description}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.status === 3 && "Confirmed"}
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
                <div className="relative basis-6/12 flex flex-row justify-end">
                  <div className="flex basis-3/12 mx-3 my-3 justify-start lg:justify-end">
                    <button
                      onClick={openCalender}
                      className="py-2 px-4 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                      <DateRangeIcon /> Date
                    </button>
                    {calendar && (
                      <div className="absolute w-80  z-50 rounded-xl p-2 top-20">
                        <Calendar onChange={(e) => getCalenderDate(e)} />
                      </div>
                    )}
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
                        Customer Name
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
                        Description
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
                    {appointment.map(
                      (item) =>
                        (item.status == 2 || item.status == 4) && (
                          <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.name}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.time}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.date}
                            </td>

                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                              {item.description}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.status === 2 && "Rejected"}
                              {item.status === 3 && "Confirmed"}
                              {item.status === 4 && "Cancelled"}
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
      </div>
    </div>
  );
}

export default Appointment;
