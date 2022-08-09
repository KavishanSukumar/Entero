import React ,{useState} from 'react';
import {BsReplyFill} from 'react-icons/bs';
import {AiOutlineClose,AiOutlineStar} from 'react-icons/ai';
import Shakir from '../../Shakir.jpg';


function ReviewServiceProvider() {

    const [popup,setPopup]=useState(false);

    const handlePopup=()=>{
        setPopup(!popup)
    }
return (
        
    <div className="relative p-5 w-full mt-14 md:mt-0 h-full">
        {/*Start of the insights */}
        <div className="p-2 shadow-xl mb-10 grid grid-cols-4">
            <div className=" bg-slate-100 p-2 col-span-2 md:col-start-2 md:col-span-1 text-center min-h-fit shadow-inner mx-2 rounded-xl">
                <p className="text-4xl mb-2">4.2</p>
                <p className="text-sm">Overall rating</p>
            </div>
            <div className=" bg-slate-100 p-2 col-span-2 md:col-start-3 md:col-span-1 text-center min-h-fit shadow-inner mx-2 rounded-xl">
                <p className="text-4xl mb-2">26</p>
                <p className="text-sm">Reviews</p>
            </div>

        </div>
        {/*end of insights */}

        {/*Start of the section container */}
        <div className="p-2 bg-gray-100 shadow-2xl mb-5">
            {/*section name */}
            <h3 className="border-b mb-5 border-black font-medium uppercase">Reviews</h3>
            
            {/*grid styling to contain 4 cards per section */}
            <div className="m-2 grid col-span-2 lg:grid-cols-2  xl:grid-cols-4 ">

                    {/*The card */}
                <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner hover:scale-110 transition duration-300">
                    {/*Name of the sender */}
                    <div className="flex justify-start items-center p-1 w-full">
                        <div className=" inline-flex">
                            <img src={Shakir} alt="" className="w-6 h-6 rounded-full mr-1 hover:scale-125" />
                            <p className=' font-medium '>Shakir</p>
                        </div>
                        
                        <div className="flex justify-end grow ">
                            <AiOutlineStar size={20} />
                            <AiOutlineStar size={20} />
                            <AiOutlineStar size={20} />
                            <AiOutlineStar size={20} />
                            <AiOutlineStar size={20} />
                        </div>
                        
                    </div>
                    
                    
                    {/*content */}
                    <p className="mb-7 text-gray-700">Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design..<b className="text-blue-400 cursor-pointer" onClick={handlePopup}>Read more</b>
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                   

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
        <div className={popup? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0":"hidden"} >
            <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[70%] mx-[15%] p-2">
                <div className="w-full inline-flex justify-end items-end">
                    <AiOutlineClose className="w-6 h-6 cursor-pointer" onClick={handlePopup}/>
                </div>
                <div className="flex justify-around items-center p-1 w-full">
                        <div className=" inline-flex justify-center items-center w-[70%] ">
                            <img src={Shakir} alt="" className="w-8 h-8 rounded-full mr-1 hover:scale-125" />
                            <p className=' font-medium text-base'>Shakir</p>
                        </div>
                        
                        <div className="flex ">
                            <AiOutlineStar size={20} />
                            <AiOutlineStar size={20} />
                            <AiOutlineStar size={20} />
                            <AiOutlineStar size={20} />
                            <AiOutlineStar size={20} />
                        </div>
                        
                </div>

                <div className="w-full p-2 shadow-xl mb-10 grid grid-cols-1">
                    <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                        <p className="text-gray-700"><i>Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web designLorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web designLorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web designLorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design</i></p>
                    </div>
                    
                </div>
            </div>
        </div>

        
        
        
    </div>
    

  )
}

export default ReviewServiceProvider