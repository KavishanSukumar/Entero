import React ,{useState} from 'react';
import {BsReplyFill} from 'react-icons/bs';
import {AiFillDelete,AiOutlineClose} from 'react-icons/ai';


function MessageComponent() {
    const [typeReply,setTypeReply]=useState(false)
    const [reply,setReply]=useState(false);

    const handleTypeReply=()=>{
        setTypeReply(!typeReply);
    }
    const handleReply=()=>{
        setReply(!reply);
    }
    const [popup,setPopup]=useState(false);

    const handlePopup=()=>{
        setPopup(!popup)
    }

    const [popupR,setPopupR]=useState(false);

    const handlePopupR=()=>{
        setPopupR(!popupR)
    }

    const typeReplyMessage=(
        <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner hover:scale-110 transition duration-300 cursor-pointer">
                    {/*Name of the sender */}
                    
                    <div>
                        <textarea placeholder="Type reply here" rows="5" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black">
                        </textarea>
                    </div>
                    
                    <div className="flex justify-center">
                        <button className=" inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 p-2 w-30 rounded hover:border-2 text-white font-medium mx-2 mb-2">
                            Send
                        </button>
                        <button className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 p-2 w-30 rounded hover:border-2 text-white font-medium mx-2 mb-2" onClick={handleTypeReply}>
                            Cancel
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
                    
                    <p className="text-center text-sm text-gray-500 hover:underline" onClick={handleReply}>Click to see message</p>
                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">18 hours ago</p>
                    
                </div>
    )
    return (
        
    <div className="relative p-5 w-full mt-14 md:mt-0 mb-2 h-full">
         <div className="flex justify-start mb-7">
        <h2 className="text-2xl font-bold leading-7 font-serif text-gray-900 sm:text-3xl">
          Contact Us
        </h2>
      </div>

        {/*Start of the section container */}
        <div className="p-2 bg-gray-100 shadow-2xl mb-5">
            {/*section name */}
            <h3 className="border-b mb-5 border-black font-medium uppercase">New messages</h3>
            
            {/*grid styling to contain 4 cards per section */}
            <div className="m-2 grid col-span-2 lg:grid-cols-2  xl:grid-cols-4 ">

                    {/*The card */}
                <div className={!typeReply?"p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner hover:scale-110 transition duration-300":"hidden"}>
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center'>Kalana Bushan</h4>
                    
                    {/*content */}
                    <p className="mb-7 text-gray-700">I would like to know about the system service providers trustability.And can I make a booking without creating an account..<b className="text-blue-400 cursor-pointer" onClick={handlePopup}>Read more</b>
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                    <div className="flex justify-center">
                        <button className=" inline-flex items-center w-20 justify-center bg-cyan-500 hover:bg-cyan-400 p-2 w-30 rounded text-white font-medium mx-2 mb-2" onClick={handleTypeReply}>
                            Reply
                        </button>
                        <button className="inline-flex items-center justify-center w-20 bg-cyan-500 hover:bg-cyan-400 p-2 w-30 rounded text-white font-medium mx-2 mb-2">
                            Discard
                        </button>
                    </div>

                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">2 hours ago</p>
                    
                </div>
                    {/*end of the card */}
                    
                    {typeReply? typeReplyMessage:""}
                    {/*The card */}
                <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner hover:scale-110 transition duration-300">
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center'>Tharindu Thaathvika</h4>
                    
                    {/*content */}
                    <p className="mb-7 text-gray-700">Why are the services limited to 4.I am a tailor and i want to use this system but unfortunately i have no option and..<b className="text-blue-400 cursor-pointer" onClick={handlePopup}>Read more</b>
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                    <div className="flex justify-center">
                        <button className=" inline-flex items-center w-20 justify-center bg-cyan-500 hover:bg-cyan-400 p-2 w-30 rounded text-white font-medium mx-2 mb-2" onClick={handleTypeReply}>
                            Reply
                        </button>
                        <button className="inline-flex items-center justify-center w-20 bg-cyan-500 hover:bg-cyan-400 p-2 w-30 rounded text-white font-medium mx-2 mb-2">
                            Discard
                        </button>
                    </div>

                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">2 hours ago</p>
                    
                </div>
                    {/*end of the card */}

                    {/*The card */}
                <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner hover:scale-110 transition duration-300">
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center'>Solangara Hetti</h4>
                    
                    {/*content */}
                    <p className="mb-7 text-gray-700">This is a timely system and appreciate how this system will help the general public to overcome a massive issue..<b className="text-blue-400 cursor-pointer" onClick={handlePopup}>Read more</b>
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                    <div className="flex justify-center">
                        <button className=" inline-flex items-center w-20 justify-center bg-cyan-500 hover:bg-cyan-400 p-2 w-30 rounded text-white font-medium mx-2 mb-2" onClick={handleTypeReply}>
                            Reply
                        </button>
                        <button className="inline-flex items-center justify-center w-20 bg-cyan-500 hover:bg-cyan-400 p-2 w-30 rounded text-white font-medium mx-2 mb-2">
                            Discard
                        </button>
                    </div>

                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">2 hours ago</p>
                    
                </div>
                    {/*end of the card */}

                    {/*The card */}
                <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner hover:scale-110 transition duration-300">
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center'>Metha Guru</h4>
                    
                    {/*content */}
                    <p className="mb-7 text-gray-700">This is a good system and i would like to know som of the functionalities that you will provide in the future..<b className="text-blue-400 cursor-pointer" onClick={handlePopup}>Read more</b>
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                    <div className="flex justify-center">
                        <button className=" inline-flex items-center w-20 justify-center bg-cyan-500 hover:bg-cyan-400 p-2 w-30 rounded text-white font-medium mx-2 mb-2" onClick={handleTypeReply}>
                            Reply
                        </button>
                        <button className="inline-flex items-center justify-center w-20 bg-cyan-500 hover:bg-cyan-400 p-2 w-30 rounded text-white font-medium mx-2 mb-2">
                            Discard
                        </button>
                    </div>

                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">2 hours ago</p>
                    
                </div>
                    {/*end of the card */}


                    
            </div>
            {/*end of the grid */}

            <div className="p-2 flex justify-end">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-white text-center p-2 rounded-lg w-20">
                    More
                </button>
            </div>
            
        
        </div>
        {/*end of the section container */}
        <div className={popup? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0":"hidden"} >
            <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[70%] mx-[15%] p-2">
                <div className="w-full inline-flex justify-end items-end">
                    <AiOutlineClose className="w-6 h-6 cursor-pointer" onClick={handlePopup}/>
                </div>
                <div className="w-full mb-4">
                    <p className="text-lg text-center font-medium border-b-2 border-gray-900">Shakir <i>(shakir3789@gmail.com)</i></p>
                </div>

                <div className="w-full p-2 shadow-xl mb-10 grid grid-cols-1 lg:grid-cols-2">
                    <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                        <p className="text-center font-medium">Message</p>
                        <p>Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web designLorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web designLorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web designLorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design</p>
                    </div>
                    <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                        <p className="text-center font-medium">Type reply</p>
                        <div>
                            <textarea placeholder="Type reply here" rows="5" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black">
                            </textarea>
                        </div>
                    
                        <div className="flex justify-center">
                            <button className=" inline-flex items-center bg-cyan-500 p-2 w-30 rounded hover:border-2 hover:bg-cyan-400 font-medium mx-2 mb-2">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*Start of The replies part section*/}

        <div className="p-2 bg-gray-100 shadow-2xl mb-5">
            {/*section name */}
            <h3 className="border-b mb-5 border-black font-medium uppercase">Replied Messages</h3>
            
            {/*grid styling to contain 4 cards per section */}
            <div className="m-2 grid col-span-2 lg:grid-cols-2  xl:grid-cols-4 ">
                {/*The card */}
                <div className={!reply?"p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner  hover:scale-110 transition duration-300 cursor-pointer":"hidden"}>
                    {/*Name of the sender */}
                    <h4 className='mb-3 font-medium text-center '>Shakir</h4>
                    
                    {/*content */}
                    <p className="mb-7 text-gray-700">What inspired you guys to build such a system and will the trial period increase in the future so that we can..<b className="text-blue-400 cursor-pointer" onClick={handlePopupR}>Read more</b>
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                    <p className="text-center text-sm text-gray-500 hover:underline" onClick={handleReply}>Click to see reply</p>

                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">2 hours ago</p>
                    
                </div>
                    {/*end of the card */}
                    {reply? replyMessage:""}
                    

                    
            </div>
            {/*end of the grid */}

            {/* <div className="p-2 flex justify-end">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-white text-center p-2 rounded-lg w-20">
                    More
                </button>
            </div> */}
            
        
        </div>
        {/*end of the section container */}
        <div className={popupR? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0":"hidden"} >
            <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[70%] mx-[15%] p-2">
                <div className="w-full inline-flex justify-end items-end">
                    <AiOutlineClose className="w-6 h-6 cursor-pointer" onClick={handlePopupR}/>
                </div>
                <div className="w-full mb-4">
                    <p className="text-lg text-center font-medium border-b-2 border-gray-900">Shakir <i>(shakir3789@gmail.com)</i></p>
                </div>

                <div className="w-full p-2 shadow-xl mb-10 grid grid-cols-1 lg:grid-cols-2">
                    <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                        <p className="text-center font-medium mb-2">Message</p>
                        <p>Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web designLorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web designLorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web designLorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design</p>
                    </div>
                    <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                        <p className="text-center font-medium mb-2">Reply</p>
                        <p>Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web designLorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web designLorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web designLorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design</p>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
    

  )
}

export default MessageComponent