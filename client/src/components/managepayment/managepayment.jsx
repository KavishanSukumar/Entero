
import React, { useState, useEffect } from "react";
import DiamondIcon from '@mui/icons-material/Diamond';
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SellIcon from "@mui/icons-material/Sell";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlineClose } from 'react-icons/ai';
import axios from "axios";
import ShieldIcon from '@mui/icons-material/Shield';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const API_URL = "http://localhost:4000/api/admin/packages";
const booking_URL = "http://localhost:4000/api/reportbooking"; 
const subscription_URL = "http://localhost:4000/api/subscriptionincome"; 





//main tab pannel (packages,service charges)
function TabPanel1(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel1"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab1-${index}`}
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
    id: `simple-tab1-${index}`,
    "aria-controls": `simple-tabpanel1-${index}`,
  };
}
// tabs for service  charges
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

function a11yProps2(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

//tabs for booking fee :- customer and service provider


function TabPanel2(props) {
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

TabPanel2.propTypes = {
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


  //get all bookings
  const [bookings, setbookings] = useState([])


  async function fetchbookings() {
    try {
      const res = await axios.get(booking_URL);
      setbookings(res.data);
    } catch (error) {
      console.error(error.message);
    }
  }


  useEffect(() => {
    fetchbookings();
  }, []);



  // for payment tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //for main tab
  const [value1, setValue1] = React.useState(0);
  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };
  //for booking fee tab
  const [value2, setValue2] = React.useState(0);
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };



  // to update packages
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");


  // handle popups
  const [showpopup, setshowpopup] = React.useState(false);
  const handleOnClose = () => setshowpopup(false);
  const [popup, setPopup] = React.useState(false);



  const handlePopup = () => {
    setPopup(!popup);

  }


  // package icons

  function setIDIcon(id) {
    if (id == 1) {
      return (
        <SellIcon className="text-green-500 !h-10 !w-10" />
      )
    } else if (id == 6) {
      return (
        <WorkspacePremiumIcon className="text-yellow-500 !h-10 !w-10" />
      )

    } else if (id == 3) {
      return (
        <ShieldIcon className="text-gray-300 !h-10 !w-10" />
      )
    } else if (id == 4) {
      return (
        <Brightness7Icon className="text-yellow-500 !h-10 !w-10" />
      )

    } else if (id == 7) {
      return (
        <DiamondIcon className="text-blue-500 !h-10 !w-10" />
      )

    }

  }


  const [adminpacks, setpackage] = useState([]);

  async function getpack() {

    try {
      const res = await axios.get(API_URL)
      setpackage(res.data);


    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getpack();
  }, []);

  const onsubmitform = async (e) => {
    e.preventDefault();
    const x = API_URL + "/" + e.target.id.value;
    try {
      const res = await axios.put(x, { name, price, des })
      console.log(res);
      alert('updated');
      window.location = '/adminpayment';

    } catch (error) {
      console.log('this is error ----->' + error.message);
    }
    window.location = '/adminpayment';
  }

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const [thepackageid, setthepackageid] = useState(0);

  function selectpack(id) {
    let item = [];
    for (var x = 0; x < adminpacks.length; x++) {
      if (adminpacks[x].sub_packageid == id) {
        item = adminpacks[x];
      }
    }


    setName(item.name);
    setDes(item.des);
    setPrice(item.price);


  }
  //filter by search (booking fee)
  const [booksearchvalue, setbooksearchvalue] = useState("")
  
  function booksearchval(event) {
    setbooksearchvalue(event.target.value);
  
  }

  let filterbookings = bookings.filter((bk) => {
    var regex = new RegExp(booksearchvalue);
    var cat = "";

 
    if (booksearchvalue == "") {
      return bk;
    } else if (regex.test(bk.booking_id) || regex.test(bk.cname) || regex.test(bk.date.split("T")) || regex.test(bk.sname) || regex.test(bk.cname)|| 
    regex.test(bk.madedate.split("T")) || regex.test(bk.type) ||  regex.test(bk.amount)) {
      return bk;
    }


  })
  



  return (
    <div className="m-10  flex flex-col">
      {console.log('i am in popup' + thepackageid)}
      {console.log(adminpacks)}
      {/* popup for update packages */}
      <div className={popup ? "fixed overflow-y-auto flex flex-col backdrop-blur-[1px] bg-black/95 top-0 w-full h-full z-50  left-0 mb-5 " : "hidden"}>
        <div className="  rounded-3xl shadow-2xl top-[0%] flex flex-col mt-3 w-full h-full p-2 ">
          <div className="flex flex-row order-1">
            <div className="flex ">

            </div>
            <div className="w-full inline-flex justify-end items-end ">
              <AiOutlineClose
                className="w-6 h-6 cursor-pointer bg-white rounded-2xl text-black hover:text-red-500  hover:bg-white   mt-8 mr-10"
                onClick={handlePopup}
              />
            </div>
          </div>
          <div className="flex order-2 flex-row  gap-10 justify-center mt-10 ">

            {console.log('this is package id in popup ------' + thepackageid)}




            <div className="flex flex-col gap-1">
              {console.log('this is package id in popup test2 ------' + thepackageid)}
              <div className="flex py-3 justify-center bg-white   rounded-lg">
                <p className="font-bold text-lg "> Edit Package </p>
              </div>
              <form action="" onSubmit={onsubmitform}>
                <div className="flex flex-col bg-slate-500 p-5 rounded-lg ">
                  <div class="mb-6">
                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Package Name</label>
                    <input name="name" onChange={(e) => setName(e.target.value)} value={name} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div class="mb-6">
                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Package Price</label>
                    <input name="price" onChange={(e) => setPrice(e.target.value)} placeholder='LKR XXXX' value={price} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div class="mb-6">
                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                    <textarea name="des" onChange={(e) => setDes(e.target.value)} value={des} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <input type="hidden" name="id" value={thepackageid} />
                  <div className="flex order-3 mt-10 justify-center rounded-lg  ">
                    <div className="rounded-md shadow ">
                      <button
                        type="onSubmit"
                        onClick={handlePopup}
                        className="py-2 px-4  bg-cyan-500 hover:bg-blue-400 focus:ring-cyan-900 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>

                </div>
              </form>

            </div>



          </div>




        </div>
      </div>


      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value1}
            onChange={handleChange1}
            aria-label="basic tabs example"
          >
            <Tab label="Packages" {...a11yProps(0)} />
            <Tab label="Service Charges" {...a11yProps(1)} />
            <Tab label="Booking Fee" {...a11yProps(2)} />

          </Tabs>
        </Box>

        <TabPanel1 value={value1} index={0}>
          <div className="flex flex-col relative gap-4 ">
            <div className="flex  order-1 justify-center text-3xl font-bold    p-2 rounded-md mb-4">
              <p className="flex  hover:cursor-default px-20 rounded-lg py-4 border-y-2 shadow-sm lg:text-3xl md:text-3xl sm:text-2xl text-lg" title="click a package">
                Edit Packages
              </p>
            </div>



            <div className="grid xl:grid-cols-1 gap-y-8 lg:grid-cols-1   md:grid-cols-1  sm:grid-cols-1 grid-cols-1    order-1 lg:justify-between lg:mt-8">

              {adminpacks && adminpacks.map((a) => (

                <div key={a.sub_packageid} title="Click here to edit the package" onClick={() => { handlePopup(); setthepackageid(a.sub_packageid); selectpack(a.sub_packageid) }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className=" relative max-w-screen-xl my-3 px-4 sm:px-6 lg:px-8 hover:cursor-pointer order-2 ">
                  <div className="h-auto lg:h-52  lg:w-[700px]  pricing-box    mx-auto rounded-lg shadow-lg overflow-hidden  lg:flex">
                    <div className="bg-white w-full dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-6">
                      <h3 className="text-2xl flex justify-center gap-1  uppercase leading-8 font-extrabold text-gray-900 sm:text-xl sm:leading-9 dark:text-white">
                        <span>
                          {setIDIcon(a.sub_packageid)}
                        </span>
                        <span>
                          {a.name}
                        </span>
                      </h3>
                      <p className="mt-4 text-base flex justify-center leading-6 text-gray-500  dark:text-gray-200 mb-">
                        {a.des}
                      </p>
                    </div>
                    <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 pt-16">
                      <div className=" flex  items-center justify-center text-3xl leading-none font-extrabold text-gray-900 dark:text-white  ">

                        {a.price}


                      </div>

                    </div>
                  </div>
                  <input type="hidden" value={a.sub_packageid} />
                </div>

              ))}
              {/* {isHovering && <h2 className="relative">Hello world</h2> } */}

            </div>

          </div>

        </TabPanel1>

        <TabPanel1 value={value1} index={1}>

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
                  {/* <Tab label="Trails" {...a11yProps(2)} /> */}

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
                  <table className="min-w-full z-0">
                    <thead classNmae="bg-white border-b sticky top-0">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Payment_ID
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Time
                        </th>
                       
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Date
                        </th>

                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Package Name
                        </th>

                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Payment Method
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          2
                        </td>
                       
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Kavishan Foods
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        12:00:56
                        </td>
                       
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          25/10/2022
                        </td>

                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                        Standard
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          LKR 15000
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          Visa
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Senal’s catering 
                        </td>
                       
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10:00:00
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          25/10/2022
                        </td>

                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          Premium
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          LKR 7000
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          Visa
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
                          Name
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
                       
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          3
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Visthira Hotels
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          28/10/2022
                        </td>


                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          Premium
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          LKR 15000
                        </td>
                        
                      </tr>
                      
                      
                     
                      
                    </tbody>
                  </table>
                </div>

              </TabPanel>
              {/* <TabPanel value={value} index={2}>
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
                          Started date
                        </th>

                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Ending Date
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
                          SP001
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          Kamal
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          02/04/2022
                        </td>


                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          02/05/2022
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          On going
                        </td>
                      </tr>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          SP002
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          Nimal
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          23/05/2022
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          23/06/2022
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          On going
                        </td>
                      </tr>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          SP003
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          Bimal
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          29/06/2022
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          29/07/2022
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          Ended
                        </td>
                      </tr>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          SP004
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          Amal
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          02/07/2022
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          02/08/2022
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          On going
                        </td>
                      </tr>
                      <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          SP005
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          Sunil
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          03/08/2022
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          03/09/2022
                        </td>

                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          Ended
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </TabPanel> */}


            </Box>



          </div>

        </TabPanel1>
        <TabPanel1 value={value1} index={2}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value2}
                onChange={handleChange2}
                aria-label="basic tabs example"
              >
                <Tab label="Customer" {...a11yProps(0)} />
                {/* <Tab label="Service Provider" {...a11yProps(1)} /> */}


              </Tabs>
            </Box>

            <TabPanel2 value={value2} index={0}>
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
                      onChange={booksearchval}
                    />
                  </label>
                </div>
              </div>
              <div className="overflow-auto justify-center w-full h-auto mt-5">
                {console.log(bookings)}
                <table className="min-w-full z-0">
                  <thead className="bg-white border-b sticky top-0">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Booking Id
                      </th>


                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Customer
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Service Provider
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                      Event 
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                       Booked Date
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                       Starting date
                      </th>


                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {filterbookings.map((d) => {

                      return (

                        <tr key={d.booking_id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">{d.booking_id}</td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">{d.cname}</td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">{d.sname}</td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">{d.type}</td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">{d.madedate.split("T")[0]}</td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">{d.date.split("T")[0]}</td>
                     
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">LKR {d.amount}</td>




                        </tr>

                      )


                    }
                    )
                    }

                  </tbody>
                </table>
              </div>


            </TabPanel2>
            {/* <TabPanel2 value={value2} index={1}>
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
                  <table className="min-w-full z-0">
                    <thead className="bg-white border-b sticky top-0">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          User Id
                        </th>


                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Period
                        </th>
                       

                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Total Amount to paid 
                        </th>


                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                        Paid Amount
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                        Balance
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                       Due Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        SP001
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          Kamal
                        </td>
                       
                       

                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          05/2022
                        </td>

                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          200
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          100
                        </td>
                        
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          100
                        </td>
                        <td className=" text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          05/05 /2022
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        SP002
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          Nimal
                        </td>
                       
                      

                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          06/2022
                        </td>

                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          300
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          100
                        </td>
                        
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          200
                        </td>
                        <td className=" text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          05/06/2022
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          SP003
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                          Bimal
                        </td>

                      

                        <td className=" text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          07/2022
                        </td>

                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          100
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          100
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          0
                        </td>
                        <td className=" text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                          05/07/2022
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
            </TabPanel2> */}




          </Box>



        </TabPanel1>

      </Box>




    </div>
  );
}

export default ManagePayments;

