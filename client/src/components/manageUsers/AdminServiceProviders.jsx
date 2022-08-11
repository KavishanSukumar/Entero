import React,{useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Shakir from '../../Shakir.jpg';

function AdminServiceProviders() {
    const [popup,setPopup]=useState(false);
    const [popupS,setPopupS]=useState(false);
    const [service,setService]=useState(false);
    const [serviceRegister,setServiceRegister]=useState(true);

    const handlePopup=()=>{
        setPopup(!popup)
    }
    const handlePopupS=()=>{
        setPopupS(!popupS)
    }
    const handleService=()=>{
        if(!service){
            setService(!service)
        }
        if(serviceRegister){
            setServiceRegister(!serviceRegister)
        }
    }
    const handleServiceRegister=()=>{
        if(!serviceRegister){
            setServiceRegister(!serviceRegister)
        }
        if(service){
            setService(!service)
        }
    }
    const serviceData=(
        <table className="w-full mt-2 md:w-[80%] md:mx-[10%] lg:w-[60%] lg:mx-[20%] text-[10px] md:text-xs text-left">
            
        <thead className="text-white font-medium uppercase bg-black">
            <tr>
                <th className=" py-2 text-center w-[10%]">
                    ID
                </th>
                <th className="py-2 text-center w-[40%]">
                    Name
                </th>
                <th className="py-2 text-center w-[20%]">
                    Category
                </th>
                <th className="py-2 text-center w-[20%]">
                    Status
                </th>
                <th className="py-2 w-[10%]">
                    
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
                <p class="font-medium text-blue-600 hover:underline cursor-pointer" onClick={handlePopup}>View</p>
                </td>
            </tr>
            
        </tbody>
    </table>
    )

    const serviceRegisterData=(
        <table className="w-full mt-2 md:w-[80%] md:mx-[10%] lg:w-[60%] lg:mx-[20%] text-[10px] md:text-xs text-left">
            
        <thead className="text-white font-medium uppercase bg-black">
            <tr>
                <th className=" py-2  text-center w-[10%]">
                    ID
                </th>
                <th className="py-2 text-center w-[35%]">
                    Name
                </th>
                <th className="py-2 text-center w-[15%]">
                   
                </th>
                <th className="py-2 text-center w-[15%]">
                   
                </th>
                <th className="py-2 text-center w-[15%]">
                    
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
                <p class="font-medium text-blue-600 hover:underline cursor-pointer" onClick={handlePopupS}>View</p>
                </td>
                <td className="py-2 text-center">
                <p class="font-medium text-blue-600 hover:underline cursor-pointer">Accept</p>
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
                <p className="text-base font-bold">Active - 28</p>
            </div>
            <div className=" bg-slate-100 p-2 col-span-2 md:col-start-3 md:col-span-1 text-center md:h-10 shadow-inner mx-2 rounded-xl">
                <p className="text-base font-bold">Removed - 28</p>
            </div>

        </div>
        {/*end of insights */}
        <div className={serviceRegister?"hidden":"flex p-1 md:px-4 py-2 "}>
            <div className="relative w-full">
                <input type="text" className="p-2 w-64 md:w-80 md:ml-[20%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search services" />
            </div>
        </div>
        {/*tabs at the top of table */}
        <div className="w-full mt-2 md:w-[80%] md:mx-[10%] lg:w-[60%] lg:mx-[20%] text-[10px] md:text-xs">
            <ul class="flex ">
                <li className={service? "mr-4 inline-block border-b-2 border-cyan-500 p-1 cursor-pointer text-cyan-500 uppercase text-lg ":"mr-4 inline-block p-1 border-b-2 hover:text-cyan-500 hover:border-cyan-500 cursor-pointer uppercase text-lg"} onClick={handleService}>Service
                </li>
                <li className={serviceRegister? "mr-2 inline-block border-b-2 border-cyan-500 p-1 cursor-pointer text-cyan-500 uppercase text-lg ":"mr-2 inline-block p-1 border-b-2 hover:text-cyan-500 hover:border-cyan-500 cursor-pointer uppercase text-lg"} onClick={handleServiceRegister}>Service registrations
                </li>
            </ul>
        </div>
        {/*end of tabs */}
        {service? serviceData:serviceRegisterData}
        

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
                        <p className="md:ml-8 px-1 text-left"><b>Name:</b> Perera and sons</p>
                        <p className="md:ml-8 px-1 text-left"><b>BR:</b> 867564980</p>
                        <p className="md:ml-8 px-1 text-left"><b>Address:</b> 45,Kings Cross,Colombo 02</p>
                        <div className="mx-[20%]">
                            <button className="mt-4 w-full md:ml-8 text-center p-1 text-white bg-cyan-500 hover:bg-cyan-400">Visit Portfolio</button>
                        </div>
                        
                    </div>
                
                </div>
                
                
            </div>
        </div>
        <div className={popupS? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0":"hidden"} >
            <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[70%] mx-[15%] p-2">
                <div className="w-full inline-flex justify-end items-end">
                    <AiOutlineClose className="w-6 h-6 cursor-pointer" onClick={handlePopupS}/>
                </div>

                    <div className=" w-full">
                        <p className="text-center text-base font-medium mb-2 border-b-2">Details</p>
                        <p className="md:ml-8 px-1 text-left"><b>Name:</b> Kalindu Photography</p>
                        <p className="md:ml-8 px-1 text-left"><b>BR:</b> 867564980</p>
                        <p className="md:ml-8 px-1 text-left"><b>Address:</b> 32,Ruhuna Road, Colombo 02</p>
                    </div>
                    <div className="mx-[20%] bg-red-600">
                        <p className="text-center">Document comes here</p>
                    </div>
                
                
                
                
            </div>
        </div>

        
    </div>
  )
}

export default AdminServiceProviders