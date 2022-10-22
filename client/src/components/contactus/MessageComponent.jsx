import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const API_URL = "http://localhost:4000/api/contact";

function MessageComponent() {
  const [messages, setMessages] = useState([]);
  const [x, setx] = useState(4);
  const [c, setc] = useState(4);
  const [abc, setabc] = useState();
  const [rm, setrm] = useState();
  const [y, sety] = useState([]);
  const [reply, setReply] = useState("");
  const [replyError, setReplyError] = useState("");
  // const [time, setTime] = useState();

  async function fetchMessages() {
    try {
      const res = await axios.get(API_URL);
      setMessages(res.data.filter((g) => g.reply == null));
      sety(res.data.filter((g) => g.reply != null));
    } catch (error) {
      console.error(error.message);
    }
  }
  

  useEffect(() => {
    fetchMessages();
  }, []);

  const onSubmitForm1 = async (e) => {
    e.preventDefault();
    const contact_id = e.target.contact_id.value;
    let checkErrors = 0;
    try {
      if (!reply.trim()) {
        setReplyError("Reply field cant be empty");
        checkErrors = 1;
      }
      if (checkErrors == 0) {
        const x = API_URL + "/" + contact_id;
        const res = await axios.put(x, { reply });
        setReply("");
        fetchMessages();
        handlePopup();
        alert("reply sent");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const [popup, setPopup] = useState(false);

  const handlePopup = (message) => {
    setabc(message);
    setPopup(!popup);
  };

  const [popupR, setPopupR] = useState(false);
  const a = ["More", "Less"];
  const handlePopupR = (reply) => {
    setrm(reply);
    setPopupR(!popupR);
  };

  const handlegre = () => {
    if (x != 4) {
      setx(4);
    } else {
      setx(messages.length);
    }
  };

  const handlegrec = () => {
    if (c != 4) {
      setc(4);
    } else {
      setc(y.length);
    }
  };

  const handleDelete = async (contact_id) => {
    try {
      const x = API_URL + "/" + contact_id;
      const res = await axios.delete(x);
      console.log(res.data);
      fetchMessages();
      alert("Message discarded");
    } catch (error) {
      console.error(error.message);
    }
  };

  // const timecal=(time)=>{

  //   let now = new Date()
  //   let then = new Date(time);
  //   let nowAdj = now.getTime()
  //   let thenAdj = then.getTime()
  //   let differenceInDays = (nowAdj-thenAdj)/1000;

  //   switch(true){
  //     case differenceInDays<=3600: setTime(`${Math.round(differenceInDays/60)} mins ago`);break;
  //     case differenceInDays<=86400: setTime(`${Math.round(differenceInDays/3600)} hrs ago`);break;
  //     default : setTime(`${Math.round(differenceInDays/86400)} days ago`);break;
  //   }

  // }

  return (
    <div className="relative p-5 w-full mt-14 md:mt-0 mb-2 h-full">
      <div className="flex justify-start mb-7">
        <h2 className="text-2xl font-bold leading-7 font-serif text-gray-900 sm:text-3xl">
          Contact Us
        </h2>
      </div>

      {/*Start of the section container */}
      <div className="p-2 bg-gray-100 shadow-2xl mb-5">
        {/*section name */}
        <h3 className="border-b mb-5 border-black font-medium uppercase">
          New messages
        </h3>

        {/*grid styling to contain 4 cards per section */}
        <div className="m-2 grid col-span-2 lg:grid-cols-2  xl:grid-cols-4 ">
          {messages.length === 0 ? (
            <div className="w-full col-span-4">
              <p className=" text-base flex justify-center italic text-gray-600">
                NO NEW MESSAGES
              </p>
            </div>
          ) : (
            ""
          )}

          {messages &&
            messages
              .filter((yy) => yy.reply == null)
              .slice(0, x)
              .map((yy) => (
                <div
                  key={yy.contact_id}
                  className="p-6 bg-white rounded-lg border min-h-fit flex flex-col border-gray-200 m-2 shadow-inner hover:scale-110 transition duration-300"
                >
                  <h4 className="mb-3 font-medium text-center">{yy.name}</h4>
                  {/*content */}
                  <p className="mb-7 text-gray-700">
                    {yy.message.length > 130
                      ? yy.message.substring(0, 130)
                      : yy.message}
                    <b
                      className={
                        yy.message.length > 50
                          ? "text-blue-400 cursor-pointer"
                          : "hidden"
                      }
                      onClick={() => {
                        handlePopup(yy);
                      }}
                    >
                      Read more
                    </b>
                  </p>

                  {/*buttons for reply and discard */}
                  <div className="flex justify-center items-end  basis-10/12">
                    <button
                      className=" inline-flex items-center w-20 justify-center bg-cyan-500 hover:bg-cyan-400 p-2 w-30 rounded text-white font-medium mx-2 mb-2"
                      onClick={() => {
                        handlePopup(yy);
                      }}
                    >
                      Reply
                    </button>
                    <button
                      className="inline-flex items-center justify-center w-20 bg-cyan-500 hover:bg-cyan-400 p-2 w-30 rounded text-white font-medium mx-2 mb-2"
                      onClick={() => handleDelete(yy.contact_id)}
                    >
                      Discard
                    </button>
                  </div>

                  {/*Time recieved */}

                  <p className="text-center text-xs text-gray-500">
                    {yy.received_date.substring(0, 10)}
                  </p>
                  <p className="text-center text-xs text-gray-500">
                    {yy.received_time.substring(0, 8)}
                  </p>
                </div>
              ))}
        </div>

        {/*end of the grid */}

        <div
          className={
            messages.length > 4 && x == 4 ? "p-2 flex justify-end" : "hidden"
          }
        >
          <button
            className="bg-cyan-500 hover:bg-cyan-400 text-white text-center p-2 rounded-lg w-20"
            onClick={handlegre}
          >
            More
          </button>
        </div>
        <div className={x != 4 ? "p-2 flex justify-end" : "hidden"}>
          <button
            className="bg-cyan-500 hover:bg-cyan-400 text-white text-center p-2 rounded-lg w-20"
            onClick={handlegre}
          >
            Less
          </button>
        </div>
      </div>
      {/*end of the section container */}
      <div
        className={
          popup
            ? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0"
            : "hidden"
        }
      >
        <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[70%] mx-[15%] ">
          <div className="flex flex-row w-full mb-4 border-b-2   border-cyan-500 py-2 items-center">
            <div className="basis-1/2 flex flex-row justify-end">
              <p className="text-center text-xl font-bold">
                {abc && abc.name} <i>({abc && abc.email})</i>
              </p>
            </div>
            <div className="basis-1/2 flex flex-row justify-end mr-2">
              <AiOutlineClose
                className="w-6 h-6 cursor-pointer"
                onClick={handlePopup}
              />
            </div>
          </div>

          <div className="w-full p-2 shadow-xl mb-10 grid grid-cols-1 lg:grid-cols-2  ">
            <div className=" p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4 border-4 ">
              <p className="text-center font-medium mb-4">Message</p>
              <p>{abc && abc.message}</p>
            </div>
            <div className="  p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4 border-4  ">
              <p className="text-center font-medium">Type reply</p>
              <form onSubmit={onSubmitForm1}>
                <div>
                  <textarea
                    name="replyM"
                    placeholder="Your reply"
                    value={reply}
                    onChange={(e) => {
                      setReply(e.target.value);
                      setReplyError("");
                    }}
                    rows="5"
                    className="ring-1 ring-gray-300 w-full mt-4 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                  ></textarea>
                  <p className="text-red-500 text-sm">{replyError}</p>
                  <input
                    type="hidden"
                    name="contact_id"
                    value={abc && abc.contact_id}
                  />
                </div>

                <div className="flex justify-center">
                  <button className=" inline-flex items-center justify-center bg-cyan-500 text-white p-2 w-24 rounded hover:border-2 hover:bg-cyan-400 font-medium mx-2 mb-2">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*Start of The replies part section*/}

      <div className="p-2 bg-gray-100 shadow-2xl mb-5">
        {/*section name */}
        <h3 className="border-b mb-5 border-black font-medium uppercase">
          Replied Messages
        </h3>

        {/*grid styling to contain 4 cards per section */}
        <div className="m-2 grid col-span-2 lg:grid-cols-2  xl:grid-cols-4 ">
          {y.length == 0 ? (
            <div className="w-full col-span-4">
              <p className=" text-base flex justify-center italic text-gray-600">
                NO REPLIES
              </p>
            </div>
          ) : (
            ""
          )}
          {y &&
            y
              .filter((reply) => reply.reply != null)
              .slice(0, c)
              .map((reply) => (
                <div className="p-6 bg-white rounded-lg border min-h-fit  border-gray-200 m-2 shadow-inner  hover:scale-110 transition duration-300 cursor-pointer flex flex-col">
                  <h4 className="mb-3 font-medium text-center ">
                    {reply.name}
                  </h4>

                  <p className="mb-7 text-gray-700">
                    {reply.message.length > 130
                      ? reply.message.substring(0, 130)
                      : reply.message}
                    <b
                      className={
                        reply.message.length > 130
                          ? "text-blue-400 cursor-pointer"
                          : "hidden"
                      }
                      onClick={() => {
                        handlePopupR(reply);
                      }}
                    >
                      Read more
                    </b>
                  </p>

                  <div className="flex flex-col justify-center  basis-10/12">
                    <p
                      className="text-center text-sm text-gray-500 hover:underline mb-2"
                      onClick={() => {
                        handlePopupR(reply);
                      }}
                    >
                      Click to see reply
                    </p>

                    <p className="text-center text-xs text-gray-500">
                      {reply.reply_date.substring(0, 10)}
                    </p>
                    <p className="text-center text-xs text-gray-500">
                      {reply.reply_time.substring(0, 8)}
                    </p>
                  </div>
                </div>
              ))}
        </div>
        {/*end of the grid */}

        <div
          className={y.length > 4 && c == 4 ? "p-2 flex justify-end" : "hidden"}
        >
          <button
            className="bg-cyan-500 hover:bg-cyan-400 text-white text-center p-2 rounded-lg w-20"
            onClick={handlegrec}
          >
            More
          </button>
        </div>
        <div className={c != 4 ? "p-2 flex justify-end" : "hidden"}>
          <button
            className="bg-cyan-500 hover:bg-cyan-400 text-white text-center p-2 rounded-lg w-20"
            onClick={handlegrec}
          >
            Less
          </button>
        </div>
      </div>
      {/*end of the section container */}
      <div
        className={
          popupR
            ? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0"
            : "hidden"
        }
      >
        <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[70%] mx-[15%] p-2">
          <div className="w-full inline-flex justify-end items-end">
            <AiOutlineClose
              className="w-6 h-6 cursor-pointer"
              onClick={handlePopupR}
            />
          </div>
          <div className="w-full mb-4">
            <p className="text-lg text-center font-medium border-b-2 border-gray-900">
              {rm && rm.name} <i>{rm && rm.email}</i>
            </p>
          </div>

          <div className="w-full p-2 shadow-xl mb-10 grid grid-cols-1 lg:grid-cols-2">
            <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
              <p className="text-center font-medium mb-2">Message</p>
              <p>{rm && rm.message}</p>
            </div>
            <div className=" bg-slate-100 p-2 text-center min-h-fit shadow-inner mx-2 rounded-xl mb-4">
              <p className="text-center font-medium mb-2">Reply</p>
              <p>{rm && rm.reply}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
