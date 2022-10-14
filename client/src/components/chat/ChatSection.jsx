import React, { useEffect, useState, useRef } from "react";
import Message from "./Message";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const API_URL_MESSAGES = "http://localhost:4000/api/message/";
const API_URL_SENDMESSAGES = "http://localhost:4000/api/message/";

function ChatSection({ conversation, userId, user }) {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    getAllMessages();
    readMessage();
  }, [conversation.conversation_id]);

  const readMessage = async () => {
    const res = await axios.put(
      API_URL_MESSAGES + conversation.conversation_id
    );
  };

  const getAllMessages = async () => {
    const res = await axios.get(
      API_URL_MESSAGES + conversation.conversation_id
    );
    setMessages(res.data);
  };

  const handleChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleClick = (event) => {
    return messageInput;
  };

  const sendMessage = () => {
    const message = handleClick();
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    var today = new Date(),
      time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const conversation_id = conversation.conversation_id;
    const sender_id = userId;
    const res = axios.post(API_URL_SENDMESSAGES, {
      conversation_id,
      sender_id,
      message,
      date,
      time,
    });
  };

  return (
    <>
      <div className="flex flex-row justify-start items-center border-b-2">
        <ArrowBackIosIcon className="!w-5 !h-10 mr-5 lg:!hidden" />
        <p className="font-serif text-2xl capitalize">{user.name}</p>
      </div>
      <div className="mt-3 overflow-auto max-h-screen h-screen">
        {messages.map((e) => (
          <Message status={userId == e.sender_id ? true : false} message={e} />
        ))}
      </div>
      <div className="flex flex-row mt-5">
        <div className="basis-full">
          <label>
            <input
              onChange={handleChange}
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Type a message..."
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="flex items-center">
          <span>
            <button onClick={sendMessage}>
              <SendIcon
                className="!h-10 !w-10 fill-lime-600 hover:fill-lime-500"
                viewBox="0 0 20 20"
              />
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default ChatSection;
