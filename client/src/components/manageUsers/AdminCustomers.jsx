import {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Shakir from '../../Shakir.jpg';
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

function AdminCustomers() {
    const [popup,setPopup]=useState(false);
    const [value, setValue] = React.useState(0);

    const handlePopup=()=>{
        setPopup(!popup)
    }

    return (
    <div className=" relative p-5 w-full mt-14 md:mt-0 mb-2 h-full">
        
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
              placeholder="Search for customers"
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>
        

        

        <div className={popup? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0":"hidden"} >
            <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[70%] mx-[15%] p-2">
                <div className="w-full inline-flex justify-end items-end">
                    <AiOutlineClose className="w-4 h-4 cursor-pointer" onClick={handlePopup}/>
                </div>
                <div className="w-full flex flex-col lg:flex-row">
                    <div className="flex flex-col  items-center shadow-2xl mb-2 ">
                        {/*The image */}
                        <div className="p-2">
                            <img src={Shakir} alt="" className="w-28 h-28 rounded-full shadow-2xl "/>
                        </div>

                        {/*The buttons */}
                        <div className="flex flex-col w-44 p-4">
                            <button className=" border-2 bg-cyan-500 hover:bg-cyan-400  p-1 mb-3 rounded text-white">
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className=" w-full">
                        <p className="text-center text-base font-medium mb-2 border-b-2">Details</p>
                        <p className="md:ml-8 px-1 text-left "><b>Name:</b> Kavin Fernando</p>
                        <p className="md:ml-8 px-1 text-left"><b>NIC:</b> 723456789V</p>
                        <p className="md:ml-8 px-1 text-left"><b>Address:</b> Shangrila Hotel Colombo 02</p>
                        <p className="md:ml-8 px-1 text-left"><b>Email:</b> kavingghyre@gmail.com</p>
                        <p className="md:ml-8 px-1 text-left"><b>Contact:</b> 0778965432</p>
                    </div>
                
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
                ID
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
                Status
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                0023
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Kavin Fernando
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
            </tr>
          </tbody>
        </table>
      </div>




























        
        

        
    </div>
  )
}

export default AdminCustomers