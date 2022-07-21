import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import { RiFunctionLine} from 'react-icons/ri';
import {BsFillCalendarEventFill,BsFillChatRightTextFill} from 'react-icons/bs';

{/*The sidebar leading to the pages of admins functionalities */}
function AdminSidebar() {
  return (
    <div className=" min-h-screen  top-18  left-0 py-4 px-3 bg-gray-800 min-w-fit hidden md:block ">
    {/*The link to the pages  */}
    <ul className="y-4">
         <li>
            <NavLink to="/" className={({isActive})=>isActive? "flex text-white p-3 mb-2 rounded-full bg-gray-700":"flex mb-2 text-white p-3 rounded-full hover:bg-gray-700"}>
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
                <span className="ml-3">Dashboard</span>
            </NavLink>
        </li>

        <li>
            <NavLink to="/adminpage" className={({isActive})=>isActive? "flex text-white p-3 mb-2 rounded-full bg-gray-700":"flex text-white mb-2 p-3 rounded-full hover:bg-gray-700"}>
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
                <span className="ml-3">Messages</span>
                
            </NavLink>
        </li>


        <li>
            <NavLink to="/adminevents" className={({isActive})=>isActive? "flex text-white p-3 mb-2 rounded-full bg-gray-700":"flex mb-2 text-white p-3 rounded-full hover:bg-gray-700"}>
                <BsFillCalendarEventFill className="w-6 h-6 text-gray-500" />
               <span className="ml-3">Events</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/" className={({isActive})=>isActive? "flex text-white p-3 rounded-full bg-gray-700":"flex text-white p-3 rounded-full hover:bg-gray-700"}>
                <BsFillChatRightTextFill className="w-6 h-6 text-gray-500"/>
               <span className="ml-3">Messages</span>
               <span className="inline-flex justify-center items-center p-3 ml-28 w-3 h-3 text-white bg-blue-600 rounded-full">15</span>
            

            </NavLink>
        </li>
        <li>
            <NavLink to="/" className={({isActive})=>isActive? "flex text-white p-3 rounded-full bg-gray-700":"flex text-white p-3 rounded-full hover:bg-gray-700"}>
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
               <span className="ml-3">Dashboard</span>
            </NavLink>
        </li>
        </ul>
    </div>
      
    
  )
}

export default AdminSidebar