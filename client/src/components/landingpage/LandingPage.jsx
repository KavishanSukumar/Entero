import React from "react";
import Carousel from "../../components/landing/Carousel";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <div>
        <Carousel />
        <div className="absolute text-center top-40 w-full">
          <h1 className="text-2xl font-bold  py-6">
            Searching for Event Services?
          </h1>
          <div className="flex flex-row justify-center">
            <h1 className="text-xl w-96 py-6 ">
              We are here to accomadate the events and the services for both
              parties service providers and customers. you are able to find or
              privide your needed or wanted services through this single system
            </h1>
          </div>

          <h1 className="text-2xl font-bold  py-6">Join us Entero </h1>
          <button className="border left-60 w-64 py-2 bg-yellow-900 hover:bg-gray-500 hover:text-black text-white">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
