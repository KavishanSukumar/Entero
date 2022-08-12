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

function BookingsCustomer() {
    const [past,setPast]=useState(false);
    const [present,setPresent]=useState(true);

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    
    const handlePast=()=>{
        if(!past){
            setPast(!past)
        }
        if(present){
            setPresent(!present)
        }
    }
    const handlePresent=()=>{
        if(!present){
            setPresent(!present)
        }
        if(past){
            setPast(!past)
        }
    }
    const presentData=(

        <div className="overflow-auto justify-center w-full h-screen">
        <table class="min-w-full z-0">
          <thead class="bg-white border-b sticky top-0">
            <tr>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                No
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
              >Status</th>
            </tr>
          </thead>
          <tbody className="">
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                B002
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Hall Services
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                13.06.2022
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                SK Hall Service
              </td>

              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button
                  className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  Confirm
                </button>
                <button
                  className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        
        
    )

    const pastData=(

        <div className="overflow-auto justify-center w-full h-screen">
        <table class="min-w-full z-0">
          <thead class="bg-white border-b sticky top-0">
            <tr>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                NO
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
              >Status</th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >Rating</th>
            </tr>
          </thead>
          <tbody className="">
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                B001
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Photography
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                12.03.2020
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Kalindu Studio
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Past
              </td>

              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <button
                  className="m-1 py-2 px-4 w-auto bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  Rating
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        
    )
  return (
    <div className=" relative p-5 w-full mt-14 md:mt-0 mb-2 h-full">
        
        <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="PRESENT" {...a11yProps(0)} />
            <Tab label="PAST" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        
          {presentData}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {pastData}
        </TabPanel>
      </Box>
        

        
    </div>
  )
}

export default BookingsCustomer