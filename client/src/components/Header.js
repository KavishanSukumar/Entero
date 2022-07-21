import React, { useState } from 'react';
import {Link,NavLink} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


function Header() {
  
        const [nav, setNav] = useState(false);
        

        const handleNav = () => {
        setNav(!nav);
        };

  return (
  
    
  <div className='sticky top-0 flex items-center h-18 w-screen text-black bg-[#d89444] justify-between '>
    {/* Before login styles  */}

    {/* header logo */}

    <h1 className='text-3xl font-bold text-[#00df9a] px-4'>Logo</h1>

    {/*header links */}
    <ul className='hidden md:flex'>
      <li className='px-10 py-3 hover:text-white hover:bg-orange-300 hover:rounded'><NavLink className={({isActive})=>isActive? "text-white":""} to="/">Home</NavLink></li>
      <li className='px-10 py-3 hover:text-white hover:bg-orange-300 hover:rounded'><NavLink className={({isActive})=>isActive? "text-white":""} to="/aboutus">About us</NavLink></li>
      <li className='px-10 py-3 hover:text-white hover:bg-orange-300 hover:rounded'><NavLink className={({isActive})=>isActive? "text-white":""} to="/contactus">Contact Us</NavLink></li>
    </ul>
    
    
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

    <ul className={nav ? 'fixed left-0 top-9 w-[50%] h-full border-r border-r-gray-900 bg-[#000300]  md:hidden' : ' fixed left-[-100%]'}>

        <li className='p-4 border-b border-gray-600 text-white hover:text-blue-500'><NavLink className={({isActive})=>isActive? "text-blue-500":""} to="/">Home</NavLink></li>
        <li className='p-4 border-b border-gray-600 text-white hover:text-blue-500'><NavLink className={({isActive})=>isActive? "text-blue-500":""} to="/aboutus">About us</NavLink></li>
        <li className='p-4 border-b border-gray-600 text-white hover:text-blue-500'><NavLink className={({isActive})=>isActive? "text-blue-500":""} to="/contactus">Contact Us</NavLink></li>
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




