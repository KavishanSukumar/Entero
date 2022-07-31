import React, { useState, useRef, useEffect } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

let slideInterval;
const CarauselDataImages = [
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",

  "https://images.unsplash.com/photo-1502035618526-6b2f1f5bca1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  "https://images.unsplash.com/photo-1597861405049-0b011428568f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef();
  const length = CarauselDataImages.length;

  useEffect(() => {
    carouselRef.current.addEventListener("animationend", removeAnimation);
    carouselRef.current.addEventListener("mouseenter", pauseSlider);
    carouselRef.current.addEventListener("mouseleave", startSlider);
    startSlider();
    return () => {
      pauseSlider();
    };
  });

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleClickRight();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const removeAnimation = () => {
    carouselRef.current.classList.remove("fade-anim");
  };

  const handleClickRight = () => {
    let count = (current + 1) % length;
    setCurrent(count);
    carouselRef.current.classList.add("fade-anim");
  };

  // const handleClickLeft = () => {
  //   let count = (current + length - 1) % length;
  //   setCurrent(count);
  //   carouselRef.current.classList.add("fade-anim");
  // };

  return (
    <>
      <div className="relative flex flex-row  h-1/5 my-9 justify-center items-center">
        <div className="z-10 absolute text-center top-40 bg-white p-6 rounded-xl opacity-80 shadow-inner">
          <h1 className="text-2xl font-bold py-6">
            Searching for Event Services?
          </h1>
          <div className="flex flex-row justify-center">
            <h1 className="text-xl w-96 py-6">
              We are here to accomadate the events and the services for both
              parties service providers and customers. you are able to find or
              privide your needed or wanted services through this single system
            </h1>
          </div>
          <h1 className="text-2xl font-bold  py-6">Join us Entero </h1>
          <button className="border left-60 w-64 py-2 bg-yellow-900 hover:bg-gray-500 hover:text-black text-white">
            Sign Up
          </button>
        </div>
        {/* <ArrowCircleLeftIcon
          className="absolute top-1/2 left-8 w-screen z-10 cursor-pointer select-none"
          onClick={handleClickLeft}
          />
          <ArrowCircleRightIcon
          className="absolute top-1/2 right-8 w-screen z-10 cursor-pointer select-none"
          onClick={handleClickRight}
        /> */}
        <div ref={carouselRef} className="">
          <img
            src={CarauselDataImages[current]}
            className="w-screen h-[720px]  rounded-xl"
            alt="Event Imgs"
          />
        </div>
      </div>
    </>
  );
}

export default Carousel;
