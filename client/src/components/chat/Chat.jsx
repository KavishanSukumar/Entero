import { useState, useRef, useEffect } from "react";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import io from "socket.io-client";
import Message from "./Message";
import User from "./User";
import axios from "axios";
import ChatSection from "./ChatSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GETCHAT_URL = "http://localhost:4000/api/chat/";
const API_URL_USER = "http://localhost:4000/api/user/";

function Chat(props) {
  const [userId, setUserId] = useState(props.data);
  const [conversation, setConversation] = useState([]);
  const [chatSection, setchatSection] = useState();

  useEffect(() => {
    getConversation();
  }, [userId]);

  const getConversation = async () => {
    const res = await axios.get(GETCHAT_URL + userId);
    setConversation(res.data);
  };

  const getChatSection = async (e) => {
    const sender = e.sender_id !== userId ? e.sender_id : e.receiver_id;
    toast("Wait...");
    const user = await axios.post(API_URL_USER, {
      userid: sender,
    });

    setchatSection(
      <ChatSection conversation={e} userId={userId} user={user.data} />
    );
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
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
          <div className="overflow-auto max-h-[43rem] h-[43rem]  mt-3">
            {conversation.map((e) => (
              <div
                key={e.conversation_id}
                onClick={() => {
                  getChatSection(e);
                }}
              >
                <User conversation={e} userId={userId} />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col lg:basis-2/3 basis-full mt-6 ml-3">
          {chatSection}
        </div>
      </div>
    </>
  );
}

export default Chat;
