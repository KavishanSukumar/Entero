import React from "react";

function AboutUs() {
  return (
    <>
      <div className="flex flex-col lg:flex-row  mx-3 my-6">
        <div className="flex flex-col  basis-3/6 shadow-xl rounded-lg m-5 h-96">
          <div className="my-4 ml-10">
            <h1 className="text-6xl">Who are we?</h1>
          </div>
          <div className="m-10">
          We provide event services throughout the island. We are connected with industry professionals of service providers with more. So far we have successfully completed 450+ events locally, 80+ Destinations in catering, hall bookings, photography and decoration and also we are more strengthened with our customer base.
          Also we are merged with the registered service providers who are thoroughly verified and we provide the maximum freedom for the users to fullfill their requirements.

          </div>
        </div>
        <div className="flex justify-center basis-3/6 shadow-xl rounded-lg  m-5 h-96 ">
          <img
            className="m-3 w-auto h-80 object-cover rounded-full "
            src="/assets/images/aboutus.png"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  mx-3 my-6">
        <div className="flex justify-center basis-3/6 shadow-xl rounded-lg  m-5 h-96 ">
          <img
            className="m-3 w-auto h-80 object-cover rounded-full "
            src="/assets/images/about2.png"
          />
        </div>
        <div className="flex flex-col  basis-3/6 shadow-xl rounded-lg m-5 h-96">
          <div className="my-4 ml-10">
            <h1 className="text-6xl">We Make It Happen.
          </h1>
          </div>
          <div className="m-10">
            <p className="font-medium text-xl mb-2">
            Your Vision. Your Style. Your Passion. Your Day. We make it Happen.

            </p>
            Often people think that online booking is going to be a huge expense, but most of the time we can actually save you money. As well as passing on our elegant services  directly to you, we will work with you to manage your wedding budget and event. You are free to choose your own needed event and services; we will work with you to get you the best value for money on every last detail.

            
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row  mx-3 my-6">
        <div className="flex flex-col  basis-3/6 shadow-xl rounded-lg m-5 h-96">
          <div className="my-4 ml-10">
            <h1 className="text-6xl">Entero</h1>
          </div>
          <div className="m-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            repudiandae expedita ad blanditiis debitis aspernatur dolore animi
            iste velit similique autem natus veniam tempora possimus
            consequatur, iusto, itaque iure tenetur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Labore eum veniam id saepe odio. Et
            sapiente mollitia aliquid. Sequi placeat corrupti corporis laborum
            architecto nisi magni, nihil molestias deserunt atque!
          </div>
        </div>
        <div className="flex justify-center basis-3/6 shadow-xl rounded-lg  m-5 h-96 ">
          <img
            className="m-3 w-auto h-80 object-cover rounded-full "
            src="/assets/images/aboutus.png"
          />
        </div>
      </div> */}
    </>
  );
}

export default AboutUs;
