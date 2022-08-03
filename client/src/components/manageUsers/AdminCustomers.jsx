import React,{useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Shakir from '../../Shakir.jpg';

function AdminCustomers() {
    const [popup,setPopup]=useState(false);

    const handlePopup=()=>{
        setPopup(!popup)
    }

    return (
    <div className=" relative p-5 w-full mt-14 md:mt-0 mb-2 h-full">
        {/*Start of the insights */}
        <div className="p-2 shadow-xl mb-10 grid grid-cols-4">
            <div className=" bg-slate-100 p-2 col-span-2 md:col-start-2 md:col-span-1 text-center min-h-fit shadow-inner mx-2 rounded-xl">
                <p className="text-4xl mb-2">28</p>
                <p className="text-sm">Active</p>
            </div>
            <div className=" bg-slate-100 p-2 col-span-2 md:col-start-3 md:col-span-1 text-center min-h-fit shadow-inner mx-2 rounded-xl">
                <p className="text-4xl mb-2">28</p>
                <p className="text-sm">Removed</p>
            </div>

        </div>
        {/*end of insights */}
        <div className="flex p-1 md:px-4 py-2 ">
            <div className="relative">
                <input type="text" className="p-2 w-64 md:w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search customers" />
            </div>
        </div>

        

        <div className={popup? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0":"hidden"} >
            <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[70%] mx-[15%] p-2">
                <div className="w-full inline-flex justify-end items-end">
                    <AiOutlineClose className="w-4 h-4 cursor-pointer" onClick={handlePopup}/>
                </div>
                <div className="w-full flex flex-col lg:flex-row">
                    <div className="flex flex-col  items-center shadow-2xl mb-2 ">
                        {/*The image */}
                        <div className="p-2">
                            <img src={Shakir} alt="" className="w-28 h-28 rounded-full shadow-2xl "/>
                        </div>

                        {/*The buttons */}
                        <div className="flex flex-col w-44 p-4">
                            <button className=" border-2   p-1 mb-3 rounded hover:bg-transparent hover:border-black">
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className=" w-full">
                        <p className="text-center text-base font-medium mb-2 border-b-2">Details</p>
                        <p className="md:ml-8 px-1 text-left"><b>Name:</b> Kavin Fernando</p>
                        <p className="md:ml-8 px-1 text-left"><b>NIC:</b> 723456789V</p>
                        <p className="md:ml-8 px-1 text-left"><b>Address:</b> Shangrila Hotel Colombo 02</p>
                        <p className="md:ml-8 px-1 text-left"><b>Email:</b> kavingghyre@gmail.com</p>
                        <p className="md:ml-8 px-1 text-left"><b>Contact:</b> 0778965432</p>
                    </div>
                
                </div>
                
                
            </div>
        </div>
        <table className="w-full mt-2 md:w-[80%] md:mx-[10%] lg:w-[60%] lg:mx-[20%] text-[10px] md:text-xs">
            
        <thead className="text-white font-medium uppercase bg-black">
            <tr>
                <th className=" py-2 text-center w-[10%]">
                    ID
                </th>
                <th className="py-2 text-center w-[40%]">
                    Name
                </th>
                <th className="py-2 text-center w-[20%]">
                    Status
                </th>
                <th className="py-2 w-[30%]">
                    
                </th>
            </tr>
        </thead>
        <tbody className="bg-gray-200">
            <tr class="border-b ">
                <td className=" py-2 font-medium text-gray-900 text-center">
                    0023
                </td>
                <td className="py-2 text-center font-medium uppercase">
                Kavin Fernando
                </td>
                <td className="py-2 font-medium text-gray-900 text-center">Active</td>
                <td className="py-2 text-center">
                <p class="font-medium text-blue-600 hover:underline cursor-pointer" onClick={handlePopup}>View</p>
                </td>
            </tr>
            
        </tbody>
        
    </table>
        

        
    </div>
  )
}

export default AdminCustomers