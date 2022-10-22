import React, { Component } from 'react';
import { useState } from 'react';
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





export default function Booking() {
    //donut chart

    const options = { labels: ["Service Providers", "Customers"], colors: ['#EF4444', '#0284C7'] };
    const series = [100, 400];

    // pie chart
    const options1 = { labels: ["Catering", "Hall", "Decoration", "Photography"] };
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


    return (
        <>
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
            </div>

            <div className=" flex flex-col gap-16   w-full">

                <div className='flex flex-col'>

                    <div className='flex order-1 gap-3 mb-3 justify-center'>
                        <div className='order-1 flex mt-2'>
                            <p className='text-lg font-bold'> Filter by </p>
                        </div>
                        <div className="relative w-40 order-2 ">
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
                        <div className="flex  order-3">
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
                        </div>
                    </div>


                    <div className='flex order-2 justify-center'>

                        <div className="flex flex-row gap-2 bg-gray-300 rounded-lg  shadow-lg  shadow-black w-full   py-5 px-6 mb-4 text-2xl text-black  font-bold  justify-center" >
                            <p className=' lg:text-[25px] md:text-[25px] sm:text-[25px] text-[15px]'>Total Bookings : 200 (2022 - up to now)</p>
                        </div>

                    </div>

                    <div className='flex order-3 mt-2 justify-center pl-36'>
                        <Chart options={options1} series={series1} type="pie" width="500" height="900" className='' />

                    </div>

                    <div className="flex mt-2 space-x-2 justify-center order-4">
                        <button
                            onClick={handlelessmore1}
                            type="button"
                            className="inline-block p-3 bg-blue-600 text-white font-medium text-sm leading-tight  hover:bg-cyan-500 rounded-lg shadow-md"
                        >{showMore1 ? "Less details" : "More details"}</button>
                    </div>


                    <div className={
                        showMore1
                            ? 'flex order-5 flex-row w-auto mt-5'
                            : 'hidden'}>
                        <div className="flex p-1 md:px-4 py-2 ">
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
                        </div>

                        <div className="flex p-1 md:px-4 py-2 ">
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


                        <div className={'mt-2  flex w-72 justify-end'}


                        >
                            <p className='font-bold  text-lg '>Total Bookings : 200</p>
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
                                            Catergory
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
                                            Date
                                        </th>




                                    </tr>


                                </thead>
                                <tbody className="">




                                    {eventdata.map((d) => {

                                        return (

                                            <tr key={d.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.eventid}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.eventname}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.customer}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.startdate}</td>

                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <button onClick={handlePopup}
                                                        className="m-1 py-2 px-4 w-auto bg-blue-500 text-white font-semibold rounded-lg shadow-md
                                                                 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                                                    >
                                                        More Details
                                                    </button>
                                                </td>



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