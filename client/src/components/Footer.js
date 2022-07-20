import React from 'react';
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';
  import {ImLocation} from 'react-icons/im';
  import {BsFillTelephoneFill} from 'react-icons/bs';

function Footer() {
  return (
    <div className=' py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#465360]'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LOGO</h1>
        <p className='py-4'>Entero is a event planning site which is dedicated to making any event you can imagine a reality. Make your event memorable with Entero.</p>
        <div className='flex justify-between my-6'>
            <BsFillTelephoneFill size={30}/>
            <ImLocation size={30}/>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-around mt-6'>
            <div>
                <h6 className='font-medium text-black'>Information</h6>
                <ul>
                    <li className='py-2 text-sm'>About us</li>
                    <li className='py-2 text-sm'>Event Management</li>
                    <li className='py-2 text-sm'>Contact us</li>
                    
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-black'>Categories</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-black'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Policy</li>
                    
                </ul>
            </div>
    
      </div>
    </div>
  )
}

export default Footer