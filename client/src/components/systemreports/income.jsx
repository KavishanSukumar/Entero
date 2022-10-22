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




export default function Income() {
  
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

  // bar chart props in income
  const optionsbar = {
    series: [

      {
        data: [20000, 24000, 4000, 8000],
        name: 'Standard package'
      },
      {
        data: [21000, 14000, 7000, 14000],
        name: 'Premium package'
      },


    ],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,


      }
    },
    dataLabels: {
      enabled: true
    },


    xaxis: {
      categories: ['Caterings', 'Halls', 'Decorations', 'Photography'
      ],


    },
    yaxis: {
      showAlways: true,
      title: {
        text: 'Amount (LKR)',

      }
    }
  };

return (
<>


 <div className='flex flex-col gap-16 '  >
<div className='flex flex-col order-1'>

  <div className="flex order-1 p-1 flex-col py-2 gap-4">
    <div className='flex order-1 flex-row justify-center  '>
      <div className='flex order-1 gap-3 '>
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
      </div>

    </div>
    <div className='flex order-2 justify-center'>

      <div className='flex flex-col'>
        <div className='flex order-1 justify-center shadow-lg shadow-black bg-gray-300 rounded-lg'>
          <p className='font-bold  lg:text-[25px] md:text-[25px] sm:text-[25px]  p-2'>Total Income: LKR 112000 (2022 - up to now)</p>
        </div>
        <div className=' flex order-2 justify-center flex-row gap-14 mt-6'>
          <p className='font-bold  lg:text-[21px] md:text-[21px] sm:text-[20px] shadow-lg bg-slate-200 rounded-lg p-2'>Catering: LKR 41000</p>
          <p className='font-bold  lg:text-[21px] md:text-[21px] sm:text-[20px] shadow-lg bg-slate-200 rounded-lg p-2'>Halls: LKR 38000</p>
          <p className='font-bold  lg:text-[21px] md:text-[21px] sm:text-[20px] shadow-lg bg-slate-200 rounded-lg p-2'>Decoration: LKR 11000</p>
          <p className='font-bold  lg:text-[21px] md:text-[21px] sm:text-[20px] shadow-lg bg-slate-200 rounded-lg p-2'>Photography: LKR 22000</p>
        </div>
      </div>
    </div>
  </div>




  <div className='flex order-2 mt-10 justify-center pl-30'>
    <Chart
      options={optionsbar}
      series={optionsbar.series}
      type="bar"
      className="lineChartVerticleStyle  lg:w-[800px] lg:h-[500px] md:w-[700px] md:h-[400]  md:ml-1  sm:w-[505px] sm:h-[300px]  xs:w-[200px]     bg-cyan-100 rounded-lg"


    />
  </div>
</div>

<div className='flex order-2 justify-center'>
  <div className="flex  space-x-2 justify-center">
    <button
      onClick={handlelessmore}
      type="button"
      className="inline-block p-3 bg-blue-600 text-white font-medium text-sm leading-tight  hover:bg-cyan-500 rounded-lg shadow-md"
    >{showMore ? "Less details" : "More details"}</button>
  </div>
</div>

<div className={
  showMore
    ? 'flex flex-col order-3'
    : 'hidden'
}
>
  <div className='flex flex-row order-1  mr-3 ml-3'>
    <div className="relative w-36 mt-2">
      <select id="years"  className="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                    dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500
                                     dark:focus:border-cyan-500 border-2">
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
        <select id="cat"  className="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 
                                                dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500
                                                 dark:focus:border-cyan-500 border-2">
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
        <select id="cat"  className="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 
                                                dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
          <option selected> Package</option>
          <option value=""> Standard</option>
          <option value="">Premium</option>





        </select>
      </div>
    </div>


    <div className='mt-1 ml-auto flex '>
      <p className='font-bold  text-xl '>Income (LKR): 200000</p>
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

  <div  className="flex flex-col order-3 mt-5">
    <div className="overflow-auto justify-center w-full h-screen   ">
      <table  className="min-w-full z-0  mr-10 ">
        <thead  className="bg-white border-b sticky top-0">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              User ID
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
              Catergory
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Package
            </th>

            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Amount(LKR)
            </th>

          </tr>


        </thead>
        <tbody className="">




          {data.map((d) => {

            return (

              <tr key={d.ID} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.ID}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.ServiceProvider}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.cat}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.type}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.Amount}</td>


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

