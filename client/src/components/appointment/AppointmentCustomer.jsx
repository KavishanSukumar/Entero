import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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

function AppointmentCustomer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col w-auto  justify-around mx-6 my-3">
      <div className="flex justify-start mb-7">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
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
              <Tab label="Pending Appointments" {...a11yProps(1)}></Tab>
              <Tab label="Past Appointments" {...a11yProps(2)}></Tab>
              <Tab label="Canceled Appointments" {...a11yProps(3)}></Tab>
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
              </div>
              <div className="overflow-auto justify-center w-full h-screen">
                <table class="min-w-full z-0">
                  <thead class="bg-white border-b sticky top-0">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Appointment id
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
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        A001
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        The Fab
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        15:00:56
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        25:05:2022
                      </td>

                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                        Discuss about catering service
                      </td>
                    </tr>
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
              </div>
              <div className="overflow-auto justify-center w-full h-screen">
                <table class="min-w-full z-0">
                  <thead class="bg-white border-b sticky top-0">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Appointment id
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
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        A002
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Sarah Photography
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        14:00:56
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        20:03:2022
                      </td>

                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                        Get more information regarding the service
                      </td>
                    </tr>
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
              </div>
              <div className="overflow-auto justify-center w-full h-screen">
                <table class="min-w-full z-0">
                  <thead class="bg-white border-b sticky top-0">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Appointment id
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
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        A003
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Kushan Catering
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        14:00:56
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        20:03:2022
                      </td>

                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                        Need to negotiate the amount
                      </td>
                    </tr>
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

export default AppointmentCustomer;
