import React, { useState, useEffect } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import MockData from './monthlypay.json'
// import { Stacked, Button, SparkLine } from '../../../components';
// import Stacked from "../../../components/Charts/Stacked";
// import Button from "../../../components/button/Button";
// import SparkLine from "../../../components/Charts/SparkLine";
// import { earningData } from "../../../documents/dummy";
// import { SparklineAreaData } from "../../../documents/dummy";
// import { useStateContext } from '../contexts/ContextProvider';
import AdminHeader from "../header/AdminHeader";
import AdminSidebar from "../sidebar/AdminSidebar";
import Footer from "../footer/Footer";
import Chart from "react-apexcharts";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const booking_URL = "http://localhost:4000/api/reportbooking";
const API_URL = "http://localhost:4000/api/allcus"
const API_URL2 = "http://localhost:4000/api/allsp"
const AdminDashboard = () => {
  //  const { currentColor } = useStateContext();
  //get all bookings
  const [bookings, setbookings] = useState([])
  // all years
  const yeeararray = ["2022",];
  async function fetchbookings() {
    try {
      const res = await axios.get(booking_URL);
      setbookings(res.data);
    } catch (error) {
      console.error(error.message);
    }
  }
  const [subscriptionincome, setsubscriptionincome] = useState(MockData);

  useEffect(() => {
    fetchbookings();
  }, []);
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

  //set standard and premium for all years;
  function setAll(a, v) {
    var i, n = a.length;
    for (i = 0; i < n; ++i) {
      a[i] = v;
    }
  }
  console.log('allyear arry lenght = ', yeeararray.length);
  let allyearssubincome = new Array(yeeararray.length);
  let allyearbooking = new Array(yeeararray.length);
  setAll(allyearssubincome, 0);
  setAll(allyearbooking, 0)
  console.log(allyearssubincome);
  //console.log(allyearsstandard);

  for (let x = 0; x < yeeararray.length; x++) {


    subscriptionincome.map((sp) => {
      if (sp.date.split("T")[0].split("-")[0] == yeeararray[x]) {
        // console.log('year--> ',sp.date.split("T")[0],yeeararray[x]);
        // console.log(' allyearsstandard[x] 1', allyearsstandard[x]);
        allyearssubincome[x] = allyearssubincome[x] + parseInt(sp.Amount);

      }
    })

    bookings.map((sp) => {
      if (sp.madedate.split("T")[0].split("-")[0] == yeeararray[x]) {
        // console.log('year--> ',sp.date.split("T")[0],yeeararray[x]);
        // console.log(' allyearsstandard[x] 1', allyearsstandard[x]);
        allyearbooking[x] = allyearbooking[x] + parseInt(sp.amount);

      }
    })








  }
  //total income
  let totalincome = 0;

  for (let x = 0; x < allyearssubincome.length; x++) {
    totalincome = totalincome = allyearssubincome[x] + allyearbooking[x];
  }


  let total = 0
  let bday = 0;
  let wedd = 0;
  let recep = 0;
  let eng = 0;
  let other = 0;
  bookings.map((event) => {
    if (event.type == "wedding") {
      wedd = wedd + 1;
    } else if (event.type == "birthday") {
      bday = bday + 1;
    } else if (event.type == "reception") {
      recep = recep + 1;
    } else if (event.type == "engagement") {
      eng = eng + 1;
    } else if (event.type == "other") {
      other = other + 1;

    }
  })

total = bday + wedd + recep + eng + other;





  const options1 = { labels: ["Birthday", "Wedding", "Reception", "Engagement", "Other"] };
  const series1 = [bday, wedd, recep, eng, other];

  // const options1 = {
  //   labels: ["Catering", "Hall", "Decoration", "Photography"],
  // };
  // const series1 = [17, 25, 10, 15];

  const optionsbar = {
    series: [
      {
        data: [111, 127, 143, 159, 99, 80, 100],
        name: "Subscriptions",
      },
      {
        data: [81, 87, 93, 59, 89, 99, 79],
        name: "Booking Fee",
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
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
    },
  };

  const optionsbar2 = {


    series: [
      {
        data: allyearssubincome,
        name: "Subscriptions",
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
        columnWidth: '35%'
      },
    },
    dataLabels: {
      enabled: true,
    },

    xaxis: {
      categories: yeeararray,
    },

    xaxis: {
      categories: yeeararray,
      title: {
        text: 'Years',

      }
    },
    yaxis: {
      showAlways: true,
      title: {
        text: 'Amount (LKR)',

      }
    },





  };
  
  const optionsbar3 = {


    series: [
      {
        data: [2],
        name: "bookings",
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
        columnWidth: '35%'
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: yeeararray,
      title: {
        text: 'Years',

      }
    },
    yaxis: {
      showAlways: true,
      title: {
        text: 'Booking amount',

      }
    },
    colors: ["#16a34a"],
    
  };

  return (
    
      
      
       
        <div className=" max-h-fit">
          <div>
            <div className=" bg-slate-100 max-h-fit">
              <div className="flex flex-wrap lg:flex-nowrap justify-center">
                {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dary-bg h-44
          rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repat bg-cover bg-center">
            <div className="flex justify-between item-center">
              <div>
                <p className="font-bold text-gray-400">
                  Earnings
                </p>
                <p className="text-2xl">
                  $3,448.78
                </p>
              </div>
  
            </div>
            <div className="mt-6">
              <Button 
                color="white"
                bgColor="#03C9D7"
              //  bgColor={currentColor}
                text="Download"
                borderRadius="10px"
                size="md"
              />
            </div>
          </div> */}

               
              </div>

              <div className="flex gap-10 flex-wrap justify-center">
                <div
                  className="bg-white m-3 p-4
          rounded-2xl md:w-780"
                >
                  <div className="flex justify-center">
                    {/* <p className="font-semibold text-black text-xl">
                      Revenue Updates
                    </p> */}
                    {/* <div className="flex">
                      <Button
                        color="white"
                        bgColor="#03C9D7"
                        // bgColor={currentColor}
                        text="Go to Report"
                        borderRadius="10px"
                      />
                    </div> */}
                    <div className="flex item-center gap-4 ">
                      {/* <p className="flex item-center gap-2 text-gray-600
                hover:drop-shadow-xl">
                  <span><GoPrimitiveDot /></span>
                  <span>Expense</span>
                </p> */}
                      <p
                        className="flex item-center gap-2 text-xl text-green-400
                hover:drop-shadow-xl"
                      >
                        <span>2022 - upto now</span>
                      </p>
                    </div>
                  </div>

                  <div
                    className="mt-1 flex gap-10
              flex-wrap justify-center"
                  >
                    <div className="border-r-1 border-color m-4 mt-7 pr-10">
                      <div>
                        <p>
                          <span className="text-3xl font-semibold">
                            LKR {allyearssubincome}
                          </span>
                          {/* <span className="p-1.5 hover:drop-shadow-xl cursor-pointer
                      rounded-full text-white bg-green-400 ml-3 text-xs">
                        23%
                      </span> */}
                        </p>
                        <p className="text-gray-500 mt-1">Total Income</p>
                      </div>

                      <div className="mt-8">
                        <p>
                          {/* <span className="text-3xl font-semibold">
                        $48,438
                      </span> */}
                        </p>
                        {/* <p className="text-gray-500 mt-1">
                      Expense
                    </p> */}
                      </div>

                      {/* <div className="mt-5">
                      <SparkLine 
                        currentColor="#03C9D7"
                        // currentColor={currentColor}
                        id="line-sparkline"
                        type="Line"
                        height="80px"
                        width="250px"
                        data={SparklineAreaData}
                        color="#03C9D7"
                        // color={currentColor}
                      />
                    </div> */}


                    </div>
                    {/* <div>
                      <Stacked width="360px" height="360px" />
                    </div> */}
                    {/* <div className="flex order-2 mt-10 justify-center pl-30">
                      <Chart
                        options={optionsbar}
                        series={optionsbar.series}
                        type="bar"
                        className="lineChartVerticleStyle   lg:w-[700px] lg:h-[500] md:w-[700px] md:h-[400]  md:ml-1  sm:w-[505px] sm:h-[300px]  xs:w-[200px]     bg-cyan-100 rounded-lg"
                      />
                    </div> */}

                    <div className="flex order-2 mt-10 justify-center pl-30">
                      <Chart
                        options={optionsbar2}
                        series={optionsbar2.series}
                        type="bar"
                        className="lineChartVerticleStyle   lg:w-[700px] lg:h-[500] md:w-[700px] md:h-[400]  md:ml-1  sm:w-[505px] sm:h-[300px]  xs:w-[200px]     bg-cyan-100 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="border-r-1 border-color m-4 pr-10 mt-24">
                    <div className="flex flex-col">
                      <p className="flex justify-start ml-9">
                        <span className="text-3xl font-semibold">
                          {2}
                          {console.log('bday + wedd + recep + eng + other')}
                        </span>
                        {/* <span className="p-1.5 hover:drop-shadow-xl cursor-pointer
                      rounded-full text-white bg-green-400 ml-3 text-xs">
                        23%
                      </span> */}
                      </p>
                      <p className="text-gray-500 ">Total Bookings</p>
                    </div>


                  </div>
                  <div className="flex justify-center mt-[-100px]">




                    <div className="flex justify-center ml-64">
                    <Chart
                        options={optionsbar3}
                        series={optionsbar3.series}
                        type="bar"
                        className="lineChartVerticleStyle   lg:w-[700px] lg:h-[500] md:w-[700px] md:h-[400]  md:ml-1  sm:w-[505px] sm:h-[300px]  xs:w-[200px]     bg-cyan-100 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default AdminDashboard;
