import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
              className=" bg-cyan-500 text-white hover:bg-blue-400 py-2 px-3 rounded mr-1 cursor-pointer"
            >
              Appointment
            </button>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
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
              className=" bg-cyan-500 text-white hover:bg-blue-400 py-2 px-3 rounded mr-1 cursor-pointer"
            >
              Chat
            </button>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
