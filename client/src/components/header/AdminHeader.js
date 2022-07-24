import React, { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu , AiFillBell, AiFillHome} from 'react-icons/ai';
import { RiFunctionLine,RiArrowDropDownLine} from 'react-icons/ri';
import {BsFillCalendarEventFill,BsFillChatRightTextFill} from 'react-icons/bs';
import Shakir from '../../Shakir.jpg';

{/* Admin header is created because the menu in responsive layout will change to the admin sidebar,not home,contact us pages */}
function AdminHeader() {

    const [nav, setNav] = useState(false);

        const handleNav = () => {
        setNav(!nav);
        };

        const [adminEvent,setAdminEvent]=useState(false);

        const handleAdminEvent=()=>{
            setAdminEvent(!adminEvent);
        }
  return (
    <div className='flex items-center top-0  h-18 text-black bg-[#d89444] justify-between'>

    {/* After login styles */}
    {/* header logo */}

    <h1 className='text-3xl font-bold text-[#00df9a] px-4'>Logo</h1>

    {/*header links */}
    <ul className='hidden md:flex'>
        <li className='px-10 py-3 hover:text-white hover:bg-orange-300 hover:rounded'><Link to="/">Home</Link></li>
        <li className='px-10 py-3 hover:text-white hover:bg-orange-300 hover:rounded'><Link to="/aboutus">About us</Link></li>
        <li className='px-10 py-3 hover:text-white hover:bg-orange-300 hover:rounded'><Link to="/contactus">Contact Us</Link></li>
    </ul>
    
    {/* After login components*/}
            <div className="md:hidden">
                <NavLink activeClassname="is-active" to="/">
                <AiFillHome size={24} className="text-black hover:text-white"/>
                </NavLink>
                
            </div>
            <div className="p-3">
                <AiFillBell size={24} className="text-black hover:text-white"/>
            </div>
            
                <img src={Shakir} className="w-8 h-8 rounded-full mx-2"/>
            
        

    {/* Responsive component */}
    <div onClick={handleNav} className='flex md:hidden'>
        {nav ? <AiOutlineClose size={30}/> :       
         <AiOutlineMenu size={30} />
         }
    </div>
    
        {/* The links are changed to the admins sidebar and not to the home,about us,contact us links */}
    <div className={nav ? 'fixed left-0 top-12 w-full p-12 min-h-screen overflow-y-auto bg-gray-800 text-white  md:hidden' : ' fixed left-[-100%]'}>
        <ul className=' text-lg'>
            <li className='relative py-2 mb-4 border-b border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg' onClick={handleAdminEvent}>
            
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
                <span className="ml-3">Messages</span>
                <RiArrowDropDownLine className="w-6 h-6 text-gray-500 absolute right-0" />
                
          
            </li>
            <ul  className={adminEvent? "py-3 pl-4":"hidden"}>
                  <li><NavLink to="/adminpage" className={({isActive})=>isActive? "flex items-center p-2 pl-11 w-full text-base font-normal text-white rounded-lg transition duration-75 bg-gray-700":"flex items-center p-2 pl-11 w-full text-base font-normal text-white rounded-lg transition duration-75 hover:bg-gray-700"}>New messages</NavLink>
                  </li>
                  
            </ul>
        </ul>

        <ul className=' text-lg'> 
        <li className='py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg'>
            <NavLink to="/adminevents" className={({isActive})=>isActive? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1":"inline-flex items-center "}>
                <BsFillCalendarEventFill className="w-6 h-6 text-gray-500" />
                <span className="ml-3">Events</span>
            </NavLink>
        </li>
        <li className='py-2 mb-4 border-b border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg'>
        <NavLink to="/" className={({isActive})=>isActive? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1":"inline-flex items-center"}>
                <BsFillChatRightTextFill className="w-6 h-6 text-gray-500"/>
               <span className="ml-3">Chat</span>
               <span className="inline-flex p-3 items-center justify-center ml-1 w-3 h-3 text-white bg-blue-600 rounded-full">15</span>
            

            </NavLink>
        </li>

        </ul> 
    </div>
    
  </div>

  )
}

export default AdminHeader