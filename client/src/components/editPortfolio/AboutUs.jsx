import React, { useState, useEffect } from "react";
import DiamondIcon from '@mui/icons-material/Diamond';
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SellIcon from "@mui/icons-material/Sell";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlineClose } from 'react-icons/ai';
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import Carousel from "./Carousel";

function AboutUs() {


  //popup for galary
  const [showpopup, setshowpopup] = React.useState(false);
  const handleOnClose = () => setshowpopup(false);
  const [popup, setPopup] = React.useState(false);
  const handlePopup = () => {
    setPopup(!popup);

  }

  //popup for add image
  const [showpopup1, setshowpopup1] = React.useState(false);
  const handleOnClose1 = () => setshowpopup1(false);
  const [popup1, setPopup1] = React.useState(false);
  const handlePopup1 = () => {
    setPopup1(!popup1);

  }
  return (
    <div>
      {/* ---- popup for image upload  -------- */}
      <div className="m-10  flex flex-col">
        <div className={popup1 ? "fixed overflow-y-auto flex flex-col lg:px-52  md:px-40 sm:px-30 px-10      backdrop-blur-[1px] bg-black/90 top-0 w-full h-full z-50  left-0 mb-5 " : "hidden"}>
          <div className="w-full inline-flex justify-end items-end ">
            <AiOutlineClose
              className="w-6 h-6 cursor-pointer bg-white rounded-2xl text-black hover:text-red-500  hover:bg-white   mt-8 "
              onClick={handlePopup1}
            />
          </div>
          <div className="flex flex-col mt-3">


            <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer
             dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help" id="file_input" type="file" accept="image/*" />
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Image files only</p>
            <div className="flex justify-center">
              <button className="bg-cyan-500 h-10 w-24 text-white hover:bg-blue-400  py-2  text-lg px-3 rounded mr-1 cursor-pointer"> upload</button>
            </div>

          </div>
        </div>
      </div>

      {/* ---- popup for gallery  -------- */}
      <div className="m-10  flex flex-col">
        <div className={popup ? "fixed overflow-y-auto flex flex-col  gap-2   backdrop-blur-[1px] bg-black/90 top-0 w-full h-full z-10  left-0 mb-5 " : "hidden"}>
          <div className="w-full inline-flex justify-end items-end ">
            <AiOutlineClose
              className="w-6 h-6 cursor-pointer bg-white rounded-2xl text-black hover:text-red-500  hover:bg-white   mt-8 mr-10"
              onClick={handlePopup}
            />
          </div>
          <section class="overflow-hidden text-gray-500 ">
            <div class="container px-5 py-2 mx-auto  flex flex-col gap-3">
              <div className="flex justify-center">
                <p className="font-bold text-lg lg:text-3xl md:text-2xl sm:text-xl cursor-default" >Image gallery</p>
              </div>
              <div className="flex justify-end text-3xl " >
                <div className="" title='add an image'>
                  < AddIcon className="cursor-pointer hover:text-white" fontSize='large' onClick={handlePopup1} />
                </div>

              </div>
              <div class="flex flex-wrap -m-1 md:-m-2  gap-y-3 justify-center ">


                <div class="flex flex-wrap w-1/3 p-2">
                  <div class="w-full p-1 md:p-1 ">

                    <AiOutlineClose
                      className="w-4 h-4 cursor-pointer bg-white rounded-2xl text-black hover:text-red-500  hover:bg-white absolute  mt-1 ml-2"
                      onClick={handlePopup}
                    />

                    <img alt="gallery" className="block object-cover p-1 bg-white object-center w-full h-full rounded-lg"
                      src="/assets/images/errorimage.png" />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3 p-2">
                  <div class="w-full p-1 md:p-1 ">

                    <AiOutlineClose
                      className="w-4 h-4 cursor-pointer bg-white rounded-2xl text-black hover:text-red-500  hover:bg-white absolute  mt-1 ml-2"
                      onClick={handlePopup}
                    />

                    <img alt="gallery" className="block object-cover p-1 bg-white object-center w-full h-full rounded-lg"
                      src="/assets/images/errorimage.png" />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3 p-2">
                  <div class="w-full p-1 md:p-1 ">

                    <AiOutlineClose
                      className="w-4 h-4 cursor-pointer bg-white rounded-2xl text-black hover:text-red-500  hover:bg-white absolute  mt-1 ml-2"
                      onClick={handlePopup}
                    />

                    <img alt="gallery" className="block object-cover p-1 bg-white object-center w-full h-full rounded-lg"
                      src="/assets/images/errorimage.png" />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3 p-2">
                  <div class="w-full p-1 md:p-1 ">

                    <AiOutlineClose
                      className="w-4 h-4 cursor-pointer bg-white rounded-2xl text-black hover:text-red-500  hover:bg-white absolute  mt-1 ml-2"
                      onClick={handlePopup}
                    />

                    <img alt="gallery" className="block object-cover p-1 bg-white object-center w-full h-full rounded-lg"
                      src="/assets/images/errorimage.png" />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3 p-2">
                  <div class="w-full p-1 md:p-1 ">

                    <AiOutlineClose
                      className="w-4 h-4 cursor-pointer bg-white rounded-2xl text-black hover:text-red-500  hover:bg-white absolute  mt-1 ml-2"
                      onClick={handlePopup}
                    />

                    <img alt="gallery" className="block object-cover p-1 bg-white object-center w-full h-full rounded-lg"
                      src="/assets/images/errorimage.png" />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3 p-2">
                  <div class="w-full p-1 md:p-1 ">

                    <AiOutlineClose
                      className="w-4 h-4 cursor-pointer bg-white rounded-2xl text-black hover:text-red-500  hover:bg-white absolute  mt-1 ml-2"
                      onClick={handlePopup}
                    />

                    <img alt="gallery" className="block object-cover p-1 bg-white object-center w-full h-full rounded-lg"
                      src="/assets/images/errorimage.png" />
                  </div>
                </div>








              </div>
            </div>
          </section>

        </div>
      </div>


      <div className="flex xl:flex-row   lg:flex-row  md:flex-col  sm:flex-col  flex-col  gap-20 -mt-32">
        <div class="mb-3 ml-1 xl:ml-10 lg:ml-10 mt-8 xl:w-96 gap-1">
          <div className="flex flex-row justify-between">
            <label for="exampleFormControlTextarea1" className="form-label font-bold   inline-block mb-2 text-gray-700"
            >Description
            </label>
            <button className="bg-cyan-500 h-6 text-white hover:bg-blue-400  px-3 rounded mr-1 cursor-pointer"> save</button>
          </div>
          <div>
            <textarea
              className=" form-control block w-full h-[360px] px-3 py-1.5 text-base font-normal text-gray-700
       bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
        ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none "
              id="exampleFormControlTextarea1"
              rows="10"
              maxLength={1000}

              placeholder="Your message"
            ></textarea>
          </div>
        </div>
        <div className="basis-7/12 mx-1 lg:mt-8   gap-2 flex flex-col">
          <div className="flex justify-end">
            <button className="bg-cyan-500  text-white hover:bg-blue-400  px-3 rounded mr-1 cursor-pointer" onClick={handlePopup}>galery</button>
          </div>
          <Carousel />
        </div>
        {/* <div className="basis-7/12 m-7  gap-2 flex flex-col ">
          <div className="flex justify-end">
            <button className="bg-cyan-500  text-white hover:bg-blue-400  px-3 rounded mr-1 cursor-pointer" onClick={handlePopup}>galery</button>
          </div>

          <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active float-left w-full flex flex-col">

                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                  class="block w-full"
                  alt="Wild Landscape"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                  class="block w-full"
                  alt="Camera"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AboutUs;
