import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import HelpIcon from "@mui/icons-material/Help";
import Button from "../button/Button";
import axios from "axios";

import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Shakir from "../../Shakir.jpg";

// import * as React from "react";
const CHAT_URL = "http://localhost:4000/api/chat";
export default function Contact({ data, myuserid, userid }) {
  //const API_URL = "http://localhost:4000/api/customer/appointment";
  const API_URL = "http://localhost:4000/api/auth/isverify";

  let a = "http://localhost:4000/api/customer/appointment";

  // const id = props.data;

  //   const [date, setDate] = useState("");
  //   const [time, setTime] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [customer_id, setCustomer_id] = useState("4");
  //   const [sp_id, setSp_id] = useState("5");
  //  const [id, setId] = React.useState(props.data);
  //   const [appointment, setAppointment] = React.useState([]);

  //   async function getAppointment() {
  //     const res = await axios.post(API_URL, {
  //       id: id,
  //     });
  //     setAppointment(res.data);
  //   }

  //   const onSubmitForm = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const res = await axios.post(API_URL, { date, time, description,id, });
  //       setDate('');
  //       setTime('');
  //       setDescription('');

  //       console.log(res.data);
  //       alert('Appointment Request sent');
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [customer_id, setCustomer_id] = useState();
  const [sp_id, setSp_id] = useState(21);

  async function isAuth() {
    try {
      const res = await axios.get(API_URL, {
        headers: { token: localStorage.token },
      });
      setCustomer_id(res.data.payload);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    isAuth();
  }, []);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    // console.log("hello");
    // console.log(date,time,description)
    // const x=new Date()
    // const {date}= x.getFullYear +'-' + x.getMonth +  '-'+x.getDate;
    // const {time}=x.getHours+':'+x.getMinutes+':'+x.getSeconds;

    try {
      let b = a + "/" + customer_id;
      const body = { date, time, description, sp_id };
      const res = await axios.post(b, body);
      setDate("");
      setTime("");
      setDescription("");
      // setSp_id(21);

      console.log(res.data);
      alert("Appointment Request sent");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handle = () => {
    console.log("hello");
  };
  const [popup, setPopup] = useState(false);
  const [value, setValue] = React.useState(0);
  const [appointment, setAppointment] = useState();
  const [chat, setChat] = useState();
  const handlePopup = () => {
    setPopup(!popup);
  };
  useEffect(() => {
    if (data) {
      handleAppointment();
      handleChat();
    }
  }, []);

  const handleAppointment = () => {
    setAppointment(data.appointment_enable);
    // setAppointment(true);
  };
  const handleChat = () => {
    // setChat(data.chat_enable);
    setChat(true);
  };
  const CreateChat = async () => {
    const res = await axios.post(CHAT_URL, {
      senderId: myuserid,
      receiverId: userid,
    });
    if (res.data) {
      window.location = "/customerchat";
    }
  };
  console.log(userid);

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<HelpIcon />}>
          <div>
            <button
              to=""
              onClick={handlePopup}
              className=" w-32 bg-cyan-500 text-white hover:bg-blue-400 py-2 px-3 rounded mr-1 cursor-pointer"
              disabled={appointment}
            >
              Appointment
            </button>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className="italic text-sm">
            {appointment
              ? "In order to contact the service provider you can use the appointment option to schedule a time slot. you are able to pick out your convinient time from the calender."
              : "Appointment is disabled by the service provider"}
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
              onClick={CreateChat}
              to=""
              className="w-32 bg-cyan-500 text-white hover:bg-blue-400 py-2 px-3 rounded mr-1 cursor-pointer"
              disabled={!chat}
            >
              Chat
            </button>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className="italic text-sm">
            {chat
              ? "In order to contact with the service provider you can use the chat option."
              : "Chat is disabled by the service provider"}
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
                onSubmit={onSubmitForm}
                className="flex flex-col space-y-4 "
              >
                <h3>
                  <b>Create an Appointmentssss</b>
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
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
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
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                  ></input>
                </div>

                <div className="mb-2">
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="5"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                  ></textarea>
                </div>

                {/* <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-sky-700 ">
                            Send
                        </button> */}
                <div className="mt-6 justify-center items-center flex w-full">
                  <button
                    type="submit"
                    color="white"
                    bgColor="#03C9D7"
                    //  bgColor={currentColor}

                    borderRadius="10px"
                    size="md"
                    width="300px"
                    // margin-right="200px"
                    className=" inline-flex items-center justify-center bg-cyan-500 text-white p-2 w-24 rounded hover:border-2 hover:bg-cyan-400 font-medium mx-2 mb-2"
                  >
                    Create
                  </button>

                  {/* <button className=" inline-flex items-center justify-center bg-cyan-500 text-white p-2 w-24 rounded hover:border-2 hover:bg-cyan-400 font-medium mx-2 mb-2">
                    Send
                  </button> */}
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
