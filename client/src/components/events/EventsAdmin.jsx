import React,{useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'


function EventsAdmin() {
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
                <p className="text-sm">Pending events</p>
            </div>
            <div className=" bg-slate-100 p-2 col-span-2 md:col-start-3 md:col-span-1 text-center min-h-fit shadow-inner mx-2 rounded-xl">
                <p className="text-4xl mb-2">28</p>
                <p className="text-sm">Past events</p>
            </div>

        </div>
        {/*end of insights */}
        <div className="flex p-1 md:justify-end md:px-4 py-2 ">
            <div className="relative">
                <input type="text" className="p-2 w-64 md:w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for events" />
            </div>
        </div>

        <div className={popup? "absolute min-w-full min-h-full z-0 backdrop-blur-sm bg-gray-500/50 top-0  p-4 left-0":"hidden"} >
            <div className="bg-white absolute top-[5%] flex flex-col  w-[70%] mx-[10%] p-2">
                <div className="w-full inline-flex justify-end items-end">
                    <AiOutlineClose className="w-6 h-6 cursor-pointer" onClick={handlePopup}/>
                </div>
                <div className="w-full mb-4">
                    <p className="text-lg text-center font-medium border-b-2 border-gray-900">#3456 (Pending)</p>
                </div>

                <div className="w-full p-2 shadow-xl mb-10 grid grid-cols-1 lg:grid-cols-2">
                    <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                        <p className="text-center font-medium">Event Info</p>
                        <p className="text-left"><b>Date:</b> 02.09.22</p>
                        <p className="text-left"><b>Type:</b> Birthday</p>
                        <p className="text-left"><b>Customer:</b> Kavin Fernando</p>
                        <p className="text-left"><b>Venue:</b> Shangrila Hotel Colombo 02</p>
                    </div>
                    <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                        <p className="text-center font-medium">Services</p>
                        <p className="text-left"><b>Catering:</b> Royal Fast Food</p>
                        <p className="text-left"><b>Decoration:</b> Lanka Floral</p>
                    </div>
                    

                </div>
                
                
            </div>
        </div>

        <table className="w-full mt-2 md:w-[80%] md:mx-[10%] lg:w-[60%] lg:mx-[20%] text-xs md:text:sm">
        
        <thead className="text-xs text-white font-medium uppercase bg-black">
            <tr>
                <th className=" py-3 text-center w-[10%]">
                    Event ID
                </th>
                <th className="py-3 text-center w-[30%]">
                    Customer
                </th>
                <th className="py-3  text-center w-[20%]">
                    Type
                </th>
                <th className="py-3  text-center w-[20%]">
                    Status
                </th>
                <th className="py-3  text-center w-[20%]">
                    
                </th>
            </tr>
        </thead>
        <tbody className="bg-gray-200">
            <tr class="border-b ">
                <td className=" py-4  font-medium text-gray-900 text-center">
                    0023
                </td>
                <td className="py-4 text-center font-medium uppercase">
                Kavin fernando
                </td>
                <td className="py-4 text-center font-medium uppercase">
                Birthday
                </td>
                <td className="py-4 text-center font-medium uppercase">
                Pending
                </td>
                <td className="py-4 text-center">
                <p class="font-medium text-blue-600 hover:underline cursor-pointer" onClick={handlePopup}>View</p>
                </td>
            </tr>
            
            
            
        </tbody>
    </table>
    </div>
  )
}

export default EventsAdmin




