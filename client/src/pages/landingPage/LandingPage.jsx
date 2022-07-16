import React from "react";

function LandingPage() {
  return (
    <div className="flex flex-col justify-between">
      <header className="basis-1/4 Header py-8 bg-yellow-700">header</header>

      <div>
        <div className="absolute text-center top-40 w-full">
          <h1 className="text-2xl font-bold  py-6">
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

        <video
          autoPlay
          loop
          muted
          class="relative -z-10 w-full h-full opacity-75"
        >
          <source src="/assets/videos/landingPage.mp4" type="video/mp4" />
        </video>
      </div>

      <div class=" bg-yellow-700 text-white w-full h-16 ">Footer</div>
    </div>
  );
}

export default LandingPage;
