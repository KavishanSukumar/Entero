import React from 'react';
import {BsReplyFill} from 'react-icons/bs';
import {AiFillDelete} from 'react-icons/ai';


function ViewEvent() {
  return (
    <div className="m-3 p-5">
        {/*Start of the insights */}
        <div className="p-2 shadow-xl mb-10 grid grid-cols-3 ">
            <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl col-span-3 lg:col-start-2 lg:col-span-1">
                <p className="text-4xl mb-2">28</p>
                <p className="text-sm">Recieved</p>
            </div>
            

        </div>
        {/*end of insights */}

        {/*Start of the section container */}
        <div className="p-2 shadow-2xl mb-5">
            {/*section name */}
            <h3 className="border-b mb-5 border-black font-medium uppercase">Current events</h3>
            
            {/*grid styling to contain 4 cards per section */}
            <div className="m-2 grid col-span-2 lg:grid-cols-2  xl:grid-cols-4 ">
                

                    {/*The card */}
                <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner md:transform hover:scale-110 transition duration-300">
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center'>Shakir</h4>
                    
                    {/*content */}
                    <p className="mb-7 text-gray-700">Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design..<b className="text-blue-400">Read more</b>
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                    <div className="flex justify-center">
                        <button className=" inline-flex items-center bg-transparent p-2 w-30 rounded hover:border-2 hover:text-blue-400 font-medium mx-2 mb-2">
                            <BsReplyFill size={18} />Reply
                        </button>
                        <button className="inline-flex items-center bg-transparent p-2 w-30 rounded hover:border-2 hover:text-red-400 font-medium mx-2 mb-2">
                            <AiFillDelete size={18}/>Discard
                        </button>
                    </div>

                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">2 hours ago</p>
                    
                </div>
                    {/*end of the card */}
                

                    
            </div>
            {/*end of the grid */}

            <div className="p-2 flex justify-end">
                <button className="bg-red-200 text-center p-2 rounded-lg w-20">
                    More
                </button>
            </div>
            
        
        </div>
        {/*end of the section container */}

        {/*Start of The replies part section*/}
        
        
    </div>
  )
}

export default ViewEvent