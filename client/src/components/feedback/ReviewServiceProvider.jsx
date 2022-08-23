import React ,{useState} from 'react';
import StarRateIcon from "@mui/icons-material/StarRate";
import {AiOutlineClose} from 'react-icons/ai';
import Shakir from '../../Shakir.jpg';


function ReviewServiceProvider() {

    const [popup,setPopup]=useState(false);

    const handlePopup=()=>{
        setPopup(!popup)
    }
return (
        
    <div className="relative p-5 w-full mt-14 md:mt-0 h-full">
        
        <div className="flex justify-start mb-7">
        <h2 className="text-2xl font-bold font-serif leading-7 text-gray-900 sm:text-3xl">
          Rating And Review
        </h2>
      </div>
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
                            <p className=' font-medium '>Kalana Bushan</p>
                        </div>
                        
                        <div className="flex justify-end grow ">
                            <StarRateIcon  className="text-amber-200 text-xs" />
                            <StarRateIcon  className="text-amber-200 text-xs" />
                            <StarRateIcon  className="text-amber-200 text-xs" />
                            <StarRateIcon  className="text-amber-200 text-xs" />
                            <StarRateIcon  className="text-amber-200 text-xs" />
                            
                        </div>
                        
                    </div>
                    
                    
                    {/*content */}
                    <p className="mb-7 text-gray-700">Amazing service .Really appreciate how the crew worked so hard to make the event a reality.The food was really good and i would recommend this to anyone out there to make theri  events a dream come true...<b className="text-blue-400 cursor-pointer" onClick={handlePopup}>Read more</b>
                    </p>
                    
                    
                    {/*buttons for reply and discard */}
                   

                    {/*Time recieved */}
                    <p className="text-center text-xs text-gray-500">2022-07-13</p>
                    <p className="text-center text-xs text-gray-500">10:15:09</p>
                    
                </div>
                    {/*end of the card */}
                    
            </div>
            {/*end of the grid */}

            {/* <div className="p-2 flex justify-end">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-white text-center p-2 rounded-lg w-20">
                    More
                </button>
            </div> */}
            
        
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
                            <p className=' font-medium text-base'>Kalana Bushan</p>
                        </div>
                        
                        <div className="flex ">
                            <StarRateIcon  className="text-amber-200 text-xs" />
                            <StarRateIcon  className="text-amber-200 text-xs" />
                            <StarRateIcon  className="text-amber-200 text-xs" />
                            <StarRateIcon  className="text-amber-200 text-xs" />
                            <StarRateIcon  className="text-amber-200 text-xs" />
                        </div>
                        
                </div>

                <div className="w-full p-2 shadow-xl mb-10 grid grid-cols-1">
                    <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
                        <p className="text-gray-700"><i>I am so delighted about the services, all the refreshment items are very yummy. I recomment the refreshment price which is worth for the paid price.</i></p>
                    </div>
                    
                </div>
            </div>
        </div>

        
        
        
    </div>
    

  )
}

export default ReviewServiceProvider