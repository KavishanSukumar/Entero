import React from 'react';
import {Link} from 'react-router-dom';
import { RiFunctionLine, RiArrowDropDownLine} from 'react-icons/ri';
import {BsFillChatRightTextFill} from 'react-icons/bs';

function CustomerSidebar() {
  return (
    <div className="min-h-screen overflow-y-auto py-4 px-3 bg-gray-800 w-64 hidden md:block">
      <ul className="y-4 ">
         <li>
            <Link to="/" className="flex text-white p-3 rounded-full hover:bg-gray-700 ">
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
               <span className="ml-3">Dashboard</span>
            </Link>
        </li>

        <li>
            <Link to="/" className="flex text-white p-3 rounded-full hover:bg-gray-700 ">
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
                <span className="ml-3">Dashboard</span>
                <RiArrowDropDownLine className="w-6 h-6 text-gray-500 ml-16"/>
            </Link>
        </li>


        <li>
            <Link to="/" className="flex text-white p-3 rounded-full hover:bg-gray-700 ">
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
               <span className="ml-3">Dashboard</span>
            </Link>
        </li>
        <li>
            <Link to="/" className="flex text-white p-3 rounded-full hover:bg-gray-700 ">
                <BsFillChatRightTextFill className="w-6 h-6 text-gray-500"/>
               <span className="ml-3">Chat</span>
               <span class="inline-flex justify-center items-center p-3 ml-28 w-3 h-3 text-white bg-blue-600 rounded-full">15</span>
            

            </Link>
        </li>
        <li>
            <Link to="/" className="flex text-white p-3 rounded-full hover:bg-gray-700 ">
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
               <span className="ml-3">Dashboard</span>
            </Link>
        </li>
        </ul>
    </div>
  )
}

export default CustomerSidebar