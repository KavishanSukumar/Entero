import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from "axios";
import { fontSize } from "@mui/system";
import errorimage from "./errorimage.png"
const IMG_URL2 = "http://localhost:4000/api/serviceprovider/portfolioimages";


export default function Carousel(props) {
    const [userid, setUserid] = useState(props.uid);
    //console.log('this is user id in carousel --> ', userid);
    const [currImg, setcurrImg] = useState(0);

    const [portfolio_images, setPortfolio_images] = useState([]);

    async function getportfolioimages(uid) {

        try {
            const res = await axios.get(IMG_URL2 + '/' + uid)
            setPortfolio_images(res.data);
            //console.log('got images from file path');


        } catch (error) {
            console.error(error.message);
            //console.log('error  getting portfolio images from file path');
        }
    }


    useEffect(() => {
        getportfolioimages(userid);
    }, []);

    return (
        <div className="w-[100%] h-[360px]">


            {portfolio_images.length == 0 ?
                <div className="w-[100%] h-[100%] flex bg-no-repeat bg-slate-100 rounded-lg p-2  gap-0">

                    {/* <div className="w-[100%] h-[100%] flex bg-no-repeat bg-cover rounded-lg"
  style={{ 
     backgroundImage: `url(${'http://localhost:4000/' + userid + '/' + portfolio_images[currImg]})`,
     height: `360px`
     ba }}> */}
                    <div className="flex flex-[5%] bg-gray-300/60 grid place-items-center cursor-pointer rounded-lg mr-1 hover:bg-black/60 hover:text-white"
   >
                        < ArrowBackIosIcon style={{ fontSize: 30 }} />
                    </div>
                    <div className="flex flex-[90%] justify-center">
                    <img className="max-w-full  h-auto " src={errorimage} alt={errorimage} />
                    </div>
                    <div className="flex flex-[5%] bg-gray-300/60 grid place-items-center cursor-pointer rounded-lg ml-1 hover:bg-black/60 hover:text-white">
                        <ArrowForwardIosIcon style={{ fontSize: 30 }} />
                        </div>

                </div>


                :
                <div className="w-[100%] h-[100%] flex bg-no-repeat bg-slate-100 rounded-lg p-2  gap-0">

                    {/* <div className="w-[100%] h-[100%] flex bg-no-repeat bg-cover rounded-lg"
                  style={{ 
                     backgroundImage: `url(${'http://localhost:4000/' + userid + '/' + portfolio_images[currImg]})`,
                     height: `360px`
                     ba }}> */}
                    <div className="flex flex-[5%] bg-gray-300/60 grid place-items-center cursor-pointer rounded-lg mr-1 hover:bg-black/60 hover:text-white"
                        onClick={() => { currImg === 0 ? setcurrImg((portfolio_images.length) - 1) : (setcurrImg((currImg - 1) % portfolio_images.length)) }}>
                        < ArrowBackIosIcon style={{ fontSize: 30 }} />
                    </div>
                    <div className="flex flex-[90%] justify-center">
                        <img className="max-w-full  h-auto " src={'http://localhost:4000/' + userid + '/' + portfolio_images[currImg]} alt={errorimage} />

                    </div>
                    <div className="flex flex-[5%] bg-gray-300/60 grid place-items-center cursor-pointer rounded-lg ml-1 hover:bg-black/60 hover:text-white"
                        onClick={() => { (setcurrImg((currImg + 1) % portfolio_images.length)) }}><ArrowForwardIosIcon style={{ fontSize: 30 }} /></div>

                </div>


            }

        </div>
    );
};