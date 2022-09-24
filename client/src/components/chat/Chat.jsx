import { useState, useRef, useEffect } from "react";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SendIcon from "@mui/icons-material/Send";
import io from "socket.io-client";
import Message from "./Message";
import User from "./User";
import axios from "axios";

const GETCHAT_URL = "http://localhost:4000/api/chat/";

function Chat(props) {
  const [userId, setUserId] = useState(props.data);
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      const res = await axios.get(GETCHAT_URL + userId);
      setConversation(res.data);
    };
    getConversation();
  }, [userId]);

  console.log(conversation[0]);

  return (
    <div className="flex flex-row mt-14 mb-10 md:mt-0 max-h-screen h-{100vh -56px}">
      <div className="hidden lg:flex flex-col basis-1/3  max-h-screen border-r-2 ">
        {/*----------------------------------- Search Bar------------------------------- */}
        <div className="mt-6 ml-3 mr-1">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <SearchIcon
                className="!h-5 !w-5 fill-slate-300"
                viewBox="0 0 20 20"
              />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for Chats..."
              type="text"
              name="search"
            />
          </label>
        </div>
        {/* ---------------------------------------------------------------------------- */}

        {/* ---------------------------------Chat user-------------------------------- */}
        <div className="overflow-auto max-h-min  mt-3">
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
      <div className=" flex flex-col lg:basis-2/3 basis-full mt-6 ml-3">
        <div className="flex flex-row justify-start items-center border-b-2">
          <ArrowBackIosIcon className="!w-5 !h-10 mr-5 lg:!hidden" />
          <p className="font-serif text-2xl capitalize">Fabs</p>
        </div>
        <div className="mt-3 overflow-auto max-h-screen h-screen">
          <Message status={true} />
          <Message />
          <Message status={true} />
          <Message />
        </div>
        <div className="flex flex-row mt-5">
          <div className="basis-full">
            <label>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Type a message..."
                type="text"
                name="search"
              />
            </label>
          </div>
          <div className="flex items-center">
            <span>
              <SendIcon
                className="!h-10 !w-10 fill-lime-600 hover:fill-lime-500"
                viewBox="0 0 20 20"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
