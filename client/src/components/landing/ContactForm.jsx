import React from "react";

{
  /* The form that comes in the contact us page */
}
function ContactForm() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col m-3 lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0  w-full  p-8 rounded-xl shadow-lg  bg-opacity-60">
        <div className="basis-4/12 flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide mb-3">
              Contact Us
            </h1>
            <p className="pt-2 text-white-100 text-sm">
              Need to get in touch or want to say us anything, send us a message
              we will reach you back within one business day
            </p>
          </div>
        </div>

        <div className="basis-8/12">
          <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 :w-80">
            <form className="flex flex-col space-y-4 ">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                ></input>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                ></input>
              </div>

              <div>
                <textarea
                  placeholder="Your message"
                  rows="5"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                ></textarea>
              </div>

              <button className="inline-block self-end bg-cyan-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-cyan-400 ">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
