import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { AiOutlineBarChart, AiOutlineClose } from 'react-icons/ai'
import Shakir from '../../Shakir.jpg';
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const booking_URL = "http://localhost:4000/api/reportbooking";

// tab for income section (subs and booking)
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


export default function Income() {





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






  // tab for income section (subs and booking)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const [value, setValue] = useState(0);
  //years array;
  const yeeararray = ["2022"];


  //donut chart

  const options = { labels: ["Service Providers", "Customers"], colors: ['#EF4444', '#0284C7'] };
  const series = [100, 400];

  // pie chart
  const options1 = { labels: ["Catering", "Hall", "Decoration", "Photography"] };
  const series1 = [100, 70, 20, 10];




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

  // set service provides


  const [serviceproviders, setserviceProviders] = useState(MockData);

  let count = 0;
  serviceproviders.map((d) => {
    count = count + parseInt(d.Amount)
  })

  console.log('amount-->', count);








  //filter by year 
  //filter by year and month ---> for service provider subscription
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



  //booking filtering by year and month
  let bookingfilter_month_year = bookings.filter((sp) => {

    if (year == "year" && month == "month") {
      return sp;
    } else if (year == "year" && month != "month") {

    } else if (year != "year" && month != "month") {
      console.log('filter data in each row ', year, '|', sp.madedate.split("-")[0], "|", sp.madedate.split("-")[1]);
      if (sp.madedate.split("-")[0] == year && sp.madedate.split("-")[1] == month) {
        return sp;
      }
    } else {
      console.log('filter data in each row ', year, '|', sp.madedate.split("-")[0]);
      if (sp.madedate.split("-")[0] == year) {
        return sp;

      }
    }
  })

//booking income for each year and its month
let bookingincome_specificyearmonth = 0;



bookingfilter_month_year.map((d) => {
  
  bookingincome_specificyearmonth = bookingincome_specificyearmonth + parseInt(d.amount)
  
  

})

  //service provider filtering
  let filtersp = serviceproviders.filter((sp) => {

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


  //set sub_packages total
  // let standard = 0;
  // let silver = 0;
  // let gold = 0;
  // let platinum = 0;

  // filtersp.map((d)=>{
  //   if(d.sub_packageid==2){
  //     standard = standard+parseInt(d.Amount)
  //   }else if(d.sub_packageid==3){
  //     silver = silver+parseInt(d.Amount)
  //   }else if(d.sub_packageid==4){
  //     gold = gold+parseInt(d.Amount)
  //   }else if(d.sub_packageid==5){
  //     platinum = platinum+parseInt(d.Amount)
  //   }


  // })
  let standard = 0;

  let premium = 0;

  filtersp.map((d) => {
    if (d.sub_packageid == 6) {
      standard = standard + parseInt(d.Amount)
    }
    if (d.sub_packageid == 7) {
      premium = premium + parseInt(d.Amount)
    }


  })
  //set standard and premium for all years;
  function setAll(a, v) {
    var i, n = a.length;
    for (i = 0; i < n; ++i) {
      a[i] = v;
    }
  }
  console.log('allyear arry lenght = ', yeeararray.length);
  let allyearsstandard = new Array(yeeararray.length);
  let allyearspremium = new Array(yeeararray.length);
  setAll(allyearsstandard, 0);
  setAll(allyearspremium, 0)
  console.log(allyearsstandard);
  console.log(allyearsstandard);
  console.log('serviceproviders.length ', serviceproviders.length);
  for (let x = 0; x < yeeararray.length; x++) {
    serviceproviders.map((sp) => {
      console.log('year--> ', sp.date.split("T")[0].split("-")[0], yeeararray[x]);

      if (sp.date.split("T")[0].split("-")[0] == yeeararray[x] && sp.type == "Standard") {
        // console.log('year--> ',sp.date.split("T")[0],yeeararray[x]);
        // console.log(' allyearsstandard[x] 1', allyearsstandard[x]);
        allyearsstandard[x] = allyearsstandard[x] + parseInt(sp.Amount);
        console.log(' allyearsstandard[x]2 ', allyearsstandard[x]);
      }

      if (sp.date.split("T")[0].split("-")[0] == yeeararray[x] && sp.type == "Premium") {
        console.log('year--> ', sp.date.split("T")[0], yeeararray[x]);
        allyearspremium[x] = allyearspremium[x] + parseInt(sp.Amount);
      }
    })



  }

  let subsincomeforallyears = new Array(yeeararray.length)
  for (let x = 0; x < yeeararray.length; x++) {
    subsincomeforallyears[0] = allyearsstandard[0] + allyearspremium[0]
  }

// set booking income for all years
let allyearsbooking = new Array(yeeararray.length);

setAll(allyearsbooking, 0);
 for (let x = 0; x < yeeararray.length; x++) {
  bookings.map((sp) => {
      console.log('year--> ', sp.madedate.split("T")[0].split("-")[0], yeeararray[x]);

      if (sp.madedate.split("T")[0].split("-")[0] == yeeararray[x]) {
        // console.log('year--> ',sp.date.split("T")[0],yeeararray[x]);
        // console.log(' allyearsstandard[x] 1', allyearsstandard[x]);
        allyearsbooking[x] = allyearsbooking[x] + parseInt(sp.amount);
        console.log(' allyearsstandard[x]2 ', allyearsbooking[x]);
      }

     
    })



 }


  // bar chart props in income for all years

  const optionsbar01 = {
    series: [
      {
        data: subsincomeforallyears,
        name: "Subscription",
      },
      {
        data: allyearsbooking,
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
        columnWidth: '35%',
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
        text: 'Amount (LKR)',

      }
    },
    colors: ["#2563eb", "#16a34a"],
  };


  // bar chart props in total income for selected year
  const optionsbar02 = {
    series: [

      {
        data: [standard + premium,bookingincome_specificyearmonth],
        name: [""]
      }



    ],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        distributed: true,
        columnWidth: '35%',

      }
    },
    dataLabels: {
      enabled: true
    },
    yaxis: {
      showAlways: true,
      title: {
        text: 'Amount (LKR)',

      }
    },
    xaxis: {
      showAlways: true,
      title: {
        text: 'Packages',

      },
      categories: ['Subscription', 'Booking Fee'],
    },
    colors: ["#2563eb", "#16a34a"]

  };
  // bar chart props in subs income for all years
  const optionsbar1 = {
    series: [
      {
        data: allyearsstandard,
        name: "Standard",
      },
      {
        data: allyearspremium,
        name: "Premium",
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
        columnWidth: '35%',
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
        text: 'Amount (LKR)',

      }
    },
    colors: ["#0891b2", "#7c3aed"],
  };




  // bar chart props in subs income for selected year
  const optionsbar = {
    series: [

      {
        data: [standard, premium],
        name: [""]
      }



    ],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        distributed: true,
        columnWidth: '30%'

      }
    },
    dataLabels: {
      enabled: true
    },
    yaxis: {
      showAlways: true,
      title: {
        text: 'Amount (LKR)',

      }
    },
    xaxis: {
      showAlways: true,
      title: {
        text: 'Packages',

      },
      categories: ['Standard', 'Premium'],
    },
    colors: ["#0891b2", "#7c3aed"]

  };



  // bar chart props in total booking income for all years

  const optionsbar21 = {
    series: [
      {
        data: allyearsbooking,
        name: "Booking fee",
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
        columnWidth: '30%',
      },
    },
    dataLabels: {
      enabled: true,
    },

    xaxis: {
      categories: [yeeararray],
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




    //booking filtering by year 
    let bookingfilteramount__year = bookings.filter((sp) => {

      if (sp.madedate.split("-")[0] == year ) {
        return sp;
      } 
    })
    let bmonths = new Array(12);
    setAll(bmonths,0)

    bookingfilteramount__year.map((bookingfilter__year)=>{
      // console.log(bookingfilter__year.madedate.split("T"));
      if(bookingfilter__year.madedate.split("T")[0].split("-")[1]=="01"){
        bmonths[0] = bmonths[0] + bookingfilter__year.amount;
      }else if(bookingfilter__year.madedate.split("T")[0].split("-")[1]=="02"){
        bmonths[1] = bmonths[1] + bookingfilter__year.amount;
      }else if(bookingfilter__year.madedate.split("T")[0].split("-")[1]=="03"){
        bmonths[2] = bmonths[2] + bookingfilter__year.amount;
      }else if(bookingfilter__year.madedate.split("T")[0].split("-")[1]=="04"){
        bmonths[3] = bmonths[3] + bookingfilter__year.amount;
      }else if(bookingfilter__year.madedate.split("T")[0].split("-")[1]=="05"){
        bmonths[4] = bmonths[4] + bookingfilter__year.amount;
      }else if(bookingfilter__year.madedate.split("T")[0].split("-")[1]=="06"){
        bmonths[5] = bmonths[5] + bookingfilter__year.amount;
      }else if(bookingfilter__year.madedate.split("T")[0].split("-")[1]=="07"){
        bmonths[6] = bmonths[6] + bookingfilter__year.amount;
      }else if(bookingfilter__year.madedate.split("T")[0].split("-")[1]=="08"){
        bmonths[7] = bmonths[7] + bookingfilter__year.amount;
      }else if(bookingfilter__year.madedate.split("T")[0].split("-")[1]=="09"){
        bmonths[8] = bmonths[8] + bookingfilter__year.amount;
      }else if(bookingfilter__year.madedate.split("T")[0].split("-")[1]=="10"){
        bmonths[9] = bmonths[9] + bookingfilter__year.amount;
      }else if(bookingfilter__year.madedate.split("T")[0].split("-")[1]=="11"){
        bmonths[10] = bmonths[10] + bookingfilter__year.amount;
      }else if(bookingfilter__year.madedate.split("T")[0].split("-")[1]=="12"){
        bmonths[11] = bmonths[11] + bookingfilter__year.amount;
      }
    

    })

    

      
      

  const optionsbar22 = {
    series: [
      {
        data: bmonths,
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
        columnWidth: '70%',
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
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
  };


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

    if (sp.decoration) {
      cat = cat + " decoration";
    }
    if (sp.refreshment) {
      cat = cat + " refreshment"
    }
    if (sp.hallservices) {
      cat = cat + " hallservices"
    }
    if (sp.photography) {
      cat = cat + " photography"
    }
    console.log('sp catergory -->', cat);
    if (spsearchvalue == "") {
      return sp;
    } else if (regex.test(sp.name) || regex.test(sp.userid) || regex.test(sp.date.split("T")) || regex.test(cat) || regex.test(sp.Amount) || regex.test(sp.type)) {
      return sp;
    }


  })
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
    return (
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{cat.map(function (object, i) {
        return <p key={i} >{object}</p>;
      })}</td>
    )
  }
  //convert sql date to normal date
  function convertdate(date) {
    let d = date.split("T");
    return (
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d[0]}</td>
    )
  }


  //set sub_package name    ******   id = 6 and 7 check the database
  function show_sub_package(sub_id) {

    if (sub_id == 6) {
      return (
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Standard</td>
      )
    }
    // if (sub_id==3) {
    //   return (
    //     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Silver</td>
    //   )
    // }
    // if (sub_id==4) {
    //   return (
    //     <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Gold</td>
    //   )
    // }
    if (sub_id == 7) {
      return (
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Premium</td>
      )
    }
  }

  //according to search ---> income
  let searchincome = 0;
  setsearchedsp.map((d) => {
    searchincome = searchincome + parseInt(d.Amount)
  })

  // show total income in bar chart
  function showbarchat0(year) {

    if (year == "year") {
      return (
        <div className='flex order-2 mt-10 justify-center pl-30'>
          <Chart
            options={optionsbar01}
            series={optionsbar01.series}
            type="bar"
            className="lineChartVerticleStyle  lg:w-[800px] lg:h-[500px] md:w-[700px] md:h-[400]  md:ml-1  sm:w-[505px] sm:h-[300px]  xs:w-[200px]     bg-cyan-100 rounded-lg"


          />

        </div>
      )
    } else {
      return (
        <div className='flex order-2 mt-10 justify-center pl-30'>
          <Chart
            options={optionsbar02}
            series={optionsbar02.series}
            type="bar"
            className="lineChartVerticleStyle  lg:w-[800px] lg:h-[500px] md:w-[700px] md:h-[400]  md:ml-1  sm:w-[505px] sm:h-[300px]  xs:w-[200px]     bg-cyan-100 rounded-lg"


          />
        </div>
      )
    }

  }



  // show subs income  in bar chart
  function showbarchat(year) {

    if (year == "year") {
      return (
        <div className='flex order-2 mt-10 justify-center pl-30'>
          <Chart
            options={optionsbar1}
            series={optionsbar1.series}
            type="bar"
            className="lineChartVerticleStyle  lg:w-[800px] lg:h-[500px] md:w-[700px] md:h-[400]  md:ml-1  sm:w-[505px] sm:h-[300px]  xs:w-[200px]     bg-cyan-100 rounded-lg"


          />

        </div>
      )
    } else {
      return (
        <div className='flex order-2 mt-10 justify-center pl-30'>
          <Chart
            options={optionsbar}
            series={optionsbar.series}
            type="bar"
            className="lineChartVerticleStyle  lg:w-[800px] lg:h-[500px] md:w-[700px] md:h-[400]  md:ml-1  sm:w-[505px] sm:h-[300px]  xs:w-[200px]     bg-cyan-100 rounded-lg"


          />
        </div>
      )
    }

  }
  // show booking income  in bar chart
  function showbarchart2(year, month) {

    if (year == "year") {
      return (
        <div className='flex order-2 mt-10 justify-center pl-30'>
          <Chart
            options={optionsbar21}
            series={optionsbar21.series}
            type="bar"
            className="lineChartVerticleStyle  lg:w-[800px] lg:h-[500px] md:w-[700px] md:h-[400]  md:ml-1  sm:w-[505px] sm:h-[300px]  xs:w-[200px]     bg-cyan-100 rounded-lg"


          />

        </div>
      )
    } else if (year != "year") {
      return (
        <div className='flex order-2 mt-10 justify-center pl-30'>
          <Chart
            options={optionsbar22}
            series={optionsbar22.series}
            type="bar"
            className="lineChartVerticleStyle  lg:w-[800px] lg:h-[500px] md:w-[700px] md:h-[400]  md:ml-1  sm:w-[505px] sm:h-[300px]  xs:w-[200px]     bg-cyan-100 rounded-lg"


          />
        </div>
      )
    }
  }



  //filter by search (booking fee)
  const [booksearchvalue, setbooksearchvalue] = useState("")

  function booksearchval(event) {
    setbooksearchvalue(event.target.value);

  }

  let filterbookings = bookingfilter_month_year.filter((bk) => {
    var regex = new RegExp(booksearchvalue);
    var cat = "";


    if (booksearchvalue == "") {
      return bk;
    } else if (regex.test(bk.booking_id) || regex.test(bk.cname) || regex.test(bk.sname) || regex.test(bk.cname) ||
      regex.test(bk.madedate.split("T")) || regex.test(bk.type) || regex.test(bk.amount)) {
      return bk;
    }


  })
//according to filtering (year and month) ---> booking income
let filterbookingsincome = 0;
bookingfilter_month_year.map((d) => {
    filterbookingsincome = filterbookingsincome + parseInt(d.amount)
  })

  //according to search ---> booking income
  let searchbookingsincome = 0;
  filterbookings.map((d) => {
    searchbookingsincome = searchbookingsincome + parseInt(d.amount)
  })


  //set topic
  let totalamount = 0;
  filtersp.map((d) => {
    totalamount = totalamount + parseInt(d.Amount)

  })
    //set topic for subscription income
  function settopic(y, m) {


    if (y != "year" && m == "month") {
      return (
        <p className='font-bold  lg:text-[25px] md:text-[25px] sm:text-[25px]  p-2'> Subscription Income  in {y}  : LKR {totalamount}</p>


      )
    } else if (y != "year" && m != "month") {


      const map = new Map([["01", "January"], ["02", "February"], ["03", "March"], ["04", "April"], ["05", "May"], ["06", "June"],
      ["07", "July"], ["08", "August"], ["09", "September"], ["10", "October"], ["11", "November"], ["12", "December"]]);
      return (
        <p className='font-bold  lg:text-[25px] md:text-[25px] sm:text-[25px]  p-2'>Subscription Income in {y} - {map.get(m)} : LKR {totalamount}  </p>

      )
    } else {
      return (
        <p className='font-bold  lg:text-[25px] md:text-[25px] sm:text-[25px]  p-2'>Total Subscription Income : LKR {totalamount}  (2022 - up to now)</p>
      )

    }

  }

  //set topic for total income
  function settopic1(y, m) {


    if (y != "year" && m == "month") {
      return (
        <p className='font-bold  lg:text-[25px] md:text-[25px] sm:text-[25px]  p-2'>  Income  in {y}  : LKR {totalamount+filterbookingsincome}</p>


      )
    } else if (y != "year" && m != "month") {


      const map = new Map([["01", "January"], ["02", "February"], ["03", "March"], ["04", "April"], ["05", "May"], ["06", "June"],
      ["07", "July"], ["08", "August"], ["09", "September"], ["10", "October"], ["11", "November"], ["12", "December"]]);
      return (
        <p className='font-bold  lg:text-[25px] md:text-[25px] sm:text-[25px]  p-2'> Income in {y} - {map.get(m)} : LKR {totalamount+filterbookingsincome}  </p>

      )
    } else {
      return (
        <p className='font-bold  lg:text-[25px] md:text-[25px] sm:text-[25px]  p-2'>Total  Income : LKR {totalamount+filterbookingsincome}  (2022 - up to now)</p>
      )

    }

  }

  //set topic for bookin income
  function settopic2(y, m) {


    if (y != "year" && m == "month") {
      return (
        <p className='font-bold  lg:text-[25px] md:text-[25px] sm:text-[25px]  p-2'> Booking Income  in {y}  : LKR {filterbookingsincome}</p>


      )
    } else if (y != "year" && m != "month") {


      const map = new Map([["01", "January"], ["02", "February"], ["03", "March"], ["04", "April"], ["05", "May"], ["06", "June"],
      ["07", "July"], ["08", "August"], ["09", "September"], ["10", "October"], ["11", "November"], ["12", "December"]]);
      return (
        <p className='font-bold  lg:text-[25px] md:text-[25px] sm:text-[25px]  p-2'> Booking Income in {y} - {map.get(m)} : LKR {filterbookingsincome}  </p>

      )
    } else {
      return (
        <p className='font-bold  lg:text-[25px] md:text-[25px] sm:text-[25px]  p-2'>Total Booking Income : LKR {filterbookingsincome}  (2022 - up to now)</p>
      )

    }

  }


  return (
    <>


      <div className='flex flex-col gap-1 '  >
        <div className='flex flex-col gap-1 justify-center'>
          <div className='flex order-1 flex-row justify-center  '>
            <div className='flex order-1 gap-3 mb-4'>
              <div className='order-1 flex mt-2'>
                <p className='text-lg font-bold'> Filter by </p>
              </div>
              <div className="relative w-40 order-2 ">
                <select id="years" className="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                    dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2"
                  onChange={filteryear}>
                  <option selected value="year">Year</option>
                  <option value="2022">2022</option>
                  

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

          </div>


          <div className='flex order-1 justify-center flex-col'>

            <div className='flex flex-col w-full'>

              <div className='flex order-1 justify-center shadow-lg shadow-slate-600 bg-slate-100 rounded-lg p-2'>
                {settopic1(year, month)}
              </div>
              <div className=' flex order-2 justify-center flex-row gap-14 mt-6'>

                <div className="flex flex-col shadow-lg w-52 bg-slate-100 rounded-lg p-2 justify-center">
                  <p className='flex font-bold text-blue-600   lg:text-[21px] md:text-[21px] sm:text-[20px] justify-center '>Subscription</p>
                  <p className=' flex  lg:text-[21px] md:text-[21px] sm:text-[20px] justify-center'>LKR {standard + premium}</p>
                </div>

                <div className="flex flex-col shadow-lg w-52 bg-slate-100 rounded-lg p-2 justify-center">
                  <p className='flex font-bold text-green-600   lg:text-[21px] md:text-[21px] sm:text-[20px] justify-center '>Booking Fee</p>
                  <p className=' flex  lg:text-[21px] md:text-[21px] sm:text-[20px] justify-center'>LKR {filterbookingsincome}</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              {showbarchat0(year)}
            </div>

          </div >
        </div>


        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Subscription" {...a11yProps(0)} />
              <Tab label="Booking Fee" {...a11yProps(1)} />
              {/* <Tab label="Trails" {...a11yProps(2)} /> */}

            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            {/* subscription fee */}
            <div className='flex flex-col order-2'>
              <div className='flex flex-col order-1'>
                {console.log('year-->', year, "  sp ----- >")

                }
                {console.log(filtersp)}
                <div className="flex order-1 p-1 flex-col py-2 gap-4">

                  <div className='flex order-2 justify-center'>

                    <div className='flex flex-col w-full'>
                      <div className='flex order-1 justify-center shadow-lg shadow-slate-100 w-auto rounded-lg p-2'>
                        {settopic(year, month)}
                      </div>
                      <div className=' flex order-2 justify-center flex-row gap-14 mt-6'>

                        <div className="flex flex-col shadow-lg w-52 bg-slate-100 rounded-lg p-2 justify-center">
                          <p className='flex font-bold text-cyan-600   lg:text-[21px] md:text-[21px] sm:text-[20px] justify-center '>Standard</p>
                          <p className=' flex  lg:text-[21px] md:text-[21px] sm:text-[20px] justify-center'>LKR {standard}</p>
                        </div>

                        <div className="flex flex-col shadow-lg w-52 bg-slate-100 rounded-lg p-2 justify-center">
                          <p className='flex font-bold text-violet-600   lg:text-[21px] md:text-[21px] sm:text-[20px] justify-center '>Premium</p>
                          <p className=' flex  lg:text-[21px] md:text-[21px] sm:text-[20px] justify-center'>LKR {premium}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {showbarchat(year)}



              </div>
              <div className='flex order-2 justify-center mt-4'>
                <div className="flex  space-x-2 justify-center">
                  <button
                    onClick={handlelessmore}
                    type="button"
                    className="inline-block p-3 mb-3 bg-blue-600 text-white font-medium text-sm leading-tight  hover:bg-cyan-500 rounded-lg shadow-md"
                  >{showMore ? "Less details" : "More details"}</button>
                </div>
              </div>

              <div className={
                showMore
                  ? 'flex flex-col order-3'
                  : 'hidden'
              }
              >
                <div className='flex flex-row order-1  mr-3 ml-3 justify-center'>



                  <div className='mt-1  flex justify-center'>
                    <p className='flex justify-center font-bold  lg:text-xl md:text-xl sm:text-lg text-sm '>Income according to search (LKR): {searchincome}</p>
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
                        onChange={spsearchval}
                      />
                    </label>
                  </div>
                </div>

                <div className="flex flex-col order-3 mt-5">
                  <div className="overflow-auto justify-center w-full h-screen   ">
                    <table className="min-w-full z-0  mr-10 ">
                      <thead className="bg-white border-b sticky top-0">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Payment ID
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
                            Payment date
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




                        {setsearchedsp.map((d) => {

                          return (

                            <tr key={d.payid} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.payid}</td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.name}</td>

                              {catselect(d.refreshment, d.decoration, d.hallservices, d.photography, d.userid)}
                              {show_sub_package(d.sub_packageid)}
                              {convertdate(d.date)}
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
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* booking fee */}
            <div className='flex flex-col order-2'>
              <div className='flex flex-col order-1'>
                {console.log('year-->', year)

                }

                <div className="flex order-1 p-1 flex-col py-2 gap-4">

                  <div className='flex order-2 justify-center'>

                    <div className='flex flex-col w-full'>
                      <div className='flex order-1 justify-center shadow-lg shadow-slate-100 rounded-lg p-2'>
                        {settopic2(year, month)}
                      </div>
                      {/* <div className=' flex order-2 justify-center flex-row gap-14 mt-6'>

                        <div className="flex flex-col shadow-lg w-52 bg-slate-100 rounded-lg p-2 justify-center">
                          <p className='flex font-bold text-green-600   lg:text-[21px] md:text-[21px] sm:text-[20px] justify-center '>Standard</p>
                          <p className=' flex  lg:text-[21px] md:text-[21px] sm:text-[20px] justify-center'>LKR {standard}</p>
                        </div>

                        <div className="flex flex-col shadow-lg w-52 bg-slate-100 rounded-lg p-2 justify-center">
                          <p className='flex font-bold text-blue-600   lg:text-[21px] md:text-[21px] sm:text-[20px] justify-center '>Premium</p>
                          <p className=' flex  lg:text-[21px] md:text-[21px] sm:text-[20px] justify-center'>LKR {premium}</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                {showbarchart2(year, month)}

              </div>
              <div className='flex order-2 justify-center mt-4'>
                <div className="flex  space-x-2 justify-center">
                  <button
                    onClick={handlelessmore}
                    type="button"
                    className="inline-block p-3 mb-3 bg-blue-600 text-white font-medium text-sm leading-tight  hover:bg-cyan-500 rounded-lg shadow-md"
                  >{showMore ? "Less details" : "More details"}</button>
                </div>
              </div>

              <div className={
                showMore
                  ? 'flex flex-col order-3'
                  : 'hidden'
              }
              >
                <div className='flex flex-row order-1  mr-3 ml-3 justify-center'>



                  <div className='mt-1  flex justify-center'>
                    <p className='flex justify-center font-bold  lg:text-xl md:text-xl sm:text-lg text-sm '>Income according to search (LKR): {searchbookingsincome}</p>
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
                        onChange={booksearchval}
                      />
                    </label>
                  </div>
                </div>

                <div className="flex flex-col order-3 mt-5">
                  <div className="overflow-auto justify-center w-full h-screen   ">
                    <table className="min-w-full z-0  mr-10 ">
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
                </div>

              </div>
            </div>
          </TabPanel>

        </Box>







      </div>





    </>

  )

}

