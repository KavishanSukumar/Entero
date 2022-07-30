import React,{useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Shakir from '../../Shakir.jpg';

function AdminServices() {
    const [popup,setPopup]=useState(false);

    const handlePopup=()=>{
        setPopup(!popup)
    }
  return (
    <div className=" relative p-5 w-full mt-14 md:mt-0 mb-2 min-h-screen">
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
        <div className="flex p-1 md:justify-end md:px-4 py-2 ">
            <div className="relative">
                <input type="text" className="p-2 w-64 md:w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for services" />
            </div>
        </div>

        <div className={popup? "absolute min-w-full min-h-full z-10 backdrop-blur-sm bg-gray-500/50 top-0  p-4 left-0":"hidden"} >
            <div className="bg-white absolute top-[20%] flex flex-col  w-[70%] mx-[10%] p-2">
                <div className="w-full inline-flex justify-end items-end">
                    <AiOutlineClose className="w-6 h-6 cursor-pointer" onClick={handlePopup}/>
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
                        <p className="px-1 text-left"><b>Name:</b> Perera and sons</p>
                        <p className="px-1 text-left"><b>BR:</b> 867564980</p>
                        <p className="px-1 text-left"><b>Address:</b> Shangrila Hotel Colombo 02</p>
                    </div>
                
                </div>
                
                
            </div>
        </div>

        <table className="w-full mt-2 md:w-[80%] md:mx-[10%] lg:w-[60%] lg:mx-[20%] text-xs md:text:sm text-left">
        
        <thead className="text-xs text-white font-medium uppercase bg-black">
            <tr>
                <th className=" py-3 px-6 text-center w-[10%]">
                    ID
                </th>
                <th className="py-3 px-6 text-center w-[40%]">
                    Name
                </th>
                <th className="py-3 px-6 text-center w-[20%]">
                    Status
                </th>
                <th className="py-3 px-6 w-[30%]">
                    
                </th>
            </tr>
        </thead>
        <tbody className="bg-gray-200">
            <tr class="border-b ">
                <td className=" py-4 px-6 font-medium text-gray-900 text-center">
                    0023
                </td>
                <td className="py-4 px-6 text-center font-medium uppercase">
                Perera and sons
                </td>
                <td className="py-4 px-6 text-center font-medium uppercase">
                Active
                </td>
                <td className="py-4 px-6 text-center">
                <p class="font-medium text-blue-600 hover:underline cursor-pointer" onClick={handlePopup}>Edit</p>
                </td>
            </tr>
            
        </tbody>
    </table>
    </div>
  )
}

export default AdminServices