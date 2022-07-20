import React ,{useState} from 'react';
import {BsReplyFill} from 'react-icons/bs';
import {AiFillDelete} from 'react-icons/ai';

function ReviewComponent() {
    const [reply, setReply] = useState(false);
        

        const seeReply = () => {
        setReply(!reply);
        };

        

  return (
    <div className="m-3 p-5">

        {/*Start of the section container */}
        <div className="p-2 shadow-2xl mb-5">
            {/*section name */}
            <h3 className="border-b mb-5 border-black font-medium uppercase">New messages</h3>
            
            {/*grid styling to contain 4 cards per section */}
            <div className="m-2 grid col-span-2 lg:grid-cols-4 ">

                {/*The card */}
                <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner md:transform md:hover:scale-110 md:transition duration-300">
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center'>Shakir</h4>
                    
                    {/*content */}
                    <p class="mb-7 text-gray-700">Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design..<b className="text-blue-400">Read more</b>
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                    <div className="flex justify-center">
                        <button className=" inline-flex items-center bg-blue-500 p-2 w-30 rounded hover:bg-blue-400 text-white font-medium mx-2 mb-2">
                            <BsReplyFill size={18} />Reply
                        </button>
                        <button className="inline-flex items-center bg-blue-500 p-2 w-30 rounded hover:bg-blue-400 text-white font-medium mx-2 mb-2">
                            <AiFillDelete size={18}/>Discard
                        </button>
                    </div>

                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">2 hours ago</p>
                    
                </div>
                    {/*end of the card */}

                    {/*The card */}
                <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner md:transform md:hover:scale-110 md:transition duration-300">
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center'>Shakir</h4>
                    
                    {/*content */}
                    <p class="mb-7 text-gray-700">Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                    <div className="flex justify-center">
                        <button className=" inline-flex items-center bg-blue-500 p-2 w-30 rounded hover:bg-blue-400 text-white font-medium mx-2 mb-2">
                            <BsReplyFill size={18} />Reply
                        </button>
                        <button className="inline-flex items-center bg-blue-500 p-2 w-30 rounded hover:bg-blue-400 text-white font-medium mx-2 mb-2">
                            <AiFillDelete size={18}/>Discard
                        </button>
                    </div>

                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">2 hours ago</p>
                    
                </div>
                    {/*end of the card */}
                    {/*The card */}
                <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner md:transform md:hover:scale-110 md:transition duration-300">
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center'>Shakir</h4>
                    
                    {/*content */}
                    <p class="mb-7 text-gray-700">Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                    <div className="flex justify-center">
                        <button className=" inline-flex items-center bg-blue-500 p-2 w-30 rounded hover:bg-blue-400 text-white font-medium mx-2 mb-2">
                            <BsReplyFill size={18} />Reply
                        </button>
                        <button className="inline-flex items-center bg-blue-500 p-2 w-30 rounded hover:bg-blue-400 text-white font-medium mx-2 mb-2">
                            <AiFillDelete size={18}/>Discard
                        </button>
                    </div>

                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">2 hours ago</p>
                    
                </div>
                    {/*end of the card */}
                    {/*The card */}
                <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner md:transform md:hover:scale-110 transition duration-300">
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center'>Shakir</h4>
                    
                    {/*content */}
                    <p class="mb-7 text-gray-700">Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                    <div className="flex justify-center">
                        <button className=" inline-flex items-center bg-blue-500 p-2 w-30 rounded hover:bg-blue-400 text-white font-medium mx-2 mb-2">
                            <BsReplyFill size={18} />Reply
                        </button>
                        <button className="inline-flex items-center bg-blue-500 p-2 w-30 rounded hover:bg-blue-400 text-white font-medium mx-2 mb-2">
                            <AiFillDelete size={18}/>Discard
                        </button>
                    </div>

                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">2 hours ago</p>
                    
                </div>
                    {/*end of the card */}
            </div>
            {/*end of the grid */}

            

        
        </div>
        {/*end of the section container */}

        {/*Start of The replies part section*/}
        
        <div className="p-2 shadow-2xl">
            {/*section name */}
            <h3 className="border-b mb-5 border-black font-medium uppercase">Replied </h3>
            
            {/*grid styling to contain 4 cards per section */}
            
            {/*end of the grid */}

            

        
        </div>
        

        
    </div>
    


  )
}

export default ReviewComponent