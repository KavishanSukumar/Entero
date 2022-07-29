import React from "react";
import Carousel from "../../components/landing/Carousel";

function LandingPage() {
  return (
    <div className="flex flex-col justify-between">
      <header className="basis-1/4 Header py-8 bg-yellow-700">header</header>

      <div>
        <div>
          <Carousel />
        </div>
      </div>

      <div className=" bg-yellow-700 text-white w-full h-16 ">Footer</div>
    </div>
  );
}

export default LandingPage;
