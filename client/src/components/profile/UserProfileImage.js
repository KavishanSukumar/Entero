import React from 'react';
import Shakir from '../../Shakir.jpg';

function UserProfileImage() {
  return (
    <div className="flex md:justify-center mt-20 md:mt-8 lg:flex-col lg:justify-start shadow-2xl border-2 lg:min-h-screen">
            {/*The image */}
            <div className="p-8">
                <img src={Shakir} alt="whatever" className="w-48 h-48 lg:w-36 lg:h-36 xl:w-48 xl:h-48 rounded-full shadow-2xl hover:transform hover:scale-110 transition duration-200"/>
            </div>

            {/*The buttons */}
            <div className="flex flex-col p-4 w-56 lg:w-44 xl:w-56">
                <button className=" bg-gray-100 border-2   p-2 mb-3 rounded hover:bg-transparent hover:border-black mt-16 lg:mt-0 lg:ml-8">
                    Change
                </button>
                <button className="bg-gray-100 border-2   p-2 mb-3 rounded hover:bg-transparent hover:border-black lg:mt-0 lg:ml-8">
                    Remove
                </button>
            </div>
    </div>
  )
}

export default UserProfileImage