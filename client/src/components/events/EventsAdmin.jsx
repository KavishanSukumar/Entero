import React,{useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'


function EventsAdmin() {
    const[pendingEvent,setPendingEvent]=useState(true);
    const[pastEvent,setPastEvent]=useState(false);
    const[cancelledEvent,setCancelledEvent]=useState(false);
    const [popup,setPopup]=useState(false);

    const handlePopup=()=>{
        setPopup(!popup)
    }
    const handlePastEvent=()=>{
        if(!pastEvent){
            setPastEvent(!pastEvent)
        }
        if(pendingEvent){
            setPendingEvent(!pendingEvent)
        }
        if(cancelledEvent){
            setCancelledEvent(!cancelledEvent)
        }
    }
    const handlePendingEvent=()=>{
        if(pastEvent){
            setPastEvent(!pastEvent)
        }
        if(!pendingEvent){
            setPendingEvent(!pendingEvent)
        }
        if(cancelledEvent){
            setCancelledEvent(!cancelledEvent)
        }
    }
    const handleCancelledEvent=()=>{
        if(pastEvent){
            setPastEvent(!pastEvent)
        }
        if(pendingEvent){
            setPendingEvent(!pendingEvent)
        }
        if(!cancelledEvent){
            setCancelledEvent(!cancelledEvent)
        }
    }

    const pastEventData=(
        <tbody className="bg-gray-200 text-[10px] md:text-xs">
                <tr class="border-b ">
                    <td className=" py-2  font-medium text-gray-900 text-center">
                        0023
                    </td>
                    <td className="py-2 text-center font-medium uppercase">
                    Kavin fernando
                    </td>
                    <td className="py-2 text-center font-medium uppercase">
                    Birthday
                    </td>
                    <td className="py-2 text-center">
                    <p class="font-medium text-blue-600 hover:underline cursor-pointer" onClick={handlePopup}>View</p>
                    </td>
                </tr>
        </tbody>
            
    )
    const pendingEventData=(
        <tbody className="bg-gray-200 text-[10px] md:text-xs">
                <tr class="border-b ">
                    <td className="py-2  font-medium text-gray-900 text-center">
                        0023
                    </td>
                    <td className=" text-center font-medium uppercase">
                    Devin fernando
                    </td>
                    <td className="text-center font-medium uppercase">
                    Birthday
                    </td>
                    <td className="text-center">
                    <p class="font-medium text-blue-600 hover:underline cursor-pointer" onClick={handlePopup}>View</p>
                    </td>
                </tr>
        </tbody>
    )

    const cancelledEventData=(
        <tbody className="bg-gray-200 text-[10px] md:text-xs">
                <tr class="border-b ">
                    <td className=" py-2  font-medium text-gray-900 text-center">
                        0023
                    </td>
                    <td className="py-2 text-center font-medium uppercase">
                    Ridul fernando
                    </td>
                    <td className="py-2 text-center font-medium uppercase">
                    Birthday
                    </td>
                    <td className="py-2 text-center">
                    <p class="font-medium text-blue-600 hover:underline cursor-pointer" onClick={handlePopup}>View</p>
                    </td>
                </tr>
        </tbody>
    )
    
  return (
    <div className=" relative  p-5 w-full mt-14 md:mt-0 mb-2 h-full">
        {/*Start of the insights */}
        <div className="p-2 shadow-xl mb-10 grid grid-cols-3">
            <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl">
                <p className="text-4xl mb-2">28</p>
                <p className="text-sm">Pending Events</p>
            </div>
            <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl">
                <p className="text-4xl mb-2">15</p>
                <p className="text-sm">Past Events</p>
            </div>
            <div className="bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl">
                <p className="text-4xl mb-2 ">6</p>
                <p className="text-sm">Cancelled Events</p>
            </div>

        </div>
        {/*end of insights */}
        <div className="flex p-1 md:px-4 py-2 ">
            <div className="relative">
                <input type="text" className="p-2 w-64 md:w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for events" />
            </div>
        </div>

        <div className={popup? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0":"hidden"} >
            <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[70%] mx-[15%] p-2">
                <div className="w-full inline-flex justify-end items-end">
                    <AiOutlineClose className="w-6 h-6 cursor-pointer" onClick={handlePopup}/>
                </div>
                <div className="w-full mb-4">
                    <p className="text-lg text-center font-medium border-b-2 border-gray-900">#3456 (Pending)</p>
                </div>

                <div className="w-full p-2 shadow-xl mb-10 grid grid-cols-1 lg:grid-cols-3">
                    <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                        <p className="text-center font-medium border-b-2 border-white">Event Info</p>
                        <p className="text-left"><b>Date:</b> 02.09.22</p>
                        <p className="text-left"><b>Type:</b> Birthday</p>
                        <p className="text-left"><b>Venue:</b> Shangrila Hotel Colombo 02</p>
                    </div>
                    <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                        <p className="text-center font-medium border-b-2 border-white">Customer</p>
                        <p className="text-left"><b>ID:</b> 0065</p>
                        <p className="text-left"><b>Name:</b> Kavin Fernando</p>
                        
                    </div>
                    <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                        <p className="text-center font-medium border-b-2 border-white">Services</p>
                        <p className="text-center"><b>Catering</b></p>
                        <p className="text-left"><b>ID:</b> 0876</p>
                        <p className="text-left"><b>Name:</b> Royal Food</p>
                        <p className="text-center"><b>Photography</b></p>
                        <p className="text-left"><b>ID:</b> 9865</p>
                        <p className="text-left"><b>Name:</b> Kalin Studio</p>
                    </div>
                    

                </div>
                
                
            </div>
        </div>

        <table className="w-full mt-2 md:w-[80%] md:mx-[10%] lg:w-[60%] lg:mx-[20%] text-xs md:text:sm">
            <caption>
                <div className="w-full text-sm font-medium text-center text-gray-500 border-b border-gray-600 ">
                    <ul class="flex -mb-px">
                        <li className={pendingEvent? "mr-2 inline-block p-2 hover:text-black cursor-pointer text-green-300":"mr-2 inline-block p-2 hover:text-black cursor-pointer"} onClick={handlePendingEvent}>Pending
                        </li>
                        <li className={pastEvent? "mr-2 inline-block p-2 hover:text-black cursor-pointer text-green-300":"mr-2 inline-block p-2 hover:text-black cursor-pointer"} onClick={handlePastEvent}>Past
                        </li>
                        <li className={cancelledEvent? "mr-2 inline-block p-2 hover:text-black cursor-pointer text-green-300":"mr-2 inline-block p-2 hover:text-black cursor-pointer"} onClick={handleCancelledEvent}>Cancelled
                        </li>
                    </ul>
                </div>
            </caption>
            <thead className="text-xs text-white font-medium uppercase bg-black">
                <tr>
                    <th className=" text-[10px] py-2 text-center w-[20%]">
                        Event ID
                    </th>
                    <th className="text-[10px] py-2 text-center w-[40%]">
                        Customer
                    </th>
                    <th className="text-[10px] py-2 text-center w-[20%]">
                        Type
                    </th>
                    <th className="text-[10px] py-2 text-center w-[10%]">
                        
                    </th>
                </tr>
            </thead>
            {pendingEvent? pendingEventData:""}
            {pastEvent? pastEventData:""}
            {cancelledEvent? cancelledEventData:""}
            
        </table>
    </div>
  )
}

export default EventsAdmin




