import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';
import { stringify } from 'postcss';
import 'tw-elements';
import event_data from './eventdata.json'
import cus from './cus.json'
import ser from './ser.json'
import CustomerRate from './cus_rate'
import MockData from './monthlypay.json'
import SearchIcon from "@mui/icons-material/Search";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { AiOutlineClose } from 'react-icons/ai'
import Shakir from '../../Shakir.jpg';
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from 'axios';
const API_URL = "http://localhost:4000/api/allcus"
const API_URL2 = "http://localhost:4000/api/allsp"
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Users() {



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
    setPopup(!popup)
  }

  //get all customers
  const [customers, setCustomers] = useState([])
  const [customerDetail, setCustomerDetail] = useState()

  async function fetchCustomers() {
    try {
      const res = await axios.get(API_URL);
      setCustomers(res.data);
    } catch (error) {
      console.error(error.message);
    }
  }


  useEffect(() => {
    fetchCustomers();
  }, []);



  //get all service providers
  const [service_providers, setservice_providers] = useState([])
  const [service_providersDetail, setservice_providersDetail] = useState()

  async function fetchSetservice_providers() {
    try {
      const res = await axios.get(API_URL2);
      setservice_providers(res.data);
    } catch (error) {
      console.error(error.message);
    }
  }


  useEffect(() => {
    fetchSetservice_providers();
  }, []);



  // // show more in income

  // const [showMore, setShowMore] = useState(false);
  // const handlelessmore = () => {
  //     setShowMore(!showMore)
  // }
  // // show more in events
  // const [showMore1, setShowMore1] = useState(false);
  // const handlelessmore1 = () => {
  //     setShowMore1(!showMore1)
  // }
  // show more in users
  const [showMore2, setShowMore2] = useState(false);
  const handlelessmore2 = () => {
    setShowMore2(!showMore2)
  }
  //convert sql date to normal date
  function convertdate(date) {
    let d = date.split("T");
    return (
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d[0]}</td>
    )
  }
  // catergory selection
  function catselect(refreshment, decoration, hallservices, photography, userid) {
    let cat = [];
    if (refreshment == true) {
      cat.push("refreshment")
    }
    if (decoration == true) {
      cat.push("decoration")
    }
    if (hallservices == true) {
      cat.push("hallservices")
    }
    if (photography == true) {
      cat.push("photography")
    }
    // console.log('---- categories ' + userid + '-------');
    // console.log(cat);

    return (
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{cat.map(function (object, i) {
        return <p key={i} >{object}</p>;
      })}</td>
    )
  }




  //filter by year and month ---> for service provider & customer
  const [year, setyear] = useState("year");
  const [month, setmonth] = useState("month");

  function filteryear(event) {
    console.log('====== this is the year ===========');
    console.log(event.target.value, "|", month);

    if (event.target.value == "year" && month != "month") {
      window.alert('Plese select an year without selecting "Year"')
      event.target.value = year;
    }
    setyear(event.target.value);
    console.log('this is year --->', year);


  }
  function filtermonth(event) {
    console.log('====== this is the month ===========');
    console.log(event.target.value);
    console.log('year -->', year);
    if (year == "year" && event.target.value != "month") {
      window.alert('Plese select an year without selecting "Year"')
      event.target.value = "month"
    }
    setmonth(event.target.value);
    console.log('this is month --->', month);


  }
  //service provider filtering
  let filtersp = service_providers.filter((sp) => {

    if (year == "year" && month == "month") {
      return sp;
    } else if (year == "year" && month != "month") {

    } else if (year != "year" && month != "month") {
      console.log('filter data in each row ', year, '|', sp.date.split("-")[0], "|", sp.date.split("-")[1]);
      if (sp.date.split("-")[0] == year && sp.date.split("-")[1] == month) {
        return sp;
      }
    } else {
      console.log('filter data in each row ', year, '|', sp.date.split("-")[0]);
      if (sp.date.split("-")[0] == year) {
        return sp;

      }
    }
  })

  //customer filtering
  let filtercus = customers.filter((cus) => { // ----------------------------------- > check this check this ------------------------

    if (year == "year" && month == "month") {
      return cus;
    } 
    // else if (year == "year" && month != "month") {

    // } else if (year != "year" && month != "month") {
    //   console.log('filter data in each row ', year, '|', cus.date.split("-")[0], "|", cus.date.split("-")[1]);
    //   if (cus.date.split("-")[0] == year && cus.date.split("-")[1] == month) {
    //     return cus;
    //   }
    // } else {
    //   console.log('filter data in each row ', year, '|', cus.date.split("-")[0]);
    //   if (cus.date.split("-")[0] == year) {
    //     return cus;

    //   }
    // }
  })

  let countcus = filtercus.length;
  let countsp = filtersp.length;

  
  console.log('filtersp lenght----->', countsp);

  //filter by search (sp)
  const [spsearchvalue, setspsearchvalue] = useState("")
  console.log('this is sp search value 1 ----->', spsearchvalue);
  function spsearchval(event) {
    setspsearchvalue(event.target.value);
    console.log('this is sp search value 2 ----->', spsearchvalue);
  }

  let setsearchedsp = filtersp.filter((sp) => {
    var regex = new RegExp(spsearchvalue);
    var cat = "";

    if(sp.decoration){
      cat = cat + " decoration";
    }
    if(sp.refreshment){
      cat = cat + " refreshment"
    }
    if(sp.hallservices){
      cat = cat + " hallservices"
    }
    if(sp.photography){
      cat = cat + " photography"
    }
    console.log('sp catergory -->',cat);
    if (spsearchvalue == "") {
      return sp;
    } else if (regex.test(sp.name) || regex.test(sp.userid) || regex.test(sp.date.split("T")) || regex.test(cat) ) {
      return sp;
    }


  })



  //filter by search (cus)
  const [cussearchvalue, setcussearchvalue] = useState("")
  console.log('this is cus search value 1 ----->', cussearchvalue);
  function cussearchval(event) {
    setcussearchvalue(event.target.value);
    console.log('this is cus search value 2 ----->', cussearchvalue);
  }

  let setsearchedcus = filtercus.filter((cus) => {
    var regex = new RegExp(cussearchvalue);

    if (cussearchvalue == "") {
      console.log(cus);
      return cus;
    
    } else if (regex.test(cus.name) || regex.test(cus.userid) ||regex.test("Active")) {
      console.log(cus);
      
      return cus;
    }


  })


  //set topic

  function settopic(y, m) {

    if (y != "year" && m == "month") {
      return (
        <p className=' p-4 rounded-2xl '>Registered  Users in {y}  : {countsp} </p>

      )
    } else if (y != "year" && m != "month") {


      const map = new Map([["01", "January"], ["02", "February"], ["03", "March"], ["04", "April"], ["05", "May"], ["06", "June"],
      ["07", "July"], ["08", "August"], ["09", "September"], ["10", "October"], ["11", "November"], ["12", "December"]]);
      return (
        <p className=' p-4 rounded-2xl '> Registered Users in {y} - {map.get(m)} : {countsp+countcus}  </p>

      )
    } else {
      return (
        <p className=' p-4 rounded-2xl '>All Registered Users : {countsp + countcus}  (2022 - up to now)</p>
      )

    }

  }
  //donut chart

  const options = { labels: ["Service Providers", "Customers"], colors: ['#EF4444', '#0284C7'] };
  const series = [countsp, countcus];


  //set search cus or sp amount
  let searchcuslen = setsearchedcus.length
  let searchsplen = setsearchedsp.length



  return (
    <>

      <div className=" flex flex-col gap-3  " >
        {console.log(setsearchedsp)}
        <div className='flex order-1 gap-3 mb-3 justify-center'>
          <div className='order-1 flex mt-2'>
            <p className='text-lg font-bold'> Filter by </p>
          </div>
          <div className="relative w-40 order-2 ">
            <select id="years" className="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500
                                                 dark:focus:border-cyan-500 border-2"
              onChange={filteryear}>
              <option value="year" selected>Year</option>
              <option value="2022">2022</option>
              

            </select>
          </div>
          <div className="flex  order-3">
            <div className="relative w-36">
              <select id="months" className="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                             dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500
                                              dark:focus:border-cyan-500 border-2"
                onChange={filtermonth}>
                <option value="month" selected> Month</option>
                <option value="01">January     </option>
                <option value="02">February      </option>
                <option value="03">March        </option>
                <option value="04">April       </option>
                <option value="05">May           </option>
                <option value="06">June        </option>
                <option value="07">July        </option>
                <option value="08">August       </option>
                <option value="09">September      </option>
                <option value="10">October      </option>
                <option value="11">November     </option>
                <option value="12">December     </option>

              </select>
            </div>
          </div>
        </div>
        <div className='flex flex-col order-2 justify-center '>
          <div className="flex justify-center rounded-lg  mb-4 text-2xl text-black shadow-lg shadow-black  bg-gray-300  order-1 font-bold bold  w-full " >
            {settopic(year, month)}
          </div>
          {/* pie chart */}
          <div className="flex order-2 justify-center pl-[170px]  mt-4">
            <Chart options={options} series={series} type="donut" width="500" height="900" />
          </div>

        </div>

        <div className='flex order-3 justify-center'>
          <div className="flex  space-x-2 justify-center">
            <button
              onClick={handlelessmore2}
              type="button"
              className="inline-block p-3 bg-blue-600 text-white font-medium text-sm leading-tight  hover:bg-cyan-500 rounded-lg shadow-md"
            >{showMore2 ? "Less details" : "More details"}</button>
          </div>
        </div>


        <Box sx={{ width: "100%" }} className={showMore2 ? "order-4" : "hidden"}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="SERVICE PROVIDERS" {...a11yProps(0)} />
              <Tab label="CUSTOMERS" {...a11yProps(1)} />

            </Tabs>
          </Box>
          {/* =======================================================================================================================================
                                               -----------------  Service providers ------------------
 ======================================================================================================================================= */}
          <TabPanel value={value} index={0}>
            <div className=" active flex flex-col">
              {/* {console.log(service_providers)} */}
              <div className='flex order-1 flex-col w-full ml-[-31px] '>
                {/* <div className="flex p-1 md:px-4 py-2 ">
                      <div className="relative w-36">
                        <select id="years"  className="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
                          <option selected>Year</option>
                          <option value="2022">2022</option>
                          <option value="2021">2021</option>
                          <option value="2020">2020</option>
                          <option value="2019">2019</option>
                          <option value="2018">2018</option>
                          <option value="2017">2017</option>

                        </select>
                      </div>
                    </div> */}

                {/* <div className="flex p-1 md:px-4 py-2 ">
                      <div className="relative w-36">
                        <select id="months"  className="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                            dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
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
                    </div> */}
                <div className='mt-2 mb-2 flex w-auto ml-20 justify-center'>
                  <p className='font-bold  text-xl '>Total users according to search  : {searchsplen}</p>
                </div>
                <div className="flex p-1 md:px-4 py-2 ml-14 ">
                  <div className="relative w-full">

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
                        onChange={spsearchval}
                      />
                    </label>
                  </div>
                </div>




              </div>



              <div className='flex order-2  ml-[-30px]'>


                <div className='flex order-3 mt-10 w-full'>

                  <div className="overflow-auto justify-center w-full h-screen">
                    <table className="min-w-full z-0  mr-10">
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
                            Catergory
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Joined date
                          </th>



                        </tr>


                      </thead>
                      <tbody className="">




                        {setsearchedsp.map((d) => {

                          return (

                            <tr key={d.userid} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.userid}</td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.name}</td>

                              {catselect(d.refreshment, d.decoration, d.hallservices, d.photography, d.userid)}
                              {convertdate(d.date)}



                            </tr>

                          )


                        }
                        )
                        }

                      </tbody>


                    </table>

                  </div>

                </div>

              </div>
            </div>


          </TabPanel>
          {/* =======================================================================================================================================
                                               -----------------  customers ------------------
 ======================================================================================================================================= */}

          <TabPanel value={value} index={1}>
            {/* {console.log(customers)} */}
            <div className=" rounded " >
              <div className='flex order-1 flex-row w-full ml-[-31px] justify-center'>
                {/* <div className="flex p-1 md:px-4 py-2 ">
                    <div className="relative w-36">
                      <select id="years" className="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
                        <option selected>Year</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>

                      </select>
                    </div>
                  </div> */}
                {/* <div className="flex p-1 md:px-4 py-2 ">
                    <div className="relative w-36">
                      <select id="months" className="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                            dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
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
                  </div> */}
                <div className='mt-2  flex w-full justify-center'>
                  <p className='font-bold  text-xl '>Total users according to search  : {searchcuslen}</p>
                </div>
              </div>
              <div className="flex p-1 md:px-4 py-2 justify-center">
                <div className="relative w-full">

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
                      onChange={cussearchval}
                    />
                  </label>
                </div>
              </div>





              <div className='flex order-2 ml-[-30px]'>


                <div className='flex order-3 mt-10 w-full'>
                  <div className="overflow-auto justify-center w-full h-screen">
                    <table className="min-w-full z-0  mr-10">
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
                            Joined date
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Status
                          </th>



                        </tr>


                      </thead>
                      <tbody className="">




                        {setsearchedcus.map((d) => {

                          return (

                            <tr key={d.userid} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.userid}</td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.name}</td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.date}</td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.status=="a" ? "Active":  "Inactive"}</td>



                            </tr>

                          )


                        }
                        )
                        }

                      </tbody>


                    </table>

                  </div>
                </div>

              </div>
            </div>


          </TabPanel>




        </Box>




      </div>



    </>


  )
}
