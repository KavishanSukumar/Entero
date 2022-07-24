import React,{useState} from 'react';
import {NavLink,Link} from 'react-router-dom';
import { RiFunctionLine,RiArrowDropDownLine} from 'react-icons/ri';
import {BsFillCalendarEventFill,BsFillChatRightTextFill} from 'react-icons/bs';

{/*The sidebar leading to the pages of admins functionalities */}
function AdminSidebar() {

    const [adminEvent,setAdminEvent]=useState(false);

    const handleAdminEvent=()=>{
        setAdminEvent(!adminEvent);
    }
  return (
    <div className=" min-h-screen  top-18  left-0 py-4 px-3 bg-gray-800 md:min-w-[26%] lg:min-w-[22%] xl:min-w-[18%] hidden md:block ">
    {/*The link to the pages  */}
    
    <ul className="text-lg">
         <li className="relative flex justify-start text-white p-3 mb-2 rounded-lg hover:bg-gray-700 " onClick={handleAdminEvent}>
                    <RiFunctionLine className="w-6 h-6 text-gray-500"/>
                    <span className="ml-3">Messages</span>
                    <RiArrowDropDownLine className="w-6 h-6 text-gray-500 ml-8 absolute right-0"/>
               
                
                
            
        </li>
        <ul  className={adminEvent? "py-1 pl-4":"hidden"}>
                  <li><NavLink to="/adminpage" className={({isActive})=>isActive? "flex items-center p-2 pl-8 w-full text-base font-normal text-white rounded-lg transition duration-75 bg-gray-700":"flex items-center p-2 pl-8 w-full text-base font-normal text-white rounded-lg transition duration-75 hover:bg-gray-700"}>New messages</NavLink>
                  </li>
                 
                  
        </ul>
        
    </ul>
     <ul className="text-lg">
        <li>
            <NavLink to="/adminevents" className={({isActive})=>isActive? "flex text-white p-3 mb-2 rounded-lg bg-gray-700":"flex mb-2 text-white p-3 rounded-lg hover:bg-gray-700"}>
                <BsFillCalendarEventFill className="w-6 h-6 text-gray-500" />
               <span className="ml-3">Events</span>
            </NavLink>
        </li>

        <li>
            <NavLink to="/" className={({isActive})=>isActive? "flex text-white p-3 rounded-lg bg-gray-700":"flex text-white p-3 rounded-lg hover:bg-gray-700"}>
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
               <span className="ml-3">Chat</span>
               <span className="inline-flex p-3 items-center justify-center ml-1 w-3 h-3 text-white bg-blue-600 rounded-full">15</span>
            </NavLink>
        </li>
        </ul> 
    </div>
    
  
      
    
  )
}

export default AdminSidebar