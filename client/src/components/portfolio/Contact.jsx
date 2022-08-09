import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import HelpIcon from "@mui/icons-material/Help";

export default function Contact() {
  const handle = () => {
    console.log("hello");
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<HelpIcon />}>
          <div>
            <button
              to=""
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
            <button
              to=""
              className="w-32 bg-cyan-500 text-white hover:bg-blue-400 py-2 px-3 rounded mr-1 cursor-pointer"
            >
              Chat
            </button>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className="italic text-sm">
            In order to contact with the service provider you can use the chat
            option.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
