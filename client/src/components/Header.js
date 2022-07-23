import React, { useState } from 'react';
import {Link,NavLink} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


function Header() {
  
        const [nav, setNav] = useState(false);
        
        const handleNav = () => {
        setNav(!nav);
        };

        const[dropEvent,setDropEvent]=useState(false);

        const handleDropEvent=()=>{
          setDropEvent(!dropEvent)
        }

        const[dropService,setDropService]=useState(false);

        const handleDropService=()=>{
          setDropService(!dropService)
        }

        const dropdownEvent=(
          <div className="hidden md:block absolute top-12 md:left-[24%] lg:left-[36%] w-44 bg-white rounded divide-y divide-gray-100 shadow ">
            <ul class="py-1 text-sm text-gray-700" >
              <li className="block py-2 px-4 hover:bg-gray-100">
              Event 1
              </li>
              <li className="block py-2 px-4 hover:bg-gray-100">
              Event 2
              </li>
            </ul>
    
          </div>
      //     
        );

        const dropdownService=(
          <div className="hidden md:block absolute top-12 md:left-[36%] lg:left-[44%] w-44 bg-white rounded divide-y divide-gray-100 shadow ">
            <ul class="py-1 text-sm text-gray-700" >
              <li className="block py-2 px-4 hover:bg-gray-100">
              Service 1
              </li>
              <li className="block py-2 px-4 hover:bg-gray-100">
              Service 2
              </li>
            </ul>
    
          </div>
      //     
        );

  return (
  
    
  <div className='sticky top-0 flex items-center h-18 w-screen text-black bg-[#d89444] justify-between '>
    {/* Before login styles  */}

    {/* header logo */}

    <h1 className='text-3xl font-bold text-[#00df9a] px-4'>Logo</h1>

    {/*header links */}
    <ul className='hidden md:flex'>
      <li className='px-6 lg:px-8 py-3 hover:text-white hover:bg-orange-300 hover:rounded'><NavLink className={({isActive})=>isActive? "text-white":""} to="/">Home</NavLink>          
      </li>
      <li className='px-6 lg:px-8 py-3 hover:text-white hover:bg-orange-300 hover:rounded'><NavLink onMouseEnter={handleDropEvent} className={({isActive})=>isActive? "text-white":""} to="/events">Events</NavLink></li>
      <li className='px-6 lg:px-8 py-3 hover:text-white hover:bg-orange-300 hover:rounded'><NavLink className={({isActive})=>isActive? "text-white":""} onMouseDown={handleDropService}  to="/services">Services</NavLink></li>
      <li className='px-6 lg:px-8 py-3 hover:text-white hover:bg-orange-300 hover:rounded'><NavLink className={({isActive})=>isActive? "text-white":""} to="/aboutus">About us</NavLink></li>
      <li className='px-6 lg:px-8 py-3 hover:text-white hover:bg-orange-300 hover:rounded'><NavLink className={({isActive})=>isActive? "text-white":""} to="/contactus">Contact Us</NavLink></li>
      
    </ul>
    {dropEvent? dropdownEvent:""}
    {dropService? dropdownService:""}
    
    
    {/*login components*/}
            <div className="p-3 hidden md:block">
            <Link to="/adminpage" className='bg-blue-500 text-white hover:bg-blue-400 px-5 py-2 rounded mx-2'>
            
              Sign in
            </Link>
                
              
            </div>
            
        

    {/* Responsive component */}
    <div onClick={handleNav} className='flex md:hidden'>
        {nav ? <AiOutlineClose size={30}/> :       
         <AiOutlineMenu size={30} />
         }
    </div>

    <ul className={nav ? 'fixed left-0 top-9 w-[75%] p-8 h-full border-r border-r-gray-900 bg-[#000300]  md:hidden' : ' fixed left-[-100%]'}>

        <li className='p-4 border-b border-gray-600 text-white hover:text-blue-500'><NavLink className={({isActive})=>isActive? "text-blue-500":""} to="/">Home</NavLink></li>
        <li className='p-4 border-b border-gray-600 text-white hover:text-blue-500'><NavLink className={({isActive})=>isActive? "text-blue-500":""} to="/">Events</NavLink></li>
        <li className='p-4 border-b border-gray-600 text-white hover:text-blue-500'><NavLink className={({isActive})=>isActive? "text-blue-500":""} to="/aboutus">Services</NavLink></li>
        <li className='p-4 border-b border-gray-600 text-white hover:text-blue-500'><NavLink className={({isActive})=>isActive? "text-blue-500":""} to="/aboutus">About us</NavLink></li>
        <li className='p-4 border-b mb-2 border-gray-600 text-white hover:text-blue-500'><NavLink className={({isActive})=>isActive? "text-blue-500":""} to="/contactus">Contact Us</NavLink></li>
        <li className='p-4'>
            <Link to="/adminpage" className='bg-blue-500 text-white hover:bg-blue-400 px-5 py-2 rounded'>
            
                   Sign in
            </Link>
        </li>
        
    </ul>
    
  </div>
  
);
    
}

export default Header;




