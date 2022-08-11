import React,{useState} from 'react'

function BookingsCustomer() {
    const [past,setPast]=useState(false);
    const [present,setPresent]=useState(true);

    
    const handlePast=()=>{
        if(!past){
            setPast(!past)
        }
        if(present){
            setPresent(!present)
        }
    }
    const handlePresent=()=>{
        if(!present){
            setPresent(!present)
        }
        if(past){
            setPast(!past)
        }
    }
    const presentData=(
        <table className="w-full mt-2 md:w-[80%] md:mx-[10%] lg:w-[60%] lg:mx-[20%] text-[10px] md:text-xs text-left">
            
        <thead className="text-white font-medium uppercase bg-black">
            <tr>
            <th className=" py-2  text-center w-[10%]">
                    NO
                </th>
                <th className="py-2 text-center w-[25%]">
                    Category
                </th>
                <th className="py-2 text-center w-[15%]">
                   Date
                </th>
                <th className="py-2 text-center w-[30%]">
                   Service Provider
                </th>
                <th className="py-2 text-center w-[20%]">
                    Status
                </th>
                
            </tr>
        </thead>
        <tbody className="bg-gray-200">
            <tr class="border-b ">
                <td className=" py-2 font-medium text-gray-900 text-center">
                    0023
                </td>
                <td className="py-2 text-center font-medium uppercase">
                Kalindu Studio
                </td>
                <td className="py-2 text-center font-medium uppercase">
                Photography
                </td>
                <td className="py-2 text-center font-medium uppercase">
                Active
                </td>
                <td className="py-2 text-center">
                <p class="font-medium text-blue-600 hover:underline cursor-pointer">View</p>
                </td>
            </tr>
            
        </tbody>
    </table>
    )

    const pastData=(
        <table className="w-full mt-2 md:w-[80%] md:mx-[10%] lg:w-[60%] lg:mx-[20%] text-[10px] md:text-xs text-left">
            
        <thead className="text-white font-medium uppercase bg-black">
            <tr>
                <th className=" py-2  text-center w-[10%]">
                    NO
                </th>
                <th className="py-2 text-center w-[15%]">
                    Category
                </th>
                <th className="py-2 text-center w-[15%]">
                   Date
                </th>
                <th className="py-2 text-center w-[30%]">
                   Service Provider
                </th>
                <th className="py-2 text-center w-[15%]">
                    Status
                </th>
                <th className="py-2 text-center w-[15%]">
                    Rating
                </th>
            </tr>
        </thead>
        <tbody className="bg-gray-200">
            <tr class="border-b ">
                <td className=" py-2 font-medium text-gray-900 text-center">
                    0023
                </td>
                <td className="py-2 text-center font-medium uppercase">
                Kalindu Studio
                </td>
                <td className="py-2 text-center">
                <p class="font-medium text-blue-600 hover:underline cursor-pointer" >View</p>
                </td>
                <td className="py-2 text-center">
                <p class="font-medium text-blue-600 hover:underline cursor-pointer">Accept</p>
                </td>
                <td className="py-2 text-center">
                <p class="font-medium text-blue-600 hover:underline cursor-pointer">Reject</p>
                </td>
                <td className="py-2 text-center">
                <p class="font-medium text-blue-600 hover:underline cursor-pointer">Reject</p>
                </td>
            </tr>        
            
        </tbody>
    </table>
    )
  return (
    <div className=" relative p-5 w-full mt-14 md:mt-0 mb-2 h-full">
        {/*Start of the insights */}
        <div className="p-2 shadow-xl mb-10 grid grid-cols-4">
            <div className=" bg-slate-100 p-2 col-span-2 md:col-start-2 md:col-span-1 text-center md:h-10 shadow-inner mx-2 rounded-xl">
                <p className="text-sm md:text-base font-bold">Active - 28</p>
            </div>
            <div className=" bg-slate-100 p-2 col-span-2 md:col-start-3 md:col-span-1 text-center md:h-10 shadow-inner mx-2 rounded-xl">
                <p className="text-sm md:text-base font-bold">Removed - 28</p>
            </div>

        </div>
        {/*end of insights */}
        <div className="flex p-1 md:px-4 py-2 ">
            <div className="relative w-full">
                <input type="text" className="p-2 w-64 md:w-80 md:ml-[20%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search services" />
            </div>
        </div>
        {/*tabs at the top of table */}
        <div className="w-full mt-2 md:w-[80%] md:mx-[10%] lg:w-[60%] lg:mx-[20%] text-[10px] md:text-xs">
            <ul class="flex ">
                <li className={past? "mr-4 inline-block border-b-2 border-cyan-500 p-1 cursor-pointer text-cyan-500 uppercase text-lg ":"mr-4 inline-block p-1 border-b-2 hover:text-cyan-500 hover:border-cyan-500 cursor-pointer uppercase text-lg"} onClick={handlePast}>PAST
                </li>
                <li className={present? "mr-2 inline-block border-b-2 border-cyan-500 p-1 cursor-pointer text-cyan-500 uppercase text-lg ":"mr-2 inline-block p-1 border-b-2 hover:text-cyan-500 hover:border-cyan-500 cursor-pointer uppercase text-lg"} onClick={handlePresent}>PRESENT
                </li>
            </ul>
        </div>
        {/*end of tabs */}
        {past? pastData:presentData}
        

        
    </div>
  )
}

export default BookingsCustomer