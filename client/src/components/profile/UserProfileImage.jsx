import React from 'react';
import Shakir from '../../Shakir.jpg';

function UserProfileImage() {
  return (
    <div className="flex justify-center items-center mt-20 md:mt-8 md:flex-col md:justify-start md:pt-32 lg:pt-0 shadow-2xl border-2 lg:min-h-screen w-screen md:w-full">
            {/*The image */}
            <div className="p-1 flex justify-center items-center mb-4">
                <img src="/assets/images/sindu.jpg" alt="whatever" className="w-36 h-36 md:w-24 md:h-24 lg:w-36 lg:h-36 xl:w-48 xl:h-48 rounded-full shadow-2xl hover:transform hover:scale-110 transition duration-200"/>
            </div>

            {/*The buttons */}
            <div className="flex flex-col items-center justify-center lg:w-44 xl:w-56 ">
                <button className="p-2 w-24 lg:w-36 bg-cyan-500 border-2 text-xs lg:text-base mb-1 rounded hover:bg-cyan-400 text-white lg:mt-0 ">
                    Change
                </button>
                <button className="p-2 w-24 lg:w-36 bg-cyan-500 border-2 text-xs  lg:text-base rounded hover:bg-cyan-400 text-white lg:mt-0 ">
                    Remove
                </button>
            </div>
    </div>
  )
}

export default UserProfileImage