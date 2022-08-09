import React, { useState } from 'react';
import {Link,NavLink} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';



function Header() {
  
        const [nav, setNav] = useState(false);
        
        const handleNav = () => {
        setNav(!nav);
        };



  return (
 
  <div className='sticky top-0 flex items-center h-14 w-screen text-black bg-white shadow-2xl justify-between '>
    {/* Before login styles  */}

    {/* header logo */}
    
    <h1 className='text-3xl font-bold text-[#00df9a] px-4'>Logo</h1>

    {/*header links */}
    <ul className='hidden md:flex'>
      <li className='px-6 lg:px-8 py-3 hover:text-cyan-500 hover:rounded'><NavLink className={({isActive})=>isActive? "text-cyan-500 hover:text-black":""} to="/">Home</NavLink>          
      </li>
      <li className='px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded'><NavLink className={({isActive})=>isActive? "text-cyan-500 hover:text-black":""} to="/products">Products</NavLink></li>
      <li className='px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded'><NavLink className={({isActive})=>isActive? "text-cyan-500 hover:text-black":""} to="/services">Services</NavLink></li>
      <li className='px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded'><NavLink className={({isActive})=>isActive? "text-cyan-500 hover:text-black":""} to="/aboutus">About</NavLink></li>
      <li className='px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded'><NavLink className={({isActive})=>isActive? "text-cyan-500 hover:text-cyan-500":""} to="/contactus">Contact</NavLink></li>
      
    </ul>
    
    
    
    {/*login components*/}
            <div className="p-3 hidden md:block">
            <Link to="/signin" className='bg-cyan-500 text-white hover:bg-blue-400 px-5 py-2 rounded mx-2'>
            
              Sign in
            </Link>
                
              
            </div>
            
        

    {/* Responsive component */}
    <div onClick={handleNav} className='flex md:hidden'>
        {nav ? <AiOutlineClose size={30}/> :       
         <AiOutlineMenu size={30} />
         }
    </div>


    <div className={nav ? 'fixed left-0 top-14 w-full p-2 min-h-full overflow-y-auto bg-gray-800 text-white  md:hidden' : ' fixed left-[-100%]'}>
        

        <ul className=' text-sm'>
        <li className='py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg'>
            <NavLink to="/" className={({isActive})=>isActive? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1":"inline-flex items-center "}>
                <span className="ml-3">Home</span>
            </NavLink>
        </li> 
        <li className='py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg'>
            <NavLink to="/adminusercustomer" className={({isActive})=>isActive? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1":"inline-flex items-center "}>
                <span className="ml-3">Events</span>
            </NavLink>
        </li>
        <li className='py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg'>
            <NavLink to="/adminuserservice" className={({isActive})=>isActive? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1":"inline-flex items-center "}>
                <span className="ml-3">Services</span>
            </NavLink>
        </li>
        <li className='py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg'>
            <NavLink to="/admindashboard" className={({isActive})=>isActive? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1":"inline-flex items-center "}>
                <span className="ml-3">About us</span>
            </NavLink>
        </li>
        <li className='py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg'>
            <NavLink to="/adminevents" className={({isActive})=>isActive? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1":"inline-flex items-center "}>
                <span className="ml-3">Contact us</span>
            </NavLink>
        </li>

        <li className='p-4'>
            <Link to="/signin" className='bg-blue-500 text-white hover:bg-blue-400 px-5 py-2 rounded'>
            
                   Sign in
            </Link>
        </li>
        
        
        

        </ul> 
    </div>
    
  </div>
  
);
    
}

export default Header;




