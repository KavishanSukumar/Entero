import React,{useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Shakir from '../../Shakir.jpg';

function AdminServices() {
    const [popup,setPopup]=useState(false);

    const handlePopup=()=>{
        setPopup(!popup)
    }
  return (
    <div className=" relative p-5 w-full mt-14 md:mt-0 mb-2">
        <div className="flex p-1 md:justify-end md:px-4 py-2 ">
            <div className="relative">
                <input type="text" className="p-2 w-64 md:w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for services" />
            </div>
        </div>

        <div className={popup? "absolute min-w-full min-h-screen z-10 backdrop-blur-sm bg-gray-500/50 top-0  p-4 left-0":"hidden"} >
            <div className="bg-white absolute top-[20%] flex flex-col  w-[70%] mx-[10%] p-2">
                <div className="w-full inline-flex justify-end items-end">
                    <AiOutlineClose className="w-6 h-6 cursor-pointer" onClick={handlePopup}/>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                <div className="flex flex-col  items-center shadow-2xl mb-2 ">
                    {/*The image */}
                    <div className="p-2">
                        <img src={Shakir} className="w-28 h-28 rounded-full shadow-2xl "/>
                    </div>

                    {/*The buttons */}
                    <div className="flex flex-col w-44 p-4">
                        <button className=" border-2   p-1 mb-3 rounded hover:bg-transparent hover:border-black">
                            Remove
                        </button>
                    </div>
                </div>
                <div>
                    Details
                </div>
                </div>
                
                
            </div>
        </div>

        <table className="w-full mt-2 md:w-[80%] md:mx-[10%] lg:w-[60%] lg:mx-[20%] text-sm text-left">
        
        <thead className="text-xs text-white font-medium uppercase bg-black">
            <tr>
                <th className=" py-3 px-6 text-center w-[20%]">
                    ID
                </th>
                <th className="py-3 px-6 text-center w-[50%]">
                    Name
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