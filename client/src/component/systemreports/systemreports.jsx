import React, { Component } from 'react';

import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';

class SystemReports extends Component {
    state = {  } 
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: ['Jan','Feb','Mar','Aprail','May','June','July','Aug','Sep','Oct','Nov','Dec']
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
      }
    render() { 
        return (
        <div className='flex h-screen'>
           <div className='flex bg-white-300  h-screen  flex-wrap gap-8 order-1 w-60  mt-20 fixed '>
           <nav className="flex  space-y-4 flex-col ml-5 text-2xl w-52 text-center  border-r-4 border-cyan-800">
                  {[
                        ['Income', '/income'],
                        ['Events', '/events'],
                        ['Users', '/users'],
                        
                     ].map(([title, url]) => (
                        <a href={url} className="rounded-lg px-3 py-2 text-black  hover:bg-cyan-500   hover:text-white font-bold">{title}</a>
                     ))}
            </nav>

           </div>
           <div className='flex flex-col'>

           
                <div className='flex flex-col gap-8 order-2 mt-20 ml-72 w-full' id='income'>
                      
                        <div className='flex flex-row order-1 mt-3 mr-3 ml-3'>
                                    <div className='flex w-40 font-bold'>
                                            <select id="years" class="bg-gray-50 borde border-black text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5
                                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 border-2">
                                            <option selected>Choose a Year</option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                          
                                            </select>
                                    </div>
                                      
                                    <div className='mt-2 ml-auto'>
                                    <p className='font-bold  text-xl '>Total Income : Rs 20000.00</p>
                                    </div>

                        </div>

                        <div  className='flex order-2'>
                                <div className="app ">
                                    <div className="row">
                                        <div className="mixed-chart ml-52">
                                            <Chart
                                            options={this.state.options}
                                            series={this.state.series}
                                            type="line"
                                            width="700"
                                            height="500"
                                          
                                            />
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>
              

          </div>




        </div>



        );
    }
}
 
export default SystemReports;
