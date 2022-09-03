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
    <div className="mt-3 flex flex-row justify-evenly gap-2">
      <div className="flex flex-col">
        <div class="bg-blue-100 w-56 justify-center flex rounded-lg py-5 px-6 mb-4 text-base text-blue-700 " >
          <p>Appointment</p>

        </div>

        <div class="flex justify-center">
          <form action="">
          <div class="form-check form-check-inline">
            <input class=" form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">on</label>
          </div>
          <div class="form-check form-check-inline">
            <input class=" form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">off</label>
          </div>
          </form>
          

        </div>
      </div>

      <div className="flex flex-col">
        <div class="bg-blue-100 w-56 justify-center flex rounded-lg py-5 px-6 mb-4 text-base text-blue-700 " >
          <p>Chat</p>
        </div>

        <div class="flex justify-center">
          <form action="">
          <div class="form-check form-check-inline">
            <input class=" form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600
             checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left
              mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label inline-block text-gray-800" for="inlineRadio30">on</label>
          </div>
          <div class="form-check form-check-inline">
            <input class=" form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label inline-block text-gray-800" for="inlineRadio40">off</label>
          </div>

          </form>
          

        </div>
      </div>



    </div>
  );
}

