import { stringify } from 'postcss';
import React,{Component} from 'react';
import { useState } from 'react';
import MockData from './payments.json'


export default function SortTable(){
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
            
             <div className='mt-20'>
                
                <div className='m-6'>
                <form>   
                  <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-black dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>
                      <input type="search" value={value} id="default-search" className="block p-4 pl-10   w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-black  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required 
                      onChange={filterData}/>
        
                     <button type="submit" className="text-white absolute right-2.5 bottom-2.5  bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-500 dark:hover:bg-black ">Search</button>
                    </div>
                </form>

                </div >
                <table className="shadow-2xl border-2 w-screen">
                   <thead className='bg-slate-400 cursor-pointer'>
                     <th onClick={()=>sortnum("event_id")}>Event id</th>
                     <th onClick={()=>sorting("service_provider")}>Service provider</th>
                     <th onClick={()=>sorting("customer_name")}>Customer name</th>
                     <th onClick={()=>sortnum("started_date")}>Started date</th>
                     <th onClick={()=>sortnum("ended_date")}>Ended date</th>
                     <th onClick={()=>sorting("ispaid")}>Ispaid</th>

                   </thead>
                   <tbody className='text-center'>
                    {value.length > 0 ? dataSource.map((d)=>{
                    
                    return (
                    
                        <tr key={d.event_id} className='cursor-pointer duration-300 hover:bg-cyan-500 hover:scale-105 h-auto even:bg-slate-200 hover:text-white'>
                            <td>{d.event_id}</td>
                            <td>{d.service_provider}</td>
                            <td>{d.customer_name}</td>
                            <td>{d.started_date}</td>
                            <td>{d.ended_date}</td>
                            <td>{d.ispaid}</td>
                        </tr>
                    
                     )

                    
                    }
                    )
                    :
                    dataSource.map((d)=>{
                    
                        return (
                     
                            <tr key={d.event_id} className='cursor-pointer duration-300 hover:bg-cyan-500 hover:scale-105 h-auto even:bg-slate-200 hover:text-white'>
                                <td>{d.event_id}</td>
                                <td>{d.service_provider}</td>
                                <td>{d.customer_name}</td>
                                <td>{d.started_date}</td>
                                <td>{d.ended_date}</td>
                                <td>{d.ispaid}</td>
                            </tr>
                        
                         )
    
                        
                        }
                        )

                }
                   </tbody>


                </table>









             </div>
        </div>

     )

}
