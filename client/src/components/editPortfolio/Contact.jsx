import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import HelpIcon from "@mui/icons-material/Help";
import Button from "../button/Button";
import { Link } from "react-router-dom";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Shakir from "../../Shakir.jpg";
// import * as React from "react";

export default function Contact() {
  const handle = () => {
    console.log("hello");
  };

  const [popup, setPopup] = useState(false);
  const [value, setValue] = React.useState(0);
  const handlePopup = () => {
    setPopup(!popup);
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<HelpIcon />}>
          <div>
            <button
              to=""
              onClick={handlePopup}
              className=" w-32 bg-cyan-500 text-white hover:bg-blue-400 py-2 px-3 rounded mr-1 cursor-pointer"
            >
              Appointment
            </button>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className="italic text-sm">
            In order to contact the service provider you can use the appointment
            option to schedule a time slot. you are able to pick out your
            convinient time from the calender.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<HelpIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div>
            <Link to="/customerchat">
              <button
                to=""
                className="w-32 bg-cyan-500 text-white hover:bg-blue-400 py-2 px-3 rounded mr-1 cursor-pointer"
              >
                Chat
              </button>
            </Link>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className="italic text-sm">
            In order to contact with the service provider you can use the chat
            option.
          </p>
        </AccordionDetails>
      </Accordion>

      <div
        className={
          popup
            ? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0"
            : "hidden"
        }
      >
        <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[40%] mx-[30%] p-2">
          <div className="w-full inline-flex justify-end items-end">
            <AiOutlineClose
              className="w-4 h-4 cursor-pointer"
              onClick={handlePopup}
            />
          </div>
          <div
            className="flex 
          w-full 
          justify-center items-center mt-2"
          >
            {/* <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-slate-200 w-full max-w-4xl p-8 rounded-xl shadow-lg  bg-opacity-60  justify-center items-center" > */}
            {/* <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-white w-full max-w-4xl p-8 rounded-xl shadow-lg  bg-opacity-60  justify-center items-center">
             */}
            <div>
              {/* <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 md:w-80"> */}
              <form
                // onSubmit={onSubmitForm}
                className="flex flex-col space-y-4 "
              >
                <h3>
                  <b>Create an Appointment</b>
                </h3>
                <div className="mb-2">
                  <label
                    for="date"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    placeholder="Date"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                  ></input>
                </div>

                <div className="mb-2">
                  <label
                    for="time"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    placeholder="Time"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                  ></input>
                </div>

                <div className="mb-2">
                  <textarea
                    placeholder="Description"
                    rows="5"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                  ></textarea>
                </div>

                {/* <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-sky-700 ">
                            Send
                        </button> */}
                <div className="mt-6 justify-center items-center flex w-full">
                  <Button
                    color="white"
                    bgColor="#03C9D7"
                    //  bgColor={currentColor}
                    text="Create"
                    borderRadius="10px"
                    size="md"
                    width="300px"
                    // margin-right="200px"
                  />
                </div>
              </form>
              {/* </div> */}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
