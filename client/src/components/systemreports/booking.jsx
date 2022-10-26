
import React, { useState, useEffect } from "react";
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
import axios from "axios";
const booking_URL = "http://localhost:4000/api/reportbooking";



export default function Booking() {
    //donut chart

    const options = { labels: ["Service Providers", "Customers"], colors: ['#EF4444', '#0284C7'] };
    const series = [100, 400];
//get all bookings
const [eventdata, setbookings] = useState([])


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

    


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [value1, setValue1] = React.useState(0);

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };

   
    // const [eventdata, setdata2] = useState(event_data);
   
    const [popup, setPopup] = useState(false);


    const handlePopup = () => {
        setPopup(!popup)
    }

    // show more in income

    const [showMore, setShowMore] = useState(false);
    const handlelessmore = () => {
        setShowMore(!showMore)
    }
    // show more in events
    const [showMore1, setShowMore1] = useState(false);
    const handlelessmore1 = () => {
        setShowMore1(!showMore1)
    }
    // show more in users
    const [showMore2, setShowMore2] = useState(false);
    const handlelessmore2 = () => {
        setShowMore2(!showMore2)
    }

    //filter by year and month ---> bookings
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
        //console.log(event.target.value);
        console.log('year -->', year);
        if (year == "year" && event.target.value != "month") {
            window.alert('Plese select an year without selecting "Year"')
            event.target.value = "month"
        }
        setmonth(event.target.value);
       // console.log('this is month --->', month);


    }
//booking filttering according to  year and month
let filterbookings = eventdata.filter((bk) => {

    if (year == "year" && month == "month") {
      return bk;
    } else if (year == "year" && month != "month") {

    } else if (year != "year" && month != "month") {
      console.log('filter data in each row ', year, '|', bk.madedate.split("-")[0], "|", bk.madedate.split("-")[1]);
      if (bk.madedate.split("-")[0] == year && bk.madedate.split("-")[1] == month) {
        return bk;
      }
    } else {
      console.log('filter data in each row ', year, '|', bk.madedate.split("-")[0]);
      if (bk.madedate.split("-")[0] == year) {
        return bk;

      }
    }
  })
let bday = 0;
let wedd = 0;
let recep = 0;
let eng = 0;
let other = 0;
filterbookings.map((event)=>{
    if (event.type=="wedding"){
        wedd = wedd + 1;
    }else if(event.type=="birthday"){
        bday = bday + 1;
    }else if(event.type=="reception"){
        recep = recep +1;
    }else if(event.type=="engagement"){
        eng=eng+1;
    }else if(event.type=="other"){
        other = other + 1;
        
    }
})

// pie chart
const options1 = { labels: ["Birthday", "Wedding", "Reception", "Engagement", "Other"] };
const series1 = [bday, wedd, recep, eng, other];



    //eventdata searchval
//filter by search (booking)
const [searchvalue, setsearchvalue] = useState("")
console.log('this is booking search value 1 ----->', searchvalue);
function searchval(event) {
  setsearchvalue(event.target.value);
  console.log('this is booking search value 2 ----->', searchvalue);
}
let bookingdata = filterbookings.filter((bk) => {
    var regex = new RegExp(searchvalue);
   

    if (searchvalue == "") {
      return bk;
    } else if (regex.test(bk.booking_id) || regex.test(bk.type) || regex.test(bk.madetime)  || regex.test(bk.sname)  || regex.test(bk.cname) ) {
      return bk;
    }


  })

//set topic

function settopic(y, m) {

    if (y != "year" && m == "month") {
      return (
        <p className=' lg:text-[25px] md:text-[25px] sm:text-[25px] text-[15px]'>Bookings in {y}  : {filterbookings.length} </p>

      )
    } else if (y != "year" && m != "month") {


      const map = new Map([["01", "January"], ["02", "February"], ["03", "March"], ["04", "April"], ["05", "May"], ["06", "June"],
      ["07", "July"], ["08", "August"], ["09", "September"], ["10", "October"], ["11", "November"], ["12", "December"]]);
      return (
        <p className='lg:text-[25px] md:text-[25px] sm:text-[25px] text-[15px] '>Bookings in {y} - {map.get(m)} : {filterbookings.length}  </p>

      )
    } else {
      return (
        <p className=' lg:text-[25px] md:text-[25px] sm:text-[25px] text-[15px] '>Total Bookings : {filterbookings.length}  (2022 - up to now)</p>
      )

    }

  }
    return (
        <>
            {/* <div
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
                        <p className="text-lg text-center font-medium border-b-2 border-gray-900">

                        </p>
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
            </div> */}

            <div className=" flex flex-col gap-16   w-full">

                <div className='flex flex-col'>

                    <div className='flex order-1 gap-3 mb-3 justify-center'>
                        <div className='order-1 flex mt-2'>
                            <p className='text-lg font-bold'> Filter by </p>
                        </div>
                        <div className="relative w-40 order-2 ">
                            <select id="years" className="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                                onChange={filteryear}>
                                <option selected value="year">Year</option>
                                <option value="2022">2022</option>
                                {/* <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option> */}

                            </select>
                        </div>
                        <div className="flex  order-3">
                            <div className="relative w-36">
                                <select id="months" className="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                            dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
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


                    <div className='flex order-2 justify-center'>

                        <div className="flex flex-row gap-2 bg-gray-300 rounded-lg  shadow-lg  shadow-black w-full   py-5 px-6 mb-4 text-2xl text-black  font-bold  justify-center" >
                        {settopic(year,month)}
                        </div>

                    </div>

                    <div className='flex order-3 mt-2 justify-center pl-36'>
                        <Chart options={options1} series={series1} type="pie" width="500" height="900" className='' />

                    </div>

                    <div className="flex mt-2 lg:ml-6 space-x-2 justify-center order-4">
                        <button
                            onClick={handlelessmore1}
                            type="button"
                            className="inline-block p-3 bg-blue-600 text-white font-medium text-sm leading-tight  hover:bg-cyan-500 rounded-lg shadow-md"
                        >{showMore1 ? "Less details" : "More details"}</button>
                    </div>


                    <div className={
                        showMore1
                            ? 'flex order-5 flex-col w-auto mt-5 justify-center'
                            : 'hidden'}>
                      
                        <div className='flex justify-center flex-col mt-4'>
                            <div className='mt-2  flex w-full justify-center'>
                                <p className='font-bold  text-lg '>Total bookings according to search : {bookingdata.length}</p>
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
                                            onChange={searchval}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className={showMore1 ? 'flex order-6 mt-10' : 'hidden'}>


                        <div className="overflow-auto justify-center w-full h-screen">
                            <table className="min-w-full z-0  mr-10">
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
                                            Event
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
                                            Date
                                        </th>




                                    </tr>


                                </thead>
                                <tbody className="">




                                    {bookingdata.map((d) => {

                                        return (

                                            <tr key={d.bookingid} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.booking_id}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.type}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.cname}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.sname}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.madedate.split("T")[0]}</td>





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








        </>


    )
}