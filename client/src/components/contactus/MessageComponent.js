import React ,{useState} from 'react';
import {BsReplyFill} from 'react-icons/bs';
import {AiFillDelete} from 'react-icons/ai';


function MessageComponent() {
    const [typeReply,setTypeReply]=useState(false)
    const [reply,setReply]=useState(false);

    const handleTypeReply=()=>{
        setTypeReply(!typeReply);
    }
    const handleReply=()=>{
        setReply(!reply);
    }

    const typeReplyMessage=(
        <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner hover:scale-110 transition duration-300 cursor-pointer">
                    {/*Name of the sender */}
                    
                    <div>
                        <textarea placeholder="Type reply here" rows="5" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black">
                        </textarea>
                    </div>
                    
                    <div className="flex justify-center">
                        <button className=" inline-flex items-center bg-transparent p-2 w-30 rounded hover:border-2 hover:text-blue-400 font-medium mx-2 mb-2">
                            <BsReplyFill size={18} />Send
                        </button>
                        <button className="inline-flex items-center bg-transparent p-2 w-30 rounded hover:border-2 hover:text-red-400 font-medium mx-2 mb-2" onClick={handleTypeReply}>
                            <AiFillDelete size={18} />Cancel
                        </button>
                    </div>
                    
                </div>
    )

    const replyMessage=(
        <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner hover:scale-110 transition duration-300 cursor-pointer" onClick={handleReply}>
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center'>The reply</h4>
                    
                    {/*content */}
                    <p className="mb-7 text-gray-700">Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design..<b className="text-blue-400">Read more</b>
                    </p>
                    
                    <p className="text-center text-sm text-gray-500">Click to see message</p>
                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">18 hours ago</p>
                    
                </div>
    )
    return (
        
    <div className="mt-14 md:m-3 p-5 w-full">
        {/*Start of the insights */}
        <div className="p-2 shadow-xl mb-10 grid grid-cols-3">
            <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl">
                <p className="text-4xl mb-2">28</p>
                <p className="text-sm">Recieved</p>
            </div>
            <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl">
                <p className="text-4xl mb-2">15</p>
                <p className="text-sm">Replied</p>
            </div>
            <div className="bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl">
                <p className="text-4xl mb-2 ">6</p>
                <p className="text-sm">Discarded</p>
            </div>

        </div>
        {/*end of insights */}

        {/*Start of the section container */}
        <div className="p-2 bg-gray-100 shadow-2xl mb-5">
            {/*section name */}
            <h3 className="border-b mb-5 border-black font-medium uppercase">New messages</h3>
            
            {/*grid styling to contain 4 cards per section */}
            <div className="m-2 grid col-span-2 lg:grid-cols-2  xl:grid-cols-4 ">

                    {/*The card */}
                <div className={!typeReply? "p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner hover:scale-110 transition duration-300":"hidden"}>
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center'>Shakir</h4>
                    
                    {/*content */}
                    <p className="mb-7 text-gray-700">Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design..<b className="text-blue-400">Read more</b>
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                    <div className="flex justify-center">
                        <button className=" inline-flex items-center bg-transparent p-2 w-30 rounded hover:border-2 hover:text-blue-400 font-medium mx-2 mb-2" onClick={handleTypeReply}>
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
                    {typeReply? typeReplyMessage:""}

                    {/*The card */}
                <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner  hover:scale-110 transition duration-300">
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

                    {/*The card */}
                <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner  hover:scale-110 transition duration-300">
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

                    <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner  hover:scale-110 transition duration-300">
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center '>Shakir</h4>
                    
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

        <div className="p-2 bg-gray-100 shadow-2xl mb-5">
            {/*section name */}
            <h3 className="border-b mb-5 border-black font-medium uppercase">Replies</h3>
            
            {/*grid styling to contain 4 cards per section */}
            <div className="m-2 grid col-span-2 lg:grid-cols-2  xl:grid-cols-4 ">
                {/*The card */}
                <div className={!reply?"p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner  hover:scale-110 transition duration-300 cursor-pointer":"hidden"} onClick={handleReply}>
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center '>Shakir</h4>
                    
                    {/*content */}
                    <p className="mb-7 text-gray-700">Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design..<b className="text-blue-400">Read more</b>
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                    <p className="text-center text-sm text-gray-500">Click to see reply</p>

                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">2 hours ago</p>
                    
                </div>
                    {/*end of the card */}
                    {reply? replyMessage:""}

                    
            </div>
            {/*end of the grid */}

            <div className="p-2 flex justify-end">
                <button className="bg-red-200 text-center p-2 rounded-lg w-20">
                    More
                </button>
            </div>
            
        
        </div>
        {/*end of the section container */}
        
        
    </div>
    

  )
}

export default MessageComponent