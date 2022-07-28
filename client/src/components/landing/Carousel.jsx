import React, { useState } from "react";
import { CarauselDataImages } from "./CarauselData";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = CarauselDataImages.length;

  const handleClickRight = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const handleClickLeft = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);
  if (!Array.isArray(CarauselDataImages) || CarauselDataImages.length <= 0) {
    return null;
  }

  return (
    <section className="flex flex-row relative h-screen justify-center items-center">
      <ArrowCircleLeftIcon
        className="absolute top-1/2 left-8 w-screen z-10 cursor-pointer select-none"
        onClick={handleClickLeft}
      />
      <ArrowCircleRightIcon
        className="absolute top-1/2 right-8 w-screen z-10 cursor-pointer select-none"
        onClick={handleClickRight}
      />
      {CarauselDataImages.map((item, index) => {
        return (
          <div key={index} className={index === current ? "" : ""}>
            {index === current && (
              <img
                src={item.src}
                className="w-screen h-96 rounded-xl"
                alt="Event Imgs"
              />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carousel;
