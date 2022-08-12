import React, { Component } from 'react';
import { useState } from 'react';
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';
import { stringify } from 'postcss';
import 'tw-elements';
import './systemreports.css'
import event_data from './eventdata.json'
import cus from './cus.json'
import ser from './ser.json'
import CustomerRate from './cus_rate'
import MockData from './monthlypay.json'

export default function SystemReports() {

  const [data, setdata] = useState(MockData);
  const [eventdata, setdata2] = useState(event_data);
  const [cusdata, setdata3] = useState(cus);
  const [serdata, setdata4] = useState(ser);
  const [showpopup, setshowpopup] = useState(false);
  const handleOnClose = () => setshowpopup(false);

  const lineChartValues = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Aprail', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      markers: {
        size: [7]
      }


    },
    series: [
      {
        name: "Rs",
        data: [30, 40, 45, 50, 49, 60, 55, 62, 40, 50, 55, 60]
      }
    ]

  };


  return (
    <div className='flex h-screen'>
      <CustomerRate onClose={handleOnClose} visible={showpopup} />
      {/* 
========================================================================================================================================================================
                                                                                      income
======================================================================================================================================================================== */}
      <div className='flex flex-col'>


        <div className='flex bg-white-300  h-screen  flex-wrap gap-8 order-1 w-full ml-36  mt-20' >
          <div className="flex  space-y-4 flex-col ml-5 text-2xl w-full text-center  ">
            <ul className=" nav nav-tabs flex flex-row  flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a href="#tabs-home" className="nav-link block  text-xl leading-tight uppercase border-x-0 text-black rounded-lg font-bold
                         border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-cyan-500  hover:text-white focus:border-transparent active"
                  id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                  aria-selected="true">INCOME</a>
              </li>
              <li className="nav-item" role="presentation">
                <a href="#tabs-profile" className="nav-link block   text-black font-bold text-xl leading-tight uppercase  border-x-0 border-t-0 border-b-2 border-transparent
                          px-6 py-3 my-2 hover:border-transparent rounded-lg hover:bg-cyan-500  hover:text-white  focus:border-transparent" id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                  aria-controls="tabs-profile" aria-selected="false">EVENTS</a>
              </li>
              <li className="nav-item" role="presentation">
                <a href="#tabs-messages" className=" nav-link block rounded-lg  text-black font-bold text-xl leading-tight uppercase  border-x-0 border-t-0 border-b-2 border-transparent
                          px-6 py-3 my-2 hover:border-transparent hover:bg-cyan-500  hover:text-white focus:border-transparent" id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                  aria-controls="tabs-messages" aria-selected="false">USERS</a>
              </li>

            </ul>
          </div>

        </div>
        <div className='flex flex-col tab-content order-2 mt-[-50px] ml-[-100px]' id="tabs-tabContent">


          <div className='flex flex-col gap-16 mt-20 ml-72 w-full tab-pane fade show active' id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
            <div className='flex flex-col order-1'>
              <div className='flex flex-row order-1 mt-3 mr-3 ml-52 w-[700px]'>
                <div className='flex w-40 font-bold'>
                  <select id="years" class="bg-gray-50 borde border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5
                                            dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black  border-2">
                    <option selected>Choose a Year</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>

                  </select>
                </div>

                <div className='mt-2 ml-auto justify-end'>
                  <p className='font-bold  text-xl '>Total Income : Rs 2000</p>
                </div>

              </div>

              <div className='flex order-2 mt-10'>
                <Chart
                  options={lineChartValues.options}
                  series={lineChartValues.series}
                  type="line"
                  className="lineChartVerticleStyle ml-52"
                  width="700"
                  height="500"
                />
              </div>
            </div>
            <br></br> <br />
            {/* 
========================================================================================================================================================================
                                                                                      Events
======================================================================================================================================================================== */}
            <div className='flex flex-col order-2'>
              <div className='flex flex-row order-1 mt-7 mr-3 ml-3'>

                <div className='flex w-40 font-bold '>
                  <select id="months" class="bg-gray-50 borde border-black text-gray-900 text-sm rounded-lg  w-full p-2.5
                        dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black  border-2">
                    <option selected>Choose a Month</option>
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

                <div className='flex  ml-32 w-1/2'>
                  <form className='w-11/12'>
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-black dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>
                      <input type="search" id="default-search" className="block p-4 pl-10   w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-black  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required
                      />

                      <button type="submit" className="text-white absolute right-2.5 bottom-2.5  bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-500 dark:hover:bg-black ">Search</button>
                    </div>
                  </form>

                </div >


                <div className='mt-2 ml-auto flex '>
                  <p className='font-bold  text-xl '>Total Income : Rs 20000.00</p>
                </div>


              </div>

              <div class="flex flex-col order-2 mt-5">
                <table className="shadow-2xl border-2 width-auto">
                  <thead className='bg-black text-white cursor-pointer'>
                    <th >id</th>
                    <th >Service provider</th>
                    <th >Amount(Rs)</th>
                  </thead>

                  <tbody className='text-center'>

                    {data.map((d) => {

                      return (
                        <tr key={d.ID} className='cursor-pointer duration-300 hover:bg-cyan-500 hover:scale-105 h-auto even:bg-gray-300 hover:text-white'>
                          <td>{d.ID}</td>
                          <td>{d.ServiceProvider}</td>
                          <td>{d.Amount}</td>

                        </tr>


                      )

                    }
                    )
                    }

                  </tbody>

                </table>
              </div>

            </div>
            <br></br><br />
          </div>


          <div class="tab-pane fade flex flex-col gap-16 mt-20 ml-72 w-full" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
            <div className='flex flex-col'>




              <div className='flex order-1'>

                <div class="flex bg-gray-300 rounded-lg py-5 px-6 mb-4 text-2xl text-black  font-bold bold  w-full justify-center" role="alert">
                  <p>Total Number of Events : 200 </p>
                </div>

              </div>




              <div className='flex order-2 flex-row w-auto mt-5'>
                <div className='flex w-40 font-bold'>
                  <select id="years" class="bg-gray-50 borde border-black text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
                    <option selected>Year</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>

                  </select>
                </div>

                <div className='flex w-40 font-bold ml-5'>
                  <select id="months" class="bg-gray-50 borde border-black text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
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

                <div className='flex  ml-11 w-1/2'>
                  <form className='w-11/12'>
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-black dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>
                      <input type="search" id="default-search" className="block p-4 pl-10   w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-black  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required
                      />

                      <button type="submit" className="text-white absolute right-2.5 bottom-2.5  bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-500 dark:hover:bg-black ">Search</button>
                    </div>
                  </form>

                </div >


                <div className='mt-2 ml-auto flex w-72 justify-end'>
                  <p className='font-bold  text-xl '>Total Events : 200</p>
                </div>
              </div>

              <div className='flex order-3 mt-10'>
                <table className="shadow-2xl border-2 w-full">
                  <thead className='bg-black text-white cursor-pointer'>
                    <th >Event Id</th>
                    <th >Catergory</th>
                    <th >Service provider</th>
                    <th >Customer</th>
                    <th >Started date</th>
                    <th >Ended date</th>
                    <th >Rating</th>
                  </thead>

                  <tbody className='text-center'>

                    {eventdata.map((d) => {

                      return (
                        <tr key={d.eventid} onClick={() => setshowpopup(true)} className='cursor-pointer duration-300 hover:bg-cyan-500 hover:scale-105 h-auto even:bg-gray-300 hover:text-white'>
                          <td>{d.eventid}</td>
                          <td>{d.eventname}</td>
                          <td>{d.serviceprovider}</td>
                          <td>{d.customer}</td>
                          <td>{d.startdate}</td>
                          <td>{d.enddate}</td>
                          <td>{d.rating}</td>

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
          {/* 
========================================================================================================================================================================
                                                                                      users
======================================================================================================================================================================== */}



          <div class="tab-pane fade flex flex-col gap-16 mt-20 ml-72 w-[1200px]" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
            <div className='flex order-1'>
              <div class="flex bg-gray-300 rounded-lg py-5 px-6 mb-4 text-2xl text-black justify-start   font-bold bold  w-full " role="alert">

                <p>All Users : 500 </p>
                <p className='ml-[450px]'>Service Providers : 100 </p>
                <p className='ml-20'>Customers : 400 </p>

              </div>

            </div>

            <div className='flex order-2'>


              <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab3"
                role="tablist">
                <li class="nav-item" role="presentation">
                  <a href="#tabs-home3" class="nav-link w-full block font-bold text-base leading-tight uppercase border-x-0 border-t-0 border-b-2
                                  border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100
                                  focus:border-transparent active
                                " id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3"
                    aria-selected="true">Survice Providers
                  </a>
                </li>
                <li class="nav-item ml-4" role="presentation">
                  <a href="#tabs-profile3" class=" nav-link w-full font-bold block  text-base leading-tight uppercase border-x-0 
                                border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 
                                focus:border-transparent
                                " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                    aria-controls="tabs-profile3" aria-selected="false"> Customers
                  </a>
                </li>

              </ul>


            </div>



            <div className='flex order-3'>
              <div class="tab-content mt-5 ml-8" id="tabs-tabContent3">

                {/* ==========================================================================================================================
                                                                                        survice provider
                  ==========================================================================================================================  */}

                <div class="tab-pane fade show active flex flex-col" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                  <div className='flex order-1 flex-row w-full ml-[-31px]'>
                    <div className='flex w-40 font-bold'>
                      <select id="years" class="bg-gray-50 borde border-black text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
                        <option selected>Year</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>

                      </select>
                    </div>

                    <div className='flex w-40 font-bold ml-5'>
                      <select id="months" class="bg-gray-50 borde border-black text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
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

                    <div className='flex  ml-11 w-1/2'>
                      <form className='w-11/12'>
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div className="relative w-[600px]">
                          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-black dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                          </div>
                          <input type="search" id="default-search" className="block p-4 pl-10   w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-black  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required
                          />

                          <button type="submit" className="text-white absolute right-2.5 bottom-2.5  bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-500 dark:hover:bg-black ">Search</button>
                        </div>
                      </form>

                    </div >


                    <div className='mt-2 ml-[-46px] flex w-72 justify-end'>
                      <p className='font-bold  text-xl '>Total Users : 100</p>
                    </div>

                  </div>



                  <div className='flex order-2  ml-[-30px]'>


                    <div className='flex order-3 mt-10 w-full'>
                      <table className="shadow-2xl border-2 w-full">
                        <thead className='bg-black text-white cursor-pointer'>
                          <th >User Id</th>
                          <th >Name</th>
                          <th >Joined date</th>

                        </thead>

                        <tbody className='text-center'>

                          {serdata.map((d) => {

                            return (
                              <tr key={d.id} className='cursor-pointer duration-300 hover:bg-cyan-500 hover:scale-105 h-auto even:bg-gray-300 hover:text-white'>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.jdate}</td>


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

                {/* ==========================================================================================================================
                                                                                        customer
                                      ==========================================================================================================================  */}

                <div class="tab-pane fade rounded " id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                  <div className='flex order-1 flex-row w-full ml-[-31px]'>
                    <div className='flex w-40 font-bold'>
                      <select id="years" class="bg-gray-50 borde border-black text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
                        <option selected>Year</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>

                      </select>
                    </div>

                    <div className='flex w-40 font-bold ml-5'>
                      <select id="months" class="bg-gray-50 borde border-black text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
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

                    <div className='flex  ml-11 w-1/2'>
                      <form className='w-11/12'>
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div className="relative w-[600px]">
                          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-black dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                          </div>
                          <input type="search" id="default-search" className="block p-4 pl-10   w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-black  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required
                          />

                          <button type="submit" className="text-white absolute right-2.5 bottom-2.5  bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-500 dark:hover:bg-black ">Search</button>
                        </div>
                      </form>

                    </div >


                    <div className='mt-2 ml-[-46px] flex w-72 justify-end'>
                      <p className='font-bold  text-xl '>Total Users : 400</p>
                    </div>
                  </div>


                  <div className='flex order-2 ml-[-30px]'>


                    <div className='flex order-3 mt-10 w-full'>
                      <table className="shadow-2xl border-2 w-full">
                        <thead className='bg-black text-white cursor-pointer'>
                          <th >User Id</th>
                          <th >Name</th>
                          <th >Joined date</th>

                        </thead>

                        <tbody className='text-center'>

                          {serdata.map((d) => {

                            return (
                              <tr key={d.id} className='cursor-pointer duration-300 hover:bg-cyan-500 hover:scale-105 h-auto even:bg-gray-300 hover:text-white'>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.jdate}</td>


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





            </div>
          </div>



        </div>


      </div>

    </div>



  );

}


