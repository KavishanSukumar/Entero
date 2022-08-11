import { stringify } from 'postcss';
import {Component} from 'react';
import { useState } from 'react';
import MockData from './payments.json'
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


export default function SortTable(){
    const [values, setValues] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValues(newValue);
    };
     const [data, setdata] = useState(MockData);
     const [order,setorder] = useState("ASC");
     const sorting = (col) =>{
        if(order =="ASC"){
            const sorted = [...data].sort((a,b)=>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("DSC");
        }
        if(order =="DSC"){
            const sorted = [...data].sort((a,b)=>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("ASC");
        }
     }
     const sortnum = (col) =>{
        if(order =="ASC"){
            const sorted = [...data].sort((a,b)=>
            {if(a[col]>b[col]) return 1;
            if(a[col]<b[col]) return -1;
            return 0;
            });
            setdata(sorted);
            setorder("DSC");
        }
        if(order =="DSC"){
            const sorted = [...data].sort((a,b)=>
            {if(a[col]<b[col]) return 1;
            if(a[col]>b[col]) return -1;
            return 0;
            });
            setdata(sorted);
            setorder("ASC");
        }
        }
     const [value, setValue] = useState('');
     const[dataSource, setDataSource] = useState(MockData);
     const [tableFilter, setTableFilter] = useState();
     const filterData = (e) =>{
        if(e.target.value !=""){
          setValue(e.target.value);
          const filterTable =dataSource.filter(o=>Object.keys(o).some(k=>
            stringify(o[k]).toLowerCase().includes(e.target.value.toLowerCase()))) ;
            setTableFilter([...filterTable]);
            setDataSource([...dataSource]);
        }else{
            setValue(e.target.value)
        }
     }
    
     return(
        
        <div className=' flex  h-screen'>
            
             <div className='mt-20 w-full flex flex-col order-1'> 
                    <div className='flex flex-row ml-9'>
                    <div className="flex p-1 md:px-4 py-2 ">
                                <div className="relative w-64">
                                                <select id="years" class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
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
                                <div className="relative w-64">
                                                            <select id="months" class="bg-gray-50 borde  text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
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

                            {/* <div className='flex order-3'>
                                        <div className='m-6 justify-center'>
                                        <form>   
                                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                                            <div className="relative w-[1100px]">
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-black dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                            </div>
                                            <input type="search" value={value} id="default-search" className="block p-4 pl-10   w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-black  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required 
                                            onChange={filterData}/>
                                
                                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5  bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-500 dark:hover:bg-black ">Search</button>
                                            </div>
                                        </form>

                                        </div >
                            
                            </div > */}
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
                                    placeholder="Search "
                                    type="text"
                                    name="search"
                                    />
                                </label>
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
                User ID
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Service Provider
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Date of Payment
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Payment Status
              </th>
            </tr>
                                    

                                </thead>
                                <tbody className="">
            
                                
                                    
                                
                                    {dataSource.map((d)=>{
                                    
                                        return (
                                    
                                            <tr key={d.userid} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.userid}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.service_provider}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.started_date}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{d.status}</td>
                                            
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

     )

}





// import { stringify } from 'postcss';
// import React,{Component} from 'react';
// import { useState } from 'react';
// import MockData from './payments.json'


// export default function SortTable(){
//      const [data, setdata] = useState(MockData);
//      const [order,setorder] = useState("ASC");
//      const sorting = (col) =>{
//         if(order =="ASC"){
//             const sorted = [...data].sort((a,b)=>
//                 a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
//             );
//             setdata(sorted);
//             setorder("DSC");
//         }
//         if(order =="DSC"){
//             const sorted = [...data].sort((a,b)=>
//                 a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
//             );
//             setdata(sorted);
//             setorder("ASC");
//         }
//      }
//      const sortnum = (col) =>{
//         if(order =="ASC"){
//             const sorted = [...data].sort((a,b)=>
//             {if(a[col]>b[col]) return 1;
//             if(a[col]<b[col]) return -1;
//             return 0;
//             });
//             setdata(sorted);
//             setorder("DSC");
//         }
//         if(order =="DSC"){
//             const sorted = [...data].sort((a,b)=>
//             {if(a[col]<b[col]) return 1;
//             if(a[col]>b[col]) return -1;
//             return 0;
//             });
//             setdata(sorted);
//             setorder("ASC");
//         }
//         }
//      const [value, setValue] = useState('');
//      const[dataSource, setDataSource] = useState(MockData);
//      const [tableFilter, setTableFilter] = useState();
//      const filterData = (e) =>{
//         if(e.target.value !=""){
//           setValue(e.target.value);
//           const filterTable =dataSource.filter(o=>Object.keys(o).some(k=>
//             stringify(o[k]).toLowerCase().includes(e.target.value.toLowerCase()))) ;
//             setTableFilter([...filterTable]);
//             setDataSource([...dataSource]);
//         }else{
//             setValue(e.target.value)
//         }
//      }
    
//      return(
        
//         <div className=' flex  h-screen'>
            
//              <div className='mt-20'>
                
//                 <div className='m-6'>
//                 <form>   
//                   <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
//                     <div className="relative">
//                       <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//                         <svg aria-hidden="true" className="w-5 h-5 text-black dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
//                       </div>
//                       <input type="search" value={value} id="default-search" className="block p-4 pl-10   w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-black  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required 
//                       onChange={filterData}/>
        
//                      <button type="submit" className="text-white absolute right-2.5 bottom-2.5  bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-500 dark:hover:bg-black ">Search</button>
//                     </div>
//                 </form>

//                 </div >
//                 <table className="shadow-2xl border-2 w-screen">
//                    <thead className='bg-slate-400 cursor-pointer'>
//                      <th onClick={()=>sortnum("event_id")}>Event id</th>
//                      <th onClick={()=>sorting("service_provider")}>Service provider</th>
//                      <th onClick={()=>sorting("customer_name")}>Customer name</th>
//                      <th onClick={()=>sortnum("started_date")}>Started date</th>
//                      <th onClick={()=>sortnum("ended_date")}>Ended date</th>
//                      <th onClick={()=>sorting("ispaid")}>Ispaid</th>

//                    </thead>
//                    <tbody className='text-center'>
//                     {value.length > 0 ? dataSource.map((d)=>{
                    
//                     return (
                    
//                         <tr key={d.event_id} className='cursor-pointer duration-300 hover:bg-cyan-500 hover:scale-105 h-auto even:bg-slate-200 hover:text-white'>
//                             <td>{d.event_id}</td>
//                             <td>{d.service_provider}</td>
//                             <td>{d.customer_name}</td>
//                             <td>{d.started_date}</td>
//                             <td>{d.ended_date}</td>
//                             <td>{d.ispaid}</td>
//                         </tr>
                    
//                      )

                    
//                     }
//                     )
//                     :
//                     dataSource.map((d)=>{
                    
//                         return (
                     
//                             <tr key={d.event_id} className='cursor-pointer duration-300 hover:bg-cyan-500 hover:scale-105 h-auto even:bg-slate-200 hover:text-white'>
//                                 <td>{d.event_id}</td>
//                                 <td>{d.service_provider}</td>
//                                 <td>{d.customer_name}</td>
//                                 <td>{d.started_date}</td>
//                                 <td>{d.ended_date}</td>
//                                 <td>{d.ispaid}</td>
//                             </tr>
                        
//                          )
    
                        
//                         }
//                         )

//                 }
//                    </tbody>


//                 </table>









//              </div>
//         </div>

//      )

// }





