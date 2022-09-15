import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:4000/api/contact";

function ContactForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const x = new Date();
    const { received_date } =
      x.getFullYear + "-" + x.getMonth + "-" + x.getDate;
    const { received_time } =
      x.getHours + ":" + x.getMinutes + ":" + x.getSeconds;
    const validEmailCheck=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let checkErrors = 0;
    try {
      if (!name.trim()) {
        setNameError("Name is required");
        checkErrors = 1;
      }
      if (!email.trim()) {
        setEmailError("Email is required");
        checkErrors = 1;
      }
      else if(!validEmailCheck.test(email)){
        setEmailError("Email is invalid");
        checkErrors = 1;
      }
      if (!message.trim()) {
        setMessageError("Message is required");
        checkErrors = 1;
      }

      if (checkErrors == 0) {
        const res = await axios.post(API_URL, {
          name,
          email,
          message,
          received_date,
          received_time,
        });
        setName("");
        setEmail("");
        setMessage("");
        console.log(res.data);
        alert("Message sent");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

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
            <form className="flex flex-col space-y-4 " onSubmit={onSubmitForm}>
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError("");
                  }}
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                ></input>
                <p className="text-red-500 text-sm">{nameError}</p>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Your email"
                  name="email"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)
                  setEmailError('')}}
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                ></input>
                <p className="text-red-500 text-sm">{emailError}</p>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => {setMessage(e.target.value);setMessageError('')}}
                  rows="5"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                ></textarea>
                <p className="text-red-500 text-sm">{messageError}</p>
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
