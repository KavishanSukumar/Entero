import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { fontSize } from "@mui/system";

export const images = [
    { img: '/assets/images/errorimage.png' },
    { img: '/assets/images/fab.jpg' },
    { img: '/assets/images/senal.jpg' }
]

export default function Carousel() {
    const [currImg, setcurrImg] = useState(1);
    return (
        <div className="w-[100%] h-[360px]">
            <div className="w-[100%] h-[100%] flex bg-no-repeat ">
            {/* <div className="w-[100%] h-[100%] flex bg-no-repeat bg-cover" style={{ backgroundImage: `url(${images[currImg].img})` }}> */}
                <div className="flex flex-[5%] bg-gray-300/60 grid place-items-center cursor-pointer rounded-lg mr-1 hover:bg-black/60"
                 onClick={() =>{currImg === 0 ? setcurrImg((images.length)-1) : (setcurrImg((currImg-1)%images.length))}}>< ArrowBackIosIcon style={{fontSize: 30}}/></div>
                <div className="flex flex-[90%] ">
                <img className="w-full h-[360px]"  src={images[currImg].img}  />
                </div>
                <div className="flex flex-[5%] bg-gray-300/60 grid place-items-center cursor-pointer rounded-lg ml-1 hover:bg-black/60" 
                onClick={() => { (setcurrImg((currImg+1)%images.length))}}><ArrowForwardIosIcon style={{fontSize: 30}}/></div>
                
            </div>
        </div>
    );
};